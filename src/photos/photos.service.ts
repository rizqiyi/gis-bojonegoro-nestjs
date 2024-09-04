import { Injectable } from '@nestjs/common';
import ImageKit from 'imagekit';
import { FileObject } from 'imagekit/dist/libs/interfaces';
import { CustomException } from 'src/helpers/exception';

@Injectable()
export class PhotosService {
  private imagekit: ImageKit;

  constructor() {
    this.imagekit = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    });
  }

  async create(payload: Express.Multer.File, folder: string) {
    try {
      return new Promise((resolve) => {
        this.imagekit.upload(
          { file: payload.buffer, fileName: payload.originalname, useUniqueFileName: true, folder },
          (err, docs) => {
            if (err) throw new Error(err);

            return resolve(docs);
          },
        );
      });
    } catch (error) {
      throw new CustomException(`Error creating file: ${error.message}`, 400);
    }
  }

  async findOne(fileId: string): Promise<FileObject> {
    try {
      const file = await this.imagekit.getFileDetails(fileId);
      return file;
    } catch (error) {
      throw new CustomException(`Error get file: ${error.message}`, 404);
    }
  }

  async remove(fileId: string): Promise<void> {
    try {
      await this.imagekit.deleteFile(fileId);
    } catch (error) {
      throw new CustomException(`Error deleting file: ${error.message}`, 404);
    }
  }
}
