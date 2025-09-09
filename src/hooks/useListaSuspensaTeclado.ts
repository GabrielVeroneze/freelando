import { useState } from 'react'
import type { Opcao } from '@/types/Opcao'

interface UseListaSuspensaTecladoProps {
    opcoes: Opcao[]
    onChange: (opcao: Opcao) => void
}

export const useListaSuspensaTeclado = ({
    opcoes,
    onChange,
}: UseListaSuspensaTecladoProps) => {
    const [estaAberta, setEstaAberta] = useState<boolean>(false)
    const [opcaoFocada, setOpcaoFocada] = useState<number | null>(null)

    const fecharLista = () => {
        setOpcaoFocada(null)
        setEstaAberta(false)
    }

    const manipularTeclaDoTeclado = (
        evento: React.KeyboardEvent<HTMLButtonElement>,
    ) => {
        setEstaAberta(true)

        switch (evento.key) {
            case 'ArrowDown':
                evento.preventDefault()
                setOpcaoFocada((focoAntigo) => {
                    if (focoAntigo == null) {
                        return 0
                    }
                    if (focoAntigo === opcoes.length - 1) {
                        return opcoes.length - 1
                    }
                    return (focoAntigo += 1)
                })
                break

            case 'ArrowUp':
                evento.preventDefault()
                setOpcaoFocada((focoAntigo) => {
                    if (!focoAntigo) {
                        return 0
                    }
                    return (focoAntigo -= 1)
                })
                break

            case 'Enter':
                evento.preventDefault()
                if (opcaoFocada !== null) {
                    onChange(opcoes[opcaoFocada])
                }
                fecharLista()
                break

            case 'Tab':
                fecharLista()
                break

            case 'Escape':
                evento.preventDefault()
                fecharLista()
                break
        }
    }

    return {
        estaAberta,
        setEstaAberta,
        opcaoFocada,
        manipularTeclaDoTeclado,
    }
}
