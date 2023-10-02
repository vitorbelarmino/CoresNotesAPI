import prisma from '../../prisma/script';
import { v4 as uuid } from 'uuid';

class UserService {
  public async create() {
    const data = await prisma.user.create({ data: { id: uuid() } });
    return data.id;
  }
  public async getAllNotes(id: string) {
    const data = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        notes: true,
      },
    });
    return data;
  }
}

export { UserService };
