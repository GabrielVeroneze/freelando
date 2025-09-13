import * as yup from 'yup'

export const cadastroSchema = yup.object().shape({
    nome: yup
        .string()
        .trim()
        .lowercase()
        .required('Campo obrigatório')
        .min(2, 'Digite seu nome completo'),
    nascimento: yup
        .date()
        .required('Campo obrigatório')
        .max(new Date(), 'Digite uma data válida')
        .nullable(),
    estado: yup
        .object({
            value: yup.string().required('Campo obrigatório'),
            text: yup.string().required('Campo obrigatório'),
        })
        .required('Campo obrigatório'),
    cidade: yup
        .string()
        .required('Campo obrigatório')
        .max(58, 'Digite uma cidade válida'),
    telefone: yup
        .string()
        .required('Campo obrigatório')
        .matches(/^\d{11}$/, 'Número de telefone inválido'),
    email: yup
        .string()
        .required('Campo obrigatório')
        .email('Digite um e-mail válido'),
    senha: yup
        .string()
        .required('Campo obrigatório'),
    confirmarSenha: yup
        .string()
        .required('Campo obrigatório')
        .oneOf([yup.ref('senha')], 'As senhas não conferem'),
    termos: yup
        .boolean()
        .oneOf([true], 'Você deve aceitar os termos'),
})

export type CadastroSchemaType = yup.InferType<typeof cadastroSchema>
