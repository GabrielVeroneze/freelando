import styled from '@emotion/styled'

export const BotaoPrimario = styled.button`
    background: ${(props) => props.theme.cores.primarias.b};
    border: none;
    border-radius: ${(props) => props.theme.espacamentos.s};
    box-sizing: border-box;
    color: ${(props) => props.theme.cores.branco};
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    padding: ${(props) => props.theme.espacamentos.xs} ${(props) => props.theme.espacamentos.s};
    text-align: center;

    &:hover {
        background: ${(props) => props.theme.cores.dark.b};
    }

    &:focus {
        outline-color: ${(props) => props.theme.cores.dark.d};
    }
`

export const BotaoSecundario = styled.button`
    background: transparent;
    border: 2px solid ${(props) => props.theme.cores.primarias.b};
    border-radius: ${(props) => props.theme.espacamentos.s};
    box-sizing: border-box;
    color: ${(props) => props.theme.cores.primarias.b};
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    padding: ${(props) => props.theme.espacamentos.xs} ${(props) => props.theme.espacamentos.s};
    text-align: center;

    &:hover {
        border-color: ${(props) => props.theme.cores.dark.b};
        color: ${(props) => props.theme.cores.dark.b};
    }

    &:focus {
        outline-color: ${(props) => props.theme.cores.focus};
    }
`
