import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DrainageService } from './drainage.service';
import { CreateDrainageDto } from './dto/create-drainage.dto';
import { UpdateDrainageDto } from './dto/update-drainage.dto';

@Controller('drainage')
export class DrainageController {
  constructor(private readonly drainageService: DrainageService) {}

  @Post()
  create(@Body() createDrainageDto: CreateDrainageDto) {
    return this.drainageService.create(createDrainageDto);
  }

  @Get()
  findAll() {
    return this.drainageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.drainageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDrainageDto: UpdateDrainageDto) {
    return this.drainageService.update(+id, updateDrainageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drainageService.remove(+id);
  }
}
