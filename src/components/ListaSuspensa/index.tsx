import { useFormikContext } from 'formik'
import { useListaSuspensaTeclado } from '@/hooks/useListaSuspensaTeclado'
import { Botao, Label, Lista } from './styled'
import type { CadastroForm } from '@/types/CadastroForm'
import type { Opcao } from '@/types/Opcao'
import ItemListaSuspensa from '@/components/ItemListaSuspensa'

interface ListaSupensaProps {
    titulo: string
    opcoes: Opcao[]
}

const ListaSupensa = ({ titulo, opcoes }: ListaSupensaProps) => {
    const { values, setFieldValue } = useFormikContext<CadastroForm>()

    const {
        estaAberta,
        setEstaAberta,
        opcaoFocada,
        manipularTeclaDoTeclado
    } = useListaSuspensaTeclado({
        opcoes: opcoes,
        onChange: (opcao) => setFieldValue('estado', opcao),
    })

    return (
        <Label>
            {titulo}
            <Botao
                estaAberta={estaAberta}
                onClick={() => setEstaAberta(!estaAberta)}
                onKeyDown={manipularTeclaDoTeclado}
                type="button"
            >
                <div>{values.estado.text || 'Selecione'}</div>
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
                            onClick={() => setFieldValue('estado', opcao)}
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
