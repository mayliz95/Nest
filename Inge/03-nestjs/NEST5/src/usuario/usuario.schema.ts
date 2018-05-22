import * as Joi from 'joi';
//Installar Joi

export const USUARIO_SCHEMA = Joi
    .object()
    .keys({
        nombre: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z]$/)
            .min(3)
            .max(30),
        edad: Joi
            .number()
            .integer()
            .greater(18)
            .less(40),
        apellido: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z]$/)
            .min(3)
            .max(30),
        }
    )