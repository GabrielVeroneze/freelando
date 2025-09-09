import { ItemInline } from './styled'

interface ItemListaProps {
    children: React.ReactNode
}

const ItemLista = ({ children }: ItemListaProps) => {
    return <ItemInline>{children}</ItemInline>
}

export default ItemLista
