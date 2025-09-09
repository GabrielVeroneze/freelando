import styled from '@emotion/styled'

export const ItemLista = styled.li<{ focoAtivo: boolean }>`
    border-bottom: 1px solid ${(props) => props.theme.cores.neutras.c};
    color: ${(props) =>
        props.focoAtivo ? props.theme.cores.focus : 'inherit'};
    cursor: pointer;
    padding: ${(props) => props.theme.espacamentos.xs} 0;
    text-align: center;

    &:last-child {
        border: none;
    }

    &:hover {
        color: ${(props) => props.theme.cores.focus};
    }
`
