import type { Theme } from '@emotion/react'

export const global = (theme: Theme) => {
    return {
        html: {
            fontFamily: theme.fontFamily,
        },
        body: {
            margin: 0,
        },
        a: {
            textDecoration: 'none',
        },
    }
}
