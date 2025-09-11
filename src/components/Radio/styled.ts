import { Field } from 'formik'
import styled from '@emotion/styled'

export const InputEscondido = styled(Field)`
    appearance: none;
    opacity: 0;

    &:focus + label {
        border: 1px solid;
        border-color: ${(props) => props.theme.cores.focus};
        border-radius: 16px;
    }
`
export const Label = styled.label<{ checked: boolean }>`
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    margin-left: ${(props) => props.theme.espacamentos.xs};
    padding: ${(props) => props.theme.espacamentos.xs};

    &:hover {
        &:before {
            border-color: ${(props) => props.theme.cores.focus};
        }
    }

    &:before {
        align-items: center;
        background-color: ${(props) =>
            props.checked
                ? props.theme.cores.primarias.b
                : props.theme.cores.neutras.c};
        border: 2px solid ${(props) => props.theme.cores.neutras.a};
        border-color: ${(props) =>
            props.checked ? props.theme.cores.primarias.b : 'inherit'};
        border-radius: 50%;
        content: '';
        cursor: pointer;
        display: flex;
        height: 20px;
        justify-content: center;
        margin-right: 10px;
        width: 20px;
    }
`
