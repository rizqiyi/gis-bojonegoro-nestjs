import { CreatePhotoDto } from './dto/create-photo.dto';
export declare class PhotosService {
    create(createPhotoDto: CreatePhotoDto): string;
    findOne(id: number): string;
    remove(id: number): string;
}
