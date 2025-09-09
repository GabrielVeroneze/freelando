import type { InputHTMLAttributes } from 'react'
import { Input, Label } from './styled'

interface CampoTextoProps extends InputHTMLAttributes<HTMLInputElement> {
    titulo: string
}

const CampoTexto = ({ titulo, ...rest }: CampoTextoProps) => {
    return (
        <Label>
            {titulo}
            <Input {...rest} />
        </Label>
    )
}

export default CampoTexto
