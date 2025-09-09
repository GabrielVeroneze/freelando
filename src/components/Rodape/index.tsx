import { Footer } from './styled'

interface RodapeProps {
    children: React.ReactNode
}

const Rodape = ({ children }: RodapeProps) => {
    return <Footer>{children}</Footer>
}

export default Rodape
