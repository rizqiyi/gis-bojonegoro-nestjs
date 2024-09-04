import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
import { RolesModule } from './roles/roles.module';
import { DrainageModule } from './drainage/drainage.module';

@Module({
  imports: [UsersModule, PhotosModule, RolesModule, DrainageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
