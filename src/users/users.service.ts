import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async findByEmail(email: string) {
    return await prisma.user.findUnique({ where: { email } });
  }

  async create(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
  }
}
