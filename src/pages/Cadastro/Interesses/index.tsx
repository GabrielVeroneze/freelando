import { useState } from 'react'
import { Link } from 'react-router'
import { Col, Row } from 'react-grid-system'
import { Box } from './styled'
import Tipografia from '@/components/Tipografia'
import GrupoRadio from '@/components/GrupoRadio'
import Botao from '@/components/Botao'
import interesses from '@/data/interesses.json'

const Interesses = () => {
    const [interesse, setInteresse] = useState('')

    return (
        <>
            <Box>
                <Tipografia variante="h1" componente="h1">
                    Crie seu cadastro
                </Tipografia>
                <Tipografia variante="h3" componente="h2">
                    Qual a área de interesse?
                </Tipografia>
            </Box>
            <GrupoRadio
                opcoes={interesses}
                valor={interesse}
                onChange={setInteresse}
            />
            <Row>
                <Col lg={6} md={6} sm={6}>
                    <Link to="/cadastro">
                        <Botao variante="secundaria">Anterior</Botao>
                    </Link>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <div style={{ textAlign: 'right' }}>
                        <Link to="/cadastro/dados-pessoais">
                            <Botao>Próxima</Botao>
                        </Link>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Interesses
