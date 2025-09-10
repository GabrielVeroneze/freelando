import { ErrorMessage, type FieldConfig } from 'formik'
import { Input, Label, TextoErro } from './styled'

interface CampoTextoProps extends FieldConfig {
    titulo: string
}

const CampoTexto = ({ titulo, ...rest }: CampoTextoProps) => {
    return (
        <Label>
            {titulo}
            <Input {...rest} />
            <ErrorMessage name={rest.name}>
                {mensagens => (
                    <TextoErro>{mensagens}</TextoErro>
                )}
            </ErrorMessage>
        </Label>
    )
}

export default CampoTexto
