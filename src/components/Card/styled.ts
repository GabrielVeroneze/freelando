import styled from '@emotion/styled'

export const Box = styled.div<{
    comBorda?: boolean
    variante?: 'primaria' | 'secundaria'
}>`
    background: ${(props) =>
        props.variante === 'primaria'
            ? props.theme.cores.secundarias.a
            : props.theme.cores.secundarias.c};
    border: ${(props) => (props.comBorda ? '1px solid' : 'none')};
    border-color: ${(props) =>
        props.variante === 'primaria'
            ? props.theme.cores.primarias.a
            : props.theme.cores.primarias.c};
    border-radius: ${(props) => props.theme.espacamentos.s};
    padding: ${(props) => props.theme.espacamentos.l};
`
