import { useState } from 'react'
import type { FormState } from '@/types/FormState'
import type { Opcao } from '@/types/Opcao'

const initialState: FormState = {
    nome: '',
    estado: { value: '', text: '' },
    cidade: '',
    telefone: '',
    email: '',
    senha: '',
    confirmarSenha: '',
}

export const useForm = () => {
    const [form, setForm] = useState<FormState>(initialState)

    const handleChange = (field: keyof FormState, value: string | Opcao) => {
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
