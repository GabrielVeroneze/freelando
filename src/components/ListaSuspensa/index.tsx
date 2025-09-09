import { useListaSuspensaTeclado } from '@/hooks/useListaSuspensaTeclado'
import { Botao, Label, Lista } from './styled'
import type { Opcao } from '@/types/Opcao'
import ItemListaSuspensa from '@/components/ItemListaSuspensa'

interface ListaSupensaProps {
    titulo: string
    opcoes: Opcao[]
    valor: Opcao | null
    onChange: (opcao: Opcao) => void
}

const ListaSupensa = ({
    titulo,
    opcoes,
    valor,
    onChange,
}: ListaSupensaProps) => {
    const { estaAberta, setEstaAberta, opcaoFocada, manipularTeclaDoTeclado } =
        useListaSuspensaTeclado({ opcoes, onChange })

    return (
        <Label>
            {titulo}
            <Botao
                estaAberta={estaAberta}
                onClick={() => setEstaAberta(!estaAberta)}
                onKeyDown={manipularTeclaDoTeclado}
                type="button"
            >
                <div>{valor ? valor.text : 'Selecione'}</div>
                <div>
                    <span>{estaAberta ? '▲' : '▼'}</span>
                </div>
            </Botao>
            {estaAberta && (
                <Lista>
                    {opcoes.map((opcao, index) => (
                        <ItemListaSuspensa
                            key={opcao.value}
                            focoAtivo={index === opcaoFocada}
                            onClick={() => onChange(opcao)}
                        >
                            {opcao.text}
                        </ItemListaSuspensa>
                    ))}
                </Lista>
            )}
        </Label>
    )
}

export default ListaSupensa
