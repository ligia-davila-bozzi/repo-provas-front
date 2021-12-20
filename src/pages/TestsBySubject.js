import { useEffect, useState } from 'react';
import Navbar from '../components/Navibar';
import Footer from '../components/Footer';
import { getTestsBySubject } from '../services/api';
import { useParams } from 'react-router-dom';
import { Box } from '../styles/homeStyle';
import test from '../assets/images/test.png';
import {
    GenericSession,
    Div,
    LogoDiv,
} from './TestsByProfessor';

function TestsBySubject() {
    const [tests, setTests] = useState([]);

    const {
        id
    } = useParams();

    useEffect(() => {
              getTestsBySubject(Number(id))
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
                                        <h2>{test.professor.name}</h2> 
                                     </a>
                                 </Box>
                                ))
                            }                       
                        </div>
                       </>
                   ))}
                </GenericSession>
                <LogoDiv>
                    
                    <img src={test} alt='logo' />
                </LogoDiv>
            </Div>
            <Footer/>
        </>
    );
}

export default TestsBySubject;