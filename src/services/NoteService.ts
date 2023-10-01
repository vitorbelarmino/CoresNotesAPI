import prisma from '../../prisma/script';
import { INote } from '../interfaces/INotes';

class NoteService {
  public async create(note: INote) {
    const newNote = await prisma.note.create({
      data: {
        title: note.title,
        content: note.content,
        favorite: note.favorite,
        userId: note.userId,
      },
    });
    return newNote;
  }

  public async getById(id: string) {
    const data = await prisma.note.findMany({
      where: {
        userId: id,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
    return data;
  }

  public async update(id: string, note: INote) {
    const updatedNote = await prisma.note.update({
      where: {
        id,
      },
      data: {
        title: note.title,
        content: note.content,
        favorite: note.favorite,
        color: note.color,
      },
    });
    return updatedNote;
  }

  public async delete(id: string) {
    await prisma.note.delete({
      where: {
        id,
      },
    });
  }
}

export { NoteService };
