import { ErrorMessage, Field } from 'formik'
import { Box, Label, TextoErro } from './styled'

interface CheckboxProps {
    name: string
    label: string
}

const Checkbox = ({ name, label }: CheckboxProps) => {
    return (
        <Box>
            <Field type="checkbox" name={name} id={name} />
            <Label htmlFor={name}>{label}</Label>
            <ErrorMessage name={name}>
                {mensagens => (
                    <TextoErro>{mensagens}</TextoErro>
                )}
            </ErrorMessage>
        </Box>
    )
}

export default Checkbox
