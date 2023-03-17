import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
	constructor(
		@InjectModel('User') private readonly userModel: Model<UserDocument>
	) {}

	async getUsers() {
		console.log('service');
		return this.userModel.find().exec();
	}

	async create(name: string, ticket: string): Promise<UserDocument> {
		const newUser = new this.userModel({
			name,
			ticket,
		});
		return newUser.save();
	}

	// as duas funções abaixo são apenas para que o CRUD completo exista.
	async updateOne(id: string, name: string, ticket: string): Promise<User> {
		return this.userModel
			.findOneAndUpdate({ _id: id }, { name, ticket }, { new: true })
			.exec();
	}

	async deleteOne(id: string): Promise<User> {
		return this.userModel.findOneAndDelete({ _id: id }).exec();
	}
}
