// Core
import { object, string, number } from 'yup';


export const postSape = {
    shape: {
        title:  'Test title',
        body:   'Test body',
        userId: 1,
    },
    schema: object().shape({
        title:  string().required(),
        body:   string().required(),
        userId: number().required(),
    }),
};

