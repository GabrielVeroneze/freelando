import styled from '@emotion/styled'
import { Col as ColBase } from 'react-grid-system'

export const Col = styled(ColBase)`
    margin-bottom: 24px;
`

export const Span = styled.span`
    color: ${(props) => props.theme.cores.primarias.a};
`
