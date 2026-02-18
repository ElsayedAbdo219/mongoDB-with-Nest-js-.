import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
       MongooseModule.forRoot('mongodb+srv://application_first_nest:123123123@cluster0.vb6qksk.mongodb.net/two-nest?retryWrites=true&w=majority'),
       UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
