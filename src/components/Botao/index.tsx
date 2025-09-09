import type { ButtonHTMLAttributes } from 'react'
import { BotaoPrimario, BotaoSecundario } from './styled'

interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variante?: 'primaria' | 'secundaria'
}

const Botao = ({ children, variante = 'primaria' }: BotaoProps) => {
    return variante === 'primaria' ? (
        <BotaoPrimario>{children}</BotaoPrimario>
    ) : (
        <BotaoSecundario>{children}</BotaoSecundario>
    )
}

export default Botao
