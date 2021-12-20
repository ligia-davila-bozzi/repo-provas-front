import { useEffect, useState } from 'react';
import Navbar from '../components/Navibar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import test from '../assets/images/test.png';
import { getSubjects } from '../services/api';
import { Link } from 'react-router-dom';

function Subjects() {
    const [periods, setPeriods] = useState([]);

    useEffect(() => {
        getSubjects()
            .then((res) => {
                console.log(res.data)
                setPeriods(res.data);
            })
            .catch(() => {
                alert('Não foi possível carregar as disciplinas');
            })
    }, [])

    console.log(periods)

    return (
        <>
            <Navbar/>
            <Div>
                <SubjectsListByPeriod>
                   { periods.map((period) => (
                       <>
                        <li>{`${period.name} período`}</li>
                        <div>
                            { period.subjects.map((subject) => (
                                <Link to=''>
                                    <h2>{subject.name}</h2>
                                </Link>
                            ))}
                        </div>
                       </>
                   ))}
                </SubjectsListByPeriod>
                <TestsDiv>
                    <h2>Escolha uma disciplina pra conseguir visualizar as provas</h2>
                    <img src={test} alt='loading...' />
                </TestsDiv>
            </Div>
            <Footer/>
        </>
    );
}

export default Subjects;

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

const SubjectsListByPeriod = styled.ul`
    width: clamp(300px, 60%, 60vw);
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