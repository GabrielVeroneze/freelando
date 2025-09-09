import { Link } from 'react-router'
import { Col, Container, Row } from 'react-grid-system'
import { Box, Imagem } from './styled'
import Layout from '@/pages/Layout'
import Card from '@/components/Card'
import Tipografia from '@/components/Tipografia'
import Botao from '@/components/Botao'
import imagemErro from './assets/erro-404.png'

const Erro404 = () => {
    return (
        <Layout>
            <Container>
                <Row justify="center">
                    <Col
                        xxl={6}
                        xl={6}
                        lg={6}
                        md={8}
                        sm={12}
                        style={{ marginTop: '48px' }}
                    >
                        <Card>
                            <Tipografia variante="h1" componente="h1">
                                Ops... Página não encontrada :(
                            </Tipografia>
                            <figure>
                                <Imagem src={imagemErro} />
                            </figure>
                            <Tipografia variante="body" componente="body">
                                Não encontramos a página que você está buscando,
                                mas temos muitas outras para você navegar!
                            </Tipografia>
                            <Box>
                                <Link to="/">
                                    <Botao variante="secundaria">
                                        Voltar para a home
                                    </Botao>
                                </Link>
                            </Box>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Erro404
