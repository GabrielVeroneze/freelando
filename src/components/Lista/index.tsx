import { ListaInline } from './styled'

interface ListaProps {
    children: React.ReactNode
}

const Lista = ({ children }: ListaProps) => {
    return <ListaInline>{children}</ListaInline>
}

export default Lista
