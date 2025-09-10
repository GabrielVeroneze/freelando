import { Formik } from 'formik'
import { Col, Container, Row } from 'react-grid-system'
import { Link as RouterLink } from 'react-router'
import { Form } from './styled'
import type { LoginForm } from '@/types/LoginForm'
import Botao from '@/components/Botao'
import CampoTexto from '@/components/CampoTexto'
import Card from '@/components/Card'
import Link from '@/components/Link'
import Tipografia from '@/components/Tipografia'
import Logo from './assets/logo'

const Login = () => {
    const initialValues: LoginForm = {
        email: '',
        senha: '',
    }

    const tentarEfetuarLogin = async (evento) => {
        evento.preventDefault()
        login(email, senha)
    }

    return (
        <Formik initialValues={initialValues}>
            <Container>
                <Row justify="center">
                    <Col
                        xxl={6}
                        xl={6}
                        lg={6}
                        md={8}
                        sm={12}
                        style={{ margin: '80px 0' }}
                    >
                        <div style={{ textAlign: 'center' }}>
                            <Logo />
                        </div>
                        <Card>
                            <div style={{ textAlign: 'center' }}>
                                <Tipografia variante="h1" componente="h1">
                                    Efetuar login
                                </Tipografia>
                            </div>
                            <Form onSubmit={tentarEfetuarLogin}>
                                <CampoTexto
                                    titulo="E-mail"
                                    name="email"
                                    type="email"
                                />
                                <CampoTexto
                                    titulo="Senha"
                                    name="senha"
                                    type="password"
                                />
                                <div style={{ textAlign: 'right' }}>
                                    <RouterLink to="">
                                        <Tipografia
                                            componente="legenda"
                                            variante="legenda"
                                        >
                                            Esqueceu sua senha?
                                        </Tipografia>
                                    </RouterLink>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <Botao>Login</Botao>
                                </div>
                            </Form>
                            <div style={{ textAlign: 'center' }}>
                                <Tipografia
                                    componente="legenda"
                                    variante="legenda"
                                >
                                    Ainda não criou sua conta no Freelando?
                                </Tipografia>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <Link variante="secundario">
                                    <RouterLink to="/cadastro">
                                        Cadastre-se clicando aqui!
                                    </RouterLink>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Formik>
    )
}

export default Login
