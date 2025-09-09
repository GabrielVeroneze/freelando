import { Col, Container } from 'react-grid-system'
import { cardsClientes, cardsFreelas, habilidades } from './assets/dados'
import Chip from '@/components/Chip'
import CardCliente from './Vantagens/CardCliente'
import CardFreela from './Vantagens/CardFreela'
import Banner from './Banner'
import Bloco from './Bloco'

const Home = () => {
    return (
        <>
            <Banner />
            <Container>
                <Bloco
                    cards={cardsClientes}
                    titulo="Vantagens para contratantes"
                >
                    {cardsClientes.map((card) => (
                        <CardCliente
                            key={card.texto}
                            icone={card.icone}
                            texto={card.texto}
                        />
                    ))}
                </Bloco>
                <Bloco cards={cardsFreelas} titulo="Vantagens para freelas">
                    {cardsFreelas.map((card) => (
                        <CardFreela
                            key={card.texto}
                            icone={card.icone}
                            texto={card.texto}
                        />
                    ))}
                </Bloco>
                <Bloco
                    cards={cardsFreelas}
                    titulo="Quais habilidades você encontra por aqui?"
                >
                    <Col sm={12}>
                        {habilidades.map((habilidade) => (
                            <Chip key={habilidade}>{habilidade}</Chip>
                        ))}
                    </Col>
                </Bloco>
            </Container>
        </>
    )
}

export default Home
