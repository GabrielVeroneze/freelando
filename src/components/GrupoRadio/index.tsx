import Radio from '@/components/Radio'

interface GrupoRadioProps {
    opcoes: { valor: string; label: string }[]
    valor: string
    onChange: (valor: string) => void
}

const GrupoRadio = ({ opcoes, valor, onChange }: GrupoRadioProps) => {
    return (
        <div>
            {opcoes.map((option) => (
                <Radio
                    key={option.valor}
                    valor={option.valor}
                    label={option.label}
                    checked={option.valor === valor}
                    onClick={() => onChange(option.valor)}
                />
            ))}
        </div>
    )
}

export default GrupoRadio
