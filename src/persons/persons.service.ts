import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person, PersonDocument } from 'src/schemas/person.schema';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonsService {
  constructor(
    @InjectModel(Person.name) private personModel: Model<PersonDocument>,
  ) {}

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    return new this.personModel(createPersonDto).save();
  }

  async findAll() {
    return this.personModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  async update(_id: string, updatePersonDto: UpdatePersonDto) {
    return this.personModel.findOneAndUpdate({ _id }, updatePersonDto);
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
