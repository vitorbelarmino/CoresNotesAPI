import Joi from 'joi';

const messagesError = {
  title: {
    'string.empty': 'Título não pode ser vazio',
  },
  content: {
    'string.empty': 'Conteúdo não pode ser vazio',
    'any.required': 'Conteúdo é obrigatório',
  },
  color: {
    'string.empty': 'Cor não pode ser vazio',
    'any.required': 'Cor é obrigatório',
  },
  favorite: {
    'any.required': 'Favorito é obrigatório',
    'boolean.base': 'Favorito deve ser um booleano',
  },
  userId: {
    'string.empty': 'Usuário não pode ser vazio',
    'any.required': 'Usuário é obrigatório',
  },
};

export const updateNoteSchema = Joi.object({
  title: Joi.string().required().messages(messagesError.title),
  content: Joi.string().required().messages(messagesError.title),
  color: Joi.string().required().messages(messagesError.color),
  favorite: Joi.boolean().required().messages(messagesError.favorite),
  userId: Joi.string().required().messages(messagesError.userId),
});
