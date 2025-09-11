import { useFormikContext } from 'formik'
import type { InteressesForm } from '@/types/InteressesForm'
import Radio from '@/components/Radio'

interface GrupoRadioProps {
    opcoes: { valor: number; label: string }[]
}

const GrupoRadio = ({ opcoes }: GrupoRadioProps) => {
    const { values } = useFormikContext<InteressesForm>()

    return (
        <div>
            {opcoes.map((option) => (
                <Radio
                    key={option.valor}
                    value={option.label}
                    label={option.label}
                    checked={option.label === values.interesse}
                    name="interesse"
                />
            ))}
        </div>
    )
}

export default GrupoRadio
