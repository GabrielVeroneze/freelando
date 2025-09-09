import { InputEscondido, Label } from './styled'

interface RadioProps {
    valor: string
    label: string
    checked: boolean
    onClick: () => void
}

const Radio = ({ valor, label, checked, onClick }: RadioProps) => (
    <>
        <InputEscondido
            type="radio"
            value={valor}
            checked={checked}
            onChange={onClick}
            id={`radio-customizado-${valor}`}
        />
        <Label htmlFor={`radio-customizado-${valor}`} checked={checked}>
            {label}
        </Label>
    </>
)

export default Radio
