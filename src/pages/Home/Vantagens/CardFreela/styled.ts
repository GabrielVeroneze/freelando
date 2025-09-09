import { Col as ColBase } from 'react-grid-system'
import styled from '@emotion/styled'

export const Col = styled(ColBase)`
    margin-bottom: 24px;
`

export const ConteudoCard = styled.div`
    align-items: center;
    color: ${(props) => props.theme.cores.primarias.c};
    display: flex;
    gap: 16px;
    justify-content: center;
`
