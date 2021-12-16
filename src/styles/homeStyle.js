import styled from "styled-components";

const Container = styled.div`
    height: 80vh;
    width: 100vw;
    border-radius: 40px 40px 0 0;
    background-color: #17D0D8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px 0 40px;
    margin-top: 10vh;
`;

const Text = styled.div`
    height: 85%;
    width: 46%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h2, span {
        font-size: 64px;
    }
    span {
        font-weight: bold;
    }
    button:last-child {
        margin-left: 15px;
    }
    p {
        font-size: 30px;
    }
`;

const Image = styled.img`
    height: 100%;
    min-width: 35%;
`;

const Box = styled.div`
    display: flex;
`;

const BasicButton = styled.button`
    width: 305px;
    height: 58px;
    background-color: #FF66C4;
    border-radius: 24px;
    box-shadow: 4px 4px 8px rgb(0, 0, 0, 0.5);
    &:hover {
        cursor: pointer;
        filter: brightness(130%);
    }
`;

export {
    Container,
    Text,
    Image,
    BasicButton,
    Box,
}