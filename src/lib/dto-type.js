import { Type } from '@sinclair/typebox';

export const idDTOSchema = Type.String({
    format: 'uuid',
    errorMessage: {
        type: 'El tipo de _id no es valido, debe ser un string',
        format: 'El formato del _id no es valido, debe ser un uuid4',
    },
});

export const nameDTOSchema = Type.String({
    minLength: 4,
    maxLength: 50,
    errorMessage: {
        minLength: 'El apellido debe tener al menos 4 caracteres de lungitud',
        maxLength:
            'El apellido debe tener como máximo 50 caracteres de lungitud',
    },
});

export const surnameDTOSchema = Type.String({
    minLength: 4,
    maxLength: 50,
    errorMessage: {
        minLength: 'El apellido debe tener al menos 4 caracteres de lungitud',
        maxLength:
            'El apellido debe tener como máximo 50 caracteres de lungitud',
    },
});

export const emailDTOSchema = Type.String({
    format: 'email',
    errorMessage: {
        type: 'El tipo del email no es valido, debe ser un string',
        format: 'El formato del email no es valido,',
    },
});

export const passwordDTOSchema = Type.String({
    format: 'password',
    minLength: 10,
    maxLength: 25,
    errorMessage: {
        type: 'El tipo de la contraseña no es valido',
        format: 'El formato de la contraseña, debe contener una mayúscula, una minúscula y un número',
        minLength:
            'La contraseña debe tener al menos 10 caracteres de lungitud',
        maxLength:
            'a contraseña debe tener como máximo 25 caracteres de lungitud',
    },
});
