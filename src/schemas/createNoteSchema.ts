import Joi from 'joi';

const messagesError = {
  title: {
    'string.empty': 'Título não pode ser vazio',
  },
  content: {
    'string.empty': 'Conteúdo não pode ser vazio',
    'any.required': 'Conteúdo é obrigatório',
  },
  favorite: {
    'boolean.base': 'Favorito deve ser um booleano',
    'any.string': 'Favorito deve ser um booleano',
  },
  userId: {
    'string.empty': 'Usuário não pode ser vazio',
    'any.required': 'Usuário é obrigatório',
  },
};

export const createNoteSchema = Joi.object({
  title: Joi.string().required().messages(messagesError.title),
  content: Joi.string().required().messages(messagesError.title),
  favorite: Joi.boolean().messages(messagesError.favorite),
  userId: Joi.string().required().messages(messagesError.title),
});
