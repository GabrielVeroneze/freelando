import type { FieldConfig } from 'formik'
import { InputEscondido, Label } from './styled'

interface RadioProps extends FieldConfig {
    label: string
    checked: boolean
}

const Radio = ({ value, label, checked, ...rest }: RadioProps) => (
    <>
        <InputEscondido
            id={`radio-customizado-${value}`}
            type="radio"
            value={value}
            checked={checked}
            {...rest}
        />
        <Label htmlFor={`radio-customizado-${value}`} checked={checked}>
            {label}
        </Label>
    </>
)

export default Radio
