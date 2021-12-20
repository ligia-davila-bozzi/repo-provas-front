import { useState, useEffect } from 'react';
import Navbar from '../components/Navibar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import test from '../assets/images/test.png';
import { getProfessors } from '../services/api';
import { Link } from 'react-router-dom';

function Professors() {
    const [professors, setProfessors] = useState([]);

    useEffect(() => {
        getProfessors()
            .then((res) => {
                setProfessors(res.data);
            })
            .catch(() => {
                alert('Não foi possível carregar os professores');
            })
    }, [])
    return (
        <>
            <Navbar/>
            <Div>
                <ProfessorsList>
                    <h2>Professores</h2>
                   { professors.map((professor) => (
                       <Link to={`/professors/${professor.id}/tests`}>
                            <li>{`${professor.name} (${professor.tests.length} provas)`}</li>
                       </Link>
                   ))}
                </ProfessorsList>
                <TestsDiv>
                    <h2>Escolha um professor pra conseguir visualizar as provas</h2>
                    <img src={test} alt='logo' />
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