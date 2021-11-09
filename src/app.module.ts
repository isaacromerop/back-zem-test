import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './persons/persons.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PersonsModule,
    MongooseModule.forRoot(
      'mongodb+srv://test123:test123@cluster0.xt7mb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
