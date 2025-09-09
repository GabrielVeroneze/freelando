import { Row } from 'react-grid-system'
import { Container } from './styled'
import type { Card } from '@/types/Card'
import Tipografia from '@/components/Tipografia'

interface BlocoProps {
    children: React.ReactNode
    titulo: string
    cards: Card[]
}

const Bloco = ({ children, titulo }: BlocoProps) => {
    return (
        <Container>
            <Tipografia componente="h2" variante="h2">
                {titulo}
            </Tipografia>
            <Row>{children}</Row>
        </Container>
    )
}

export default Bloco
