import type { Opcao } from '@/types/Opcao'

export interface FormState {
    nome: string
    estado: Opcao
    cidade: string
    telefone: string
    email: string
    senha: string
    confirmarSenha: string
}
