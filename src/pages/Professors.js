import Navbar from '../components/Navibar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import test from '../assets/images/test.png';

const testsByProfessor = [
    {
        id: 1,
        name: 'Rogério Santos',
        tests: [
            {
                id: 1,
                name: '2021.1',
                subject: 'Cálculo I',
                category: 'P1',
                pdfLink: 'https://www.google.com/'
            }
        ]

    },
    {
        id: 2,
        name: 'Suzana Matos',
        tests: [
            {
                id: 1,
                name: '2021.2',
                subject: 'Física I',
                category: 'P2',
                pdfLink: 'https://www.google.com/'
            }
        ]

    },
    {
        id: 3,
        name: 'Clara Luz',
        tests: [
            {
                id: 1,
                name: '2021.2',
                subject: 'Química Geral I',
                category: 'P3',
                pdfLink: 'https://www.google.com/'
            },
            {
                id: 2,
                name: '2021.1',
                subject: 'Química Geral II',
                category: 'P1',
                pdfLink: 'https://www.google.com/'
            }
        ]

    }
]

function Professors() {
    return (
        <>
            <Navbar/>
            <Div>
                <ProfessorsList>
                   { testsByProfessor.map((professor) => (
                       <li>{`${professor.name} (${professor.tests.length} provas)`}</li>
                   ))}
                </ProfessorsList>
                <TestsDiv>
                    <h2>Escolha um professor pra conseguir visualizar as provas</h2>
                    <img src={test} alt='loading...' />
                </TestsDiv>
            </Div>
            <Footer/>
        </>
    );
}

export default Professors;

const Div = styled.div`
    margin-top: 10vh;
    height: 80vh;
    padding-left: 20px;
    display: flex;
    h2 {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 10px;
    }
`;

const ProfessorsList = styled.ul`
    /* width: 30vw; */
    width: clamp(300px, 60%, 40vw);
    background-color: #17D0D8;
    padding: 20px 10px;
    max-height: 80vh;
    overflow-y: scroll;
    li {
        background-color: #FF66C4;
        margin-bottom: 10px;
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 10px;
        border-radius: 10px;
    }
`;

const TestsDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    img {
        border-radius: 50%;
        height: 300px;

    }
    h2 {
        margin-bottom: 40px;
    }
`;