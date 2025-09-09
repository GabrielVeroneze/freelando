import styled from '@emotion/styled'

export const Imagem = styled.img`
    max-width: 100%;
`

export const Figure = styled.figure`
    background: ${(props) => props.theme.cores.neutras.c};
    color: ${(props) => props.theme.cores.primarias.b};
    margin: 0;
    padding: ${(props) => props.theme.espacamentos.l};
`
