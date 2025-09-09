import { Col, ConteudoCard } from './styled'
import Card from '@/components/Card'
import Tipografia from '@/components/Tipografia'

interface CardFreelaProps {
    icone: React.ReactNode
    texto: string
}

const CardFreela = ({ icone, texto }: CardFreelaProps) => {
    return (
        <Col sm={12} md={12} lg={6}>
            <Card comBorda={false} variante="secundaria">
                <ConteudoCard>
                    {icone}
                    <Tipografia componente="body" variante="body">
                        {texto}
                    </Tipografia>
                </ConteudoCard>
            </Card>
        </Col>
    )
}

export default CardFreela
