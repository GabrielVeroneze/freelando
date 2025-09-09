import { Col, Container, Row } from 'react-grid-system'
import { Outlet } from 'react-router'
import { Link as RouterLink } from 'react-router'
import Cabecalho from '@/components/Cabecalho'
import Link from '@/components/Link'
import ItemLista from '@/components/ItemLista'
import Lista from '@/components/Lista'
import Rodape from '@/components/Rodape'
import Tipografia from '@/components/Tipografia'
import FreelandoLogo from '@/components/Icones/FreelandoLogo'
import IconeInstagram from '@/components/Icones/IconeInstagram'
import IconeTwitch from '@/components/Icones/IconeTwitch'
import IconeTwitter from '@/components/Icones/IconeTwitter'
import IconeWhatsApp from '@/components/Icones/IconeWhatsApp'

interface LayoutProps {
    children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Cabecalho>
                <Container>
                    <Row align="center">
                        <Col>
                            <FreelandoLogo />
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <RouterLink to="/login">
                                <Link>Login</Link>
                            </RouterLink>
                        </Col>
                    </Row>
                </Container>
            </Cabecalho>
            <Outlet />
            {children}
            <Rodape>
                <Container>
                    <Row align="center">
                        <Col>
                            <FreelandoLogo height={40} width={176} />
                            <Tipografia variante="legenda" componente="legenda">
                                Desenvolvido por Alura. Projeto fictício sem
                                fins comerciais.
                            </Tipografia>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Tipografia variante="legenda" componente="legenda">
                                Acesse nossas redes:
                            </Tipografia>
                            <Lista>
                                <ItemLista>
                                    <a
                                        href="/"
                                        aria-label="Link para o WhatsApp"
                                    >
                                        <IconeWhatsApp />
                                    </a>
                                </ItemLista>
                                <ItemLista>
                                    <a href="/" aria-label="Link para a Twitch">
                                        <IconeTwitch />
                                    </a>
                                </ItemLista>
                                <ItemLista>
                                    <a
                                        href="/"
                                        aria-label="Link para a Instagram"
                                    >
                                        <IconeInstagram />
                                    </a>
                                </ItemLista>
                                <ItemLista>
                                    <a
                                        href="/"
                                        aria-label="Link para a Twitter"
                                    >
                                        <IconeTwitter />
                                    </a>
                                </ItemLista>
                            </Lista>
                        </Col>
                    </Row>
                </Container>
            </Rodape>
        </>
    )
}

export default Layout
