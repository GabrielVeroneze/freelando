import { useState } from 'react'
import { Col, Row } from 'react-grid-system'
import { Link as RouterLink } from 'react-router'
import { Box } from './styled'
import Tipografia from '@/components/Tipografia'
import Link from '@/components/Link'
import imagemCliente from './assets/cliente.png'
import imagemFreela from './assets/freela.png'

const SelecaoCliente = () => {
    const [perfil, setPerfil] = useState('')

    return (
        <Box>
            <Tipografia variante="h1" componente="h1">
                Crie seu cadastro
            </Tipografia>
            <Tipografia variante="h3" componente="h2">
                Como podemos te ajudar?
            </Tipografia>
            <Row>
                <Col md={6} sm={12}>
                    <RouterLink
                        to="interesses"
                        onClick={() => setPerfil('cliente')}
                    >
                        <img
                            src={imagemCliente}
                            alt="Pessoa cliente buscando um freela"
                        />
                        <Tipografia variante="body" componente="body">
                            Sou cliente e preciso de um freela!
                        </Tipografia>
                    </RouterLink>
                </Col>
                <Col md={6} sm={12}>
                    <img
                        src={imagemFreela}
                        alt="Pessoa freela procurando clientes"
                    />
                    <Tipografia variante="body" componente="body">
                        Sou um freela e preciso de clientes!
                    </Tipografia>
                </Col>
            </Row>
            <div>
                <Tipografia variante="body2" componente="body2">
                    Já tem conta?
                </Tipografia>
                <p>
                    <Link variante="secundario">Faça login!</Link>
                </p>
            </div>
        </Box>
    )
}

export default SelecaoCliente
