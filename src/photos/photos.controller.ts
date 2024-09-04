import { Controller, Post, Body, UseInterceptors, UploadedFile, Get, Param, Delete } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CustomException } from 'src/helpers/exception';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@UploadedFile() file: Express.Multer.File, @Body('folder') folder: string = '') {
    if (!file) throw new CustomException('Please attach a file!', 400);

    const docs = await this.photosService.create(file, folder);

    return Promise.resolve(docs);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photosService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photosService.remove(id);
  }
}
