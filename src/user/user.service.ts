import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { Constants } from 'src/utils/constants';

@Injectable()
export class UserService {


  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(userData: Partial<User>) : Promise<User>{
    const newUser = new this.userModel(userData);
    console.log("New User: ", newUser);
    newUser.role=Constants.ROLES.USER_ROLE;
    return newUser.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
