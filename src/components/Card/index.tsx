import { Box } from './styled'

interface CardProps {
    children: React.ReactNode
    comBorda?: boolean
    variante?: 'primaria' | 'secundaria'
}

const Card = ({
    children,
    comBorda = true,
    variante = 'primaria',
}: CardProps) => {
    return (
        <Box comBorda={comBorda} variante={variante}>
            {children}
        </Box>
    )
}

export default Card
