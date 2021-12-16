import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #17D0D8;
    margin-top: 10vh;
    padding: 10vh 20vh 0 20vh;
    height: 80vh;
    input {
        margin-bottom: 20px;
        height: 40px;
        border-radius: 8px;
        width: 100%;
    }
  
`;

const Select = styled.select`
    margin-bottom: 20px;
    height: 40px;
    border-radius: 8px;
    background-color: #FFFFFF;
    width: 100%;
    color: #474a51;
`;

const PurpleButton = styled.button`
    width: clamp(200px, 50%, 300px);
    height: 40px;
    background-color: #8C52FF;
    border-radius: 24px;
    box-shadow: 4px 4px 8px rgb(0, 0, 0, 0.5);
    &:hover {
        cursor: pointer;
        filter: brightness(130%);
    }
`;

const DivForm = styled.div`
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export {
    Form,
    Select,
    PurpleButton,
    DivForm,
}