import { Col, Row } from 'react-grid-system'
import { Link } from 'react-router'
import { useForm } from '@/hooks/useForm'
import { Box } from './styled'
import Tipografia from '@/components/Tipografia'
import CampoTexto from '@/components/CampoTexto'
import ListaSupensa from '@/components/ListaSuspensa'
import Botao from '@/components/Botao'
import estadosBrasileiros from '@/data/estados.json'

const DadosPessoais = () => {
    const { form, handleChange } = useForm()

    return (
        <form>
            <Box>
                <Tipografia variante="h1" componente="h1">
                    Crie seu cadastro
                </Tipografia>
                <Tipografia variante="body" componente="body">
                    Crie seu perfil gratuitamente para começar a trabalhar com
                    os melhores freelancers. Em seguida, você poderá dar mais
                    detalhes sobre suas demandas e sobre sua forma de trabalho.
                </Tipografia>
            </Box>
            <Row>
                <Col>
                    <CampoTexto
                        titulo="Nome completo"
                        value={form.nome}
                        onChange={(event) =>
                            handleChange('nome', event.target.value)
                        }
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
                        valor={form.estado}
                        onChange={(valor) => handleChange('estado', valor)}
                    />
                </Col>
                <Col lg={8} md={8} sm={8}>
                    <CampoTexto
                        titulo="Cidade"
                        value={form.cidade}
                        onChange={(event) =>
                            handleChange('cidade', event.target.value)
                        }
                        type="text"
                        required
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6} sm={6}>
                    <CampoTexto
                        titulo="E-mail"
                        value={form.email}
                        onChange={(event) =>
                            handleChange('email', event.target.value)
                        }
                        type="email"
                        required
                    />
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <CampoTexto
                        titulo="Telefone"
                        value={form.telefone}
                        onChange={(event) =>
                            handleChange('telefone', event.target.value)
                        }
                        type="tel"
                        required
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6} sm={6}>
                    <CampoTexto
                        titulo="Senha"
                        value={form.senha}
                        onChange={(event) =>
                            handleChange('senha', event.target.value)
                        }
                        type="password"
                        required
                    />
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <CampoTexto
                        titulo="Confirme sua senha"
                        value={form.confirmarSenha}
                        onChange={(event) =>
                            handleChange('confirmarSenha', event.target.value)
                        }
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
    )
}

export default DadosPessoais
