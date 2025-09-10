import type { Opcao } from '@/types/Opcao'

export interface CadastroForm {
    nome: string
    estado: Opcao
    cidade: string
    telefone: string
    email: string
    senha: string
    confirmarSenha: string
}
