import type { ButtonHTMLAttributes } from 'react'
import { BotaoPrimario, BotaoSecundario } from './styled'

interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variante?: 'primaria' | 'secundaria'
}

const Botao = ({ children, variante = 'primaria', ...rest }: BotaoProps) => {
    return variante === 'primaria' ? (
        <BotaoPrimario {...rest}>{children}</BotaoPrimario>
    ) : (
        <BotaoSecundario {...rest}>{children}</BotaoSecundario>
    )
}

export default Botao
