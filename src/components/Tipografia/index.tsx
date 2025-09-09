import styled from '@emotion/styled'
import { componentes, estilos } from './styled'

interface TipografiaProps {
    children: React.ReactNode
    variante: keyof typeof estilos
    componente: keyof typeof componentes
}

const Tipografia = ({ children, variante, componente }: TipografiaProps) => {
    const tag = componentes[componente]

    const ComponenteUtilizado = styled(tag)`
        ${estilos[variante]}
    `

    return <ComponenteUtilizado>{children}</ComponenteUtilizado>
}

export default Tipografia
