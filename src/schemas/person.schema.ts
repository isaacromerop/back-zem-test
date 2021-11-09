import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PersonDocument = Person & Document;

class Votes {
  positive: number;
  negative: number;
}

@Schema()
export class Person {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  category: string;
  @Prop()
  picture: string;
  @Prop()
  lastUpdated: string;
  @Prop({ type: Votes })
  votes: Votes;
}
export const PersonSchema = SchemaFactory.createForClass(Person);
