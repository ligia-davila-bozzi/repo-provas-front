import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Navbar from '../components/Navibar';
import Footer from '../components/Footer';
import { getCategories, getSubjectsWithProfessors, postTest } from '../services/api';
import {
    Form,
    Select,
    PurpleButton,
    DivForm,
} from '../styles/sendSubjectStyle';
import { useHistory } from 'react-router-dom';

function SendTest() {
    const [professors, setProfessors] = useState([]);
    const [semester, setSemester] = useState('');
    const [category, setCategory] = useState('');
    const [subject, setSubject] = useState('');
    const [professor, setProfessor] = useState('');
    const [pdfLink, setPdfLink] = useState('');
    const [categories, setCategories] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getCategories()
            .then((res) => {
                setCategories(res.data);
            })
            .catch(() => {
                alert('Não foi possível carregar as categorias');
            })
        getSubjectsWithProfessors()
            .then((res) => {
                console.log(res.data)
                setSubjects(res.data);
            })
            .catch(() => {
                alert('Não foi possível carregar as disciplinas');
            })

        if (subject) {
            let auxArray = subjects.filter((e) => e.id === Number(subject));
            setProfessors(auxArray[0].professors);
        }
    }, [subject])

    function SendTestInfo(event) {
       event.preventDefault();
       const body = {
            name: semester,
            category,
            subject,
            professor,
            pdfLink,
       }
       console.log(body)
        postTest(body)
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Belezinha!',
                    text: 'Prova enviada com sucesso!',
                })
                history.push('/');
            })
           .catch((error) => {
                alert('Houve um erro ao cadastrar a prova');
           })
    }

    return (
        <>
            <Navbar />
            <Form onSubmit={SendTestInfo}>
                <DivForm>
                    <input
                        type='text'
                        name='semester'
                        placeholder='Semestre (ex: 2021.2)'
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                    />
                    <Select 
                        name='category' 
                        defaultValue={'DEFAULT'} 
                        value={category} 
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option label='Categoria' disabled></option>
                        { categories.map((category, index) => (
                            <option key={index} value={category.id}>{category.name}</option>
                        ))}
                    </Select>
                    <Select
                        name='subject'
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                    >
                        <option label='Disciplina' disabled></option>
                        { subjects.map((subject, index) => (
                            <option key={index} value={subject.id}>{subject.name}</option>
                        ))}
                    </Select>
                    <Select
                        name='professor'
                        defaultValue={'DEFAULT'}
                        value={professor}
                        onChange={e => setProfessor(e.target.value)}
                    >
                        <option label='Professor(a)' disabled></option>
                        { professors ? professors.map((professor, index) => (
                            <option key={index} value={professor.id}>{professor.name}</option>
                        )): ''}
                    </Select>
                    <input
                        type='text'
                        name='pdfLink'
                        placeholder='Link do pdf'
                        value={pdfLink} onChange={(e) => setPdfLink(e.target.value)}
                    />
                    <PurpleButton type='submit'>
                        Enviar
                    </PurpleButton>
                </DivForm>
            </Form>
            <Footer />
        </>
    );
}

export default SendTest;