import styled from '@emotion/styled'

export const Lista = styled.ul`
    background-color: ${(props) => props.theme.cores.branco};
    border: 1px solid ${(props) => props.theme.cores.neutras.a};
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    border-top: none;
    left: 0;
    list-style: none;
    margin: 0;
    padding: 0 ${(props) => props.theme.espacamentos.m};
    position: absolute;
    right: 0;
    top: 100%;
    z-index: 1;
`

export const Label = styled.label`
    box-sizing: border-box;
    display: block;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    position: relative;
    width: 100%;
`

export const Botao = styled.button<{ estaAberta: boolean }>`
    align-items: center;
    background: ${(props) => props.theme.cores.branco};
    border: 1px solid ${(props) => props.theme.cores.neutras.a};
    border-bottom-left-radius: ${(props) => (props.estaAberta ? '0' : '18px')};
    border-bottom-right-radius: ${(props) => (props.estaAberta ? '0' : '18px')};
    border-radius: 18px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    font-size: 18px;
    font-weight: 400;
    height: 40px;
    justify-content: space-between;
    margin-top: ${(props) => props.theme.espacamentos.xs};
    outline: none;
    padding: ${(props) => props.theme.espacamentos.s};
    width: 100%;

    &:focus {
        border-color: ${(props) => props.theme.cores.focus};
    }
`
