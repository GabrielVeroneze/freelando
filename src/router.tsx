import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Layout from '@/pages/Layout'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import LayoutCadastro from '@/pages/Cadastro/LayoutCadastro'
import SelecaoCliente from '@/pages/Cadastro/SelecaoCliente'
import Interesses from '@/pages/Cadastro/Interesses'
import DadosPessoais from '@/pages/Cadastro/DadosPessoais'
import Concluido from '@/pages/Cadastro/Concluido'
import Erro404 from '@/pages/Erro404'

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="cadastro" element={<LayoutCadastro />}>
                    <Route index element={<SelecaoCliente />} />
                    <Route path="interesses" element={<Interesses />} />
                    <Route path="dados-pessoais" element={<DadosPessoais />} />
                    <Route path="concluido" element={<Concluido />} />
                </Route>
            </Route>
            <Route path="*" element={<Erro404 />} />
        </Routes>
    </Router>
)

export default AppRoutes
