import * as yup from 'yup'
import { Field, Form, Formik } from 'formik'
import { Col, Row } from 'react-grid-system'
import { Link } from 'react-router'
import { Box } from './styled'
import type { CadastroForm } from '@/types/CadastroForm'
import Tipografia from '@/components/Tipografia'
import CampoTexto from '@/components/CampoTexto'
import ListaSupensa from '@/components/ListaSuspensa'
import Botao from '@/components/Botao'
import estadosBrasileiros from '@/data/estados.json'

const schema = yup.object().shape({
    nome: yup
        .string()
        .required('Campo obrigatório')
        .min(2, 'Digite seu nome completo'),
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

const DadosPessoais = () => {
    const initialValues: CadastroForm = {
        nome: '',
        estado: { value: '', text: '' },
        cidade: '',
        telefone: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        termos: false,
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log('Dados do formulário: ', values)
            }}
        >
            {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                    <Box>
                        <Tipografia variante="h1" componente="h1">
                            Crie seu cadastro
                        </Tipografia>
                        <Tipografia variante="body" componente="body">
                            Crie seu perfil gratuitamente para começar a
                            trabalhar com os melhores freelancers. Em seguida,
                            você poderá dar mais detalhes sobre suas demandas e
                            sobre sua forma de trabalho.
                        </Tipografia>
                    </Box>
                    <Row>
                        <Col>
                            <CampoTexto
                                titulo="Nome completo"
                                name="nome"
                                type="text"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={4} sm={4}>
                            <ListaSupensa
                                titulo="Estado"
                                opcoes={estadosBrasileiros}
                            />
                        </Col>
                        <Col lg={8} md={8} sm={8}>
                            <CampoTexto
                                titulo="Cidade"
                                name="cidade"
                                type="text"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <CampoTexto
                                titulo="E-mail"
                                name="email"
                                type="email"
                            />
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <CampoTexto
                                titulo="Telefone"
                                name="telefone"
                                type="tel"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <CampoTexto
                                titulo="Senha"
                                name="senha"
                                type="password"
                            />
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <CampoTexto
                                titulo="Confirme sua senha"
                                name="confirmarSenha"
                                type="password"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>
                                <Field type="checkbox" name="termos" />
                                Aceito os termos e condições
                            </label>
                            {formik.errors.termos && (
                                <div style={{ color: 'red', marginTop: '4px' }}>
                                    {formik.errors.termos}
                                </div>
                            )}
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <Link to="/cadastro/interesses">
                                <Botao variante="secundaria">Anterior</Botao>
                            </Link>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <div style={{ textAlign: 'right' }}>
                                {/* <Link to='/cadastro/concluido'> */}
                                <Botao type="submit">Próxima</Botao>
                                {/* </Link> */}
                            </div>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    )
}

export default DadosPessoais
