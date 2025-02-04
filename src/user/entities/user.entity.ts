import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User  extends Document{
    // @Prop({ required: true })
    // id:number;
 
    @Prop({ required: true })
    firstName:string;

    @Prop({ required: true })
    lastName:string;

    @Prop({ required: true })
    email:string;

    @Prop({ required: true })
    password:string;

    @Prop({ required: true })
    role:string;
}

export const UserSchema = SchemaFactory.createForClass(User);
