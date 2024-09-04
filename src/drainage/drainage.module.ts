import { Module } from '@nestjs/common';
import { DrainageService } from './drainage.service';
import { DrainageController } from './drainage.controller';

@Module({
  controllers: [DrainageController],
  providers: [DrainageService],
})
export class DrainageModule {}
