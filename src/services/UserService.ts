import prisma from '../../prisma/script';
import { v4 as uuid } from 'uuid';

class UserService {
  public async create() {
    const data = await prisma.user.create({ data: { id: uuid() } });
    return data.id;
  }
}

export { UserService };
