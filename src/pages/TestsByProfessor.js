import { useEffect, useState } from 'react';
import Navbar from '../components/Navibar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { getTestsByProfessor } from '../services/api';
import { useParams } from 'react-router-dom';
import { Box } from '../styles/homeStyle';
import test from '../assets/images/test.png';

function TestsByProfessor() {
    const [tests, setTests] = useState([]);

    const {
        id
    } = useParams();

    useEffect(() => {
              getTestsByProfessor(Number(id))
                .then((res) => {
                setTests(res.data)
            })
           .catch(() => {
               alert('Não foi possível carregar os tests');
           })
    }, [])

    console.log(tests)

    return (
        <>
            <Navbar/>
            <Div>
                <GenericSession>
                   { tests.map((category) => (
                       <>
                        <li>{`${category.name}`}</li>
                        <div>  
                            {
                                category.tests.map((test) => (
                                 <Box>
                                     <a href={`${test.pdfLink}`} target='_blank' rel='noreferrer'>
                                        <h2>{test.name}</h2>
                                     </a>
                                     <a href={`${test.pdfLink}`} target='_blank' rel='noreferrer'>
                                        <h2>{test.subject.name}</h2> 
                                     </a>
                                 </Box>
                                ))
                            }                       
                        </div>
                       </>
                   ))}
                </GenericSession>
                <LogoDiv>
                    <img src={test} alt='loading...' />
                </LogoDiv>
            </Div>
            <Footer/>
        </>
    );
}

export default TestsByProfessor;

export const Div = styled.div`
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

export const GenericSession = styled.ul`
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
    h2 {
        margin-right: 40px;
    }
`;

export const LogoDiv = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    img {
        border-radius: 50%;
        height: 300px;

    }
`;