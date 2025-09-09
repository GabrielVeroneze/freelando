import { Link } from 'react-router'
import { Col, Container, Row } from 'react-grid-system'
import { Figure, Imagem } from './styled'
import Botao from '@/components/Botao'
import Tipografia from '@/components/Tipografia'
import imagemBanner from './assets/pessoas.png'

const Banner = () => {
    return (
        <Figure>
            <Container>
                <Row align="center">
                    <Col md={5} sm={12}>
                        <figcaption>
                            <Tipografia componente="h1" variante="h1">
                                Uma ponte entre os freelas mais talentosos e os
                                projetos mais interessantes!
                            </Tipografia>
                        </figcaption>
                        <Link to="/cadastro">
                            <Botao>Quero me cadastrar</Botao>
                        </Link>
                    </Col>
                    <Col md={7} sm={12}>
                        <Imagem
                            src={imagemBanner}
                            alt="Imagem ilustrativa de pessoas"
                        />
                    </Col>
                </Row>
            </Container>
        </Figure>
    )
}

export default Banner
