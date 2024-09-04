import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
import { RolesModule } from './roles/roles.module';
import { DrainageModule } from './drainage/drainage.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UsersModule, PhotosModule, RolesModule, DrainageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
