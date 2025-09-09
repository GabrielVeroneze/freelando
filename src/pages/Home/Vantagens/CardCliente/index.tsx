import { Col, Span } from './styled'
import Card from '@/components/Card'
import Tipografia from '@/components/Tipografia'

interface CardClienteProps {
    icone: React.ReactNode
    texto: string
}

const CardCliente = ({ icone, texto }: CardClienteProps) => {
    return (
        <Col sm={6} md={6} lg={3}>
            <Card comBorda={false}>
                {icone}
                <Tipografia componente="body" variante="body">
                    <Span>{texto}</Span>
                </Tipografia>
            </Card>
        </Col>
    )
}

export default CardCliente
