import { useState } from 'react'
import type { CadastroForm } from '@/types/CadastroForm'
import type { Opcao } from '@/types/Opcao'

const initialState: CadastroForm = {
    nome: '',
    estado: { value: '', text: '' },
    cidade: '',
    telefone: '',
    email: '',
    senha: '',
    confirmarSenha: '',
}

export const useForm = () => {
    const [form, setForm] = useState<CadastroForm>(initialState)

    const handleChange = (field: keyof CadastroForm, value: string | Opcao) => {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    const resetForm = () => {
        setForm(initialState)
    }

    return {
        form,
        handleChange,
        resetForm,
    }
}
