import styled from 'styled-components';

const BackgroundContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 3;
    position: fixed;
    top: 0;
    display: ${({isHidden}) => isHidden ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Modal = styled.div`
    background-color: #8C52FF;
    border-radius: 10px;
    height: 40vh;
    width: 40vw;
    position: relative;
    h2 {
        font-size: 25px;
        font-weight: bold;
        text-align: center;
        margin: 70px 0 30px 0;
    }
    button {
        background-color: #FF66C4;
        height: 50px;
        width: 200px;
        border-radius: 10px;
        margin: 0 auto;
        box-shadow: 4px 4px 8px rgb(0, 0, 0, 0.5);
        &:hover {
            cursor: pointer;
            color: #FFFFFF;
        }
    }
    svg {
        width: 40px;
        height: 40px;
        color: #17D0D8;
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
    }
    div {
        justify-content: space-around;
    }
`;

export {
    BackgroundContainer,
    Modal,
}
