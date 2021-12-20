import { useEffect, useState } from 'react';
import Navbar from '../components/Navibar';
import Footer from '../components/Footer';
import test from '../assets/images/test.png';
import { getSubjects } from '../services/api';
import { Link } from 'react-router-dom';
import {
    GenericSession,
    Div,
    LogoDiv,
} from './TestsByProfessor';

function Subjects() {
    const [periods, setPeriods] = useState([]);

    useEffect(() => {
        getSubjects()
            .then((res) => {
                setPeriods(res.data);
            })
            .catch(() => {
                alert('Não foi possível carregar as disciplinas');
            })
    }, [])

    return (
        <>
            <Navbar/>
            <Div>
                <GenericSession>
                   { periods.map((period) => (
                       <>
                        <li>{`${period.name} período`}</li>
                        <div>
                            { period.subjects.map(({ name, id }) => (
                                <Link to={`/subjects/${id}/tests`}>
                                    <h2>{name}</h2>
                                </Link>
                            ))}
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

export default Subjects;