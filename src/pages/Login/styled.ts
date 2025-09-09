import { Form as FormBase } from 'formik'
import styled from '@emotion/styled'

export const Form = styled(FormBase)`
    border-bottom: 1px solid;
    border-color: ${(props) => props.theme.cores.primarias.a};
    padding-bottom: ${(props) => props.theme.espacamentos.l};
`
