import { Controller, Get, Post, Patch, Delete, Body, Param, Request, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async findAll(@Request() req) {
    return this.tasksService.findAll(req.user.userId);
  }

  @Post()
  async create(@Request() req, @Body() body: { title: string }) {
    return this.tasksService.create(req.user.userId, body.title);
  }

  @Patch(':id')
  async update(@Request() req, @Param('id') id: string, @Body() body: { done: boolean }) {
    return this.tasksService.update(req.user.userId, parseInt(id), body.done);
  }

  @Delete(':id')
  async delete(@Request() req, @Param('id') id: string) {
    return this.tasksService.delete(req.user.userId, parseInt(id));
  }
}
