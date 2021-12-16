import { Link } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';
import { Box } from "../styles/homeStyle";
import {
    BackgroundContainer,
    Modal,
} from '../styles/choiceViewModalStyle';

function ChoiceViewModal({ setIsHidden, isHidden }) {
    return (
        <BackgroundContainer isHidden={isHidden}>
            <Modal>
                <FaWindowClose onClick={() => setIsHidden(true)}/>
                <h2>Escolha o critério de visualização</h2>
                <Box>
                    <Link to='/professors'>
                        <button>Por professor</button>
                    </Link>
                    <Link to='/subjects'>
                        <button>Por disciplina</button>
                    </Link>
                </Box>
            </Modal>
        </BackgroundContainer>
    );
}

export default ChoiceViewModal;