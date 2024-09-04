import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
export declare class PhotosController {
    private readonly photosService;
    constructor(photosService: PhotosService);
    create(createPhotoDto: CreatePhotoDto): string;
    findOne(id: string): string;
    remove(id: string): string;
}
