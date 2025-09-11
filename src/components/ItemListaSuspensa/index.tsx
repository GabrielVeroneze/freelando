import type { HTMLAttributes } from 'react'
import { ItemLista } from './styled'

interface ItemListaSuspensaProps extends HTMLAttributes<HTMLLIElement> {
    children: React.ReactNode
    focoAtivo: boolean
}

const ItemListaSuspensa = ({ children, focoAtivo, ...rest }: ItemListaSuspensaProps) => {
    return (
        <ItemLista focoAtivo={focoAtivo} {...rest}>
            {children}
        </ItemLista>
    )
}

export default ItemListaSuspensa
