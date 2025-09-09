import type { HTMLAttributes } from 'react'
import { ItemLista } from './styled'

interface ItemListaSuspensaProps extends HTMLAttributes<HTMLLIElement> {
    children: React.ReactNode
    focoAtivo: boolean
}

const ItemListaSuspensa = ({ children, focoAtivo }: ItemListaSuspensaProps) => {
    return <ItemLista focoAtivo={focoAtivo}>{children}</ItemLista>
}

export default ItemListaSuspensa
