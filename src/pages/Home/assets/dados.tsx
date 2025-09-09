import type { Card } from '@/types/Card'
import IconeCertificado from '../Vantagens/Icones/IconeCertificado'
import IconeConexoes from '../Vantagens/Icones/IconeConexoes'
import IconeAtendimento from '../Vantagens/Icones/IconeAtendimento'
import IconeSeguranca from '../Vantagens/Icones/IconeSeguranca'
import IconeCheckout from '../Vantagens/Icones/IconeCheckout'
import IconeCliente from '../Vantagens/Icones/IconeCliente'
import IconeProjetos from '../Vantagens/Icones/IconeProjetos'
import IconeRelacionamento from '../Vantagens/Icones/IconeRelacionamento'

export const cardsFreelas: Card[] = [
    {
        icone: <IconeCliente />,
        texto: 'Clientes verificados',
    },
    {
        icone: <IconeRelacionamento />,
        texto: 'Atendimento e agilidade',
    },
    {
        icone: <IconeProjetos />,
        texto: 'Projetos interessantes',
    },
    {
        icone: <IconeCheckout />,
        texto: 'Remuneração supervisionada',
    },
]

export const cardsClientes: Card[] = [
    {
        icone: <IconeCertificado />,
        texto: 'Profissionais qualificados',
    },
    {
        icone: <IconeConexoes />,
        texto: 'Múltiplas especialidades',
    },
    {
        icone: <IconeAtendimento />,
        texto: 'Atendimento e agilidade',
    },
    {
        icone: <IconeSeguranca />,
        texto: 'Simplicidade e Segurança',
    },
]

export const habilidades = [
    'Design',
    'Branding',
    'lustração',
    'Marketing',
    'Identidade Visual',
    'SEO',
    'Redação',
    'Transcricão',
    'Revisão',
    'Tradução',
    'E-Books',
    'ABNT',
    'Programação',
    'API',
    'Desenvolvimento de Aplicativo',
    'Desenvolvimento de Websites',
]
