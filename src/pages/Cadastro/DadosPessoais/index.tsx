import { Form, Formik } from 'formik'
import { Col, Row } from 'react-grid-system'
import { Link } from 'react-router'
import { cadastroSchema, type CadastroSchemaType } from '@/schemas/cadastroSchema'
import { Box } from './styled'
import Tipografia from '@/components/Tipografia'
import CampoTexto from '@/components/CampoTexto'
import ListaSupensa from '@/components/ListaSuspensa'
import Checkbox from '@/components/Checkbox'
import Botao from '@/components/Botao'
import estadosBrasileiros from '@/data/estados.json'

const DadosPessoais = () => {
    const initialValues: CadastroSchemaType = {
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
            validationSchema={cadastroSchema}
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
                            <Checkbox
                                name="termos"
                                label="Aceito os termos e condições"
                            />
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
                                <Botao type="submit">Próxima</Botao>
                            </div>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    )
}

export default DadosPessoais
