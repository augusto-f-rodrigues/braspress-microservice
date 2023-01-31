import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BraspressService } from './braspress.service';
import { BraspressController } from './braspress.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  controllers: [BraspressController],
  providers: [BraspressService],
})
export class BraspressModule {}
