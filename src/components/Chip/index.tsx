import { Span } from './styled'

interface ChipProps {
    children: React.ReactNode
}

const Chip = ({ children }: ChipProps) => {
    return <Span>{children}</Span>
}

export default Chip
