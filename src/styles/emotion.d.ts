import '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        cores: {
            branco: string
            atencao: string
            focus: string
            primarias: {
                a: string
                b: string
                c: string
            }
            secundarias: {
                a: string
                b: string
                c: string
            }
            neutras: {
                a: string
                b: string
                c: string
                d: string
            }
            dark: {
                a: string
                b: string
                c: string
                d: string
            }
        }
        espacamentos: {
            xs: string
            s: string
            m: string
            l: string
            xl: string
        }
        fontFamily: string
    }
}
