export const formatarTelefone = (valor: string) => {
    if (!valor) return

    const tel = valor.replace(/\D/g, '')

    return `(${tel.slice(0, 2)}) ${tel.slice(2, 7)}-${tel.slice(7)}`
}
