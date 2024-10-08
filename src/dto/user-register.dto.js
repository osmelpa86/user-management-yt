import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import {
    emailDTOSchema,
    idDTOSchema,
    nameDTOSchema,
    passwordDTOSchema,
    surnameDTOSchema,
} from '#Dto/dto-type.js';
import { Type } from '@sinclair/typebox';

const RegisterDTOSchema = Type.Object(
    {
        _id: idDTOSchema,
        name: nameDTOSchema,
        surname: surnameDTOSchema,
        email: emailDTOSchema,
        password: passwordDTOSchema,
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'El formato del objeto no es válido',
        },
    }
);

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier');

ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);

addFormats(ajv, ['email', 'uuid']);
addErrors(ajv);

const validateSchema = ajv.compile(RegisterDTOSchema);

const userRegisterDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).send({
            errors: validateSchema.errors.map((error) => error.message),
        });

    next();
};

export default userRegisterDTO;
