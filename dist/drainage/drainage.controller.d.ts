import { DrainageService } from './drainage.service';
import { CreateDrainageDto } from './dto/create-drainage.dto';
import { UpdateDrainageDto } from './dto/update-drainage.dto';
export declare class DrainageController {
    private readonly drainageService;
    constructor(drainageService: DrainageService);
    create(createDrainageDto: CreateDrainageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDrainageDto: UpdateDrainageDto): string;
    remove(id: string): string;
}
