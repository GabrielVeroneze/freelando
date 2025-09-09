import styled from '@emotion/styled'

export const Label = styled.label`
    box-sizing: border-box;
    display: block;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    width: 100%;
`

export const Input = styled.input`
    background: ${(props) => props.theme.cores.branco};
    border: 1px solid;
    border-color: ${(props) => props.theme.cores.neutras.a};
    border-radius: ${(props) => props.theme.espacamentos.s};
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    font-weight: 400;
    height: 40px;
    line-height: 17px;
    margin-bottom: ${(props) => props.theme.espacamentos.s};
    margin-top: ${(props) => props.theme.espacamentos.xs};
    padding: 0 ${(props) => props.theme.espacamentos.s};
    width: 100%;
`
