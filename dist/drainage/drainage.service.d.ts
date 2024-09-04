import { CreateDrainageDto } from './dto/create-drainage.dto';
import { UpdateDrainageDto } from './dto/update-drainage.dto';
export declare class DrainageService {
    create(createDrainageDto: CreateDrainageDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDrainageDto: UpdateDrainageDto): string;
    remove(id: number): string;
}
