import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigService, ConfigModule} from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';


@Module({
  imports: [
    // this method taken only 2 args  isGloabl and path for envFile
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:['.local.env']
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'), // Load MONGO_URI from .env
      }),
      inject: [ConfigService],
    }),

    UserModule,

    TodoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
