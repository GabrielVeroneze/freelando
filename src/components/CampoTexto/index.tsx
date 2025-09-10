import { type FieldConfig } from 'formik'
import { Input, Label } from './styled'

interface CampoTextoProps extends FieldConfig {
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
