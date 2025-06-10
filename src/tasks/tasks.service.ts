import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class TasksService {
  async findAll(userId: number) {
    return prisma.task.findMany({ where: { userId } });
  }

  async create(userId: number, title: string) {
    return prisma.task.create({
      data: { title, userId }
    });
  }

  async update(userId: number, taskId: number, done: boolean) {
    return prisma.task.updateMany({
      where: { id: taskId, userId },
      data: { done }
    });
  }

  async delete(userId: number, taskId: number) {
    return prisma.task.deleteMany({
      where: { id: taskId, userId }
    });
  }
}
