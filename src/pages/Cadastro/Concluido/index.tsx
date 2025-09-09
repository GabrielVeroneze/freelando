import { Col, Row } from 'react-grid-system'
import { Link } from 'react-router'
import { Box, Imagem } from './styled'
import Tipografia from '@/components/Tipografia'
import Botao from '@/components/Botao'
import imagemConclusao from './assets/cliente-concluido.png'

const Concluido = () => {
    return (
        <>
            <Box>
                <Tipografia variante="h1" componente="h1">
                    Seu perfil está completo!
                </Tipografia>
                <Tipografia variante="h3" componente="h3">
                    Agora é só começar a se conectar com os melhores freelancers
                    do mercado!
                </Tipografia>
            </Box>
            <figure>
                <Imagem
                    src={imagemConclusao}
                    alt="Imagem representando a conclusão do cadastro"
                />
            </figure>
            <Row justify="center">
                <Col lg={6} md={6} sm={6} style={{ textAlign: 'center' }}>
                    <Link to="/cadastro">
                        <Botao variante="secundaria">Voltar para a home</Botao>
                    </Link>
                </Col>
            </Row>
        </>
    )
}

export default Concluido
