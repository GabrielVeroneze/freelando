import { Formik } from 'formik'
import { Col, Row } from 'react-grid-system'
import { Link } from 'react-router'
import { Box } from './styled'
import Tipografia from '@/components/Tipografia'
import CampoTexto from '@/components/CampoTexto'
import ListaSupensa from '@/components/ListaSuspensa'
import Botao from '@/components/Botao'
import estadosBrasileiros from '@/data/estados.json'

const DadosPessoais = () => {
    return (
        <Formik
            initialValues={{
                nome: '',
                estado: { value: '', text: '' },
                cidade: '',
                telefone: '',
                email: '',
                senha: '',
                confirmarSenha: '',
            }}
        >
            {(formik) => (
                <form>
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
                                value={formik.values.nome}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={4} sm={4}>
                            <ListaSupensa
                                titulo="Estado"
                                opcoes={estadosBrasileiros}
                                valor={formik.values.estado}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Col>
                        <Col lg={8} md={8} sm={8}>
                            <CampoTexto
                                titulo="Cidade"
                                value={formik.values.cidade}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <CampoTexto
                                titulo="E-mail"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="email"
                                required
                            />
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <CampoTexto
                                titulo="Telefone"
                                value={formik.values.telefone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="tel"
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <CampoTexto
                                titulo="Senha"
                                value={formik.values.senha}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="password"
                                required
                            />
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <CampoTexto
                                titulo="Confirme sua senha"
                                value={formik.values.confirmarSenha}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="password"
                                required
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
                                {/* <Link to='/cadastro/concluido'> */}
                                <Botao>Próxima</Botao>
                                {/* </Link> */}
                            </div>
                        </Col>
                    </Row>
                </form>
            )}
        </Formik>
    )
}

export default DadosPessoais
