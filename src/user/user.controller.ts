import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	async create(@Body('name') name: string, @Body('ticket') ticket: string) {
		return this.userService.create(name, ticket);
	}

	@Get()
	async getAll() {
		console.log('controller');
		return this.userService.getUsers();
	}

	// @Put()
	// async updateOne() {}

	@Delete()
	async deleteOne(@Body('id') id: string) {
		return this.userService.deleteOne(id);
	}
}
