import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BraspressModule } from './braspress/braspress.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: 'dev.env', isGlobal: true }),
    BraspressModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
