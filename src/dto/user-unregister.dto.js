import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import { passwordDTOSchema } from '#Dto/dto-type.js';
import { Type } from '@sinclair/typebox';

const UserUnregisterDTOSchema = Type.Object(
    {
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

addErrors(ajv);

const validateSchema = ajv.compile(UserUnregisterDTOSchema);

const userUnregisterDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).send({
            errors: validateSchema.errors.map((error) => error.message),
        });

    next();
};

export default userUnregisterDTO;
