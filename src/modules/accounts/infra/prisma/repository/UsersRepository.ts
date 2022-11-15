import { prisma } from '@config/database/db';
import {
  CreateUserDTO,
  UserResponse
} from '@modules/accounts/dtos/CreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { User } from '@prisma/client';

export class UsersRepository implements IUsersRepository {
  async create(data: CreateUserDTO): Promise<User> {
    const createUser = await prisma.user.create({
      data
    });

    return createUser;
  }

  async findByEmail(email: string): Promise<User | null> {
    const emailExists = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive'
        }
      }
    });

    return emailExists;
  }

  async findByDocument(document: string): Promise<User | null> {
    const documentExists = await prisma.user.findFirst({
      where: {
        document: {
          equals: document,
          mode: 'insensitive'
        }
      }
    });

    return documentExists;
  }
}
