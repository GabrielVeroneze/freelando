import styled from '@emotion/styled'

export const LinkPrimario = styled.span<{
    variante: 'primario' | 'secundario'
}>`
    color: ${(props) => props.theme.cores.branco};
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-decoration: none;

    &:hover {
        color: ${(props) => props.theme.cores.dark.a};
    }
`

export const LinkSecundario = styled.span<{
    variante: 'primario' | 'secundario'
}>`
    color: ${(props) => props.theme.cores.primarias.b};
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    &:hover {
        border-bottom: 1px solid ${(props) => props.theme.cores.primarias.b};
        font-weight: bold;
    }
`
