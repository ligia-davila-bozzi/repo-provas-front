import styled from "styled-components";

const NavibarComponent = styled.nav`
    background-color: #FFFFFF;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px 0 40px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    span {
        font-size: 25px;
        font-weight: normal;
    }
    h1 {
        font-weight: bold;
        font-size: 30px;
        &:hover {
            cursor: pointer;
            color: #8C52FF;
        }
    }
    h3 {
        font-size: 18px;
        &:hover {
            cursor: pointer;
            color: #8C52FF;
        }
    }
    h3:last-child {
        margin-left: 10px;
    }
`;

const MenuDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 30vw;
`;

export {
    NavibarComponent,
    MenuDiv,
}