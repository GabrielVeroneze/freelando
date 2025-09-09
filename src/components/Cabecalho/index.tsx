import { Header } from './styled'

interface CabecalhoProps {
    children: React.ReactNode
}

const Cabecalho = ({ children }: CabecalhoProps) => {
    return <Header>{children}</Header>
}

export default Cabecalho
