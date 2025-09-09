import { LinkPrimario, LinkSecundario } from './styled'

interface LinkProps {
    children: React.ReactNode
    variante?: 'primario' | 'secundario'
    onClick?: () => void
}

const Link = ({ children, variante = 'primario', onClick }: LinkProps) => {
    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    }

    return variante === 'primario' ? (
        <LinkPrimario onClick={handleClick} variante={variante}>
            {children}
        </LinkPrimario>
    ) : (
        <LinkSecundario onClick={handleClick} variante={variante}>
            {children}
        </LinkSecundario>
    )
}

export default Link
