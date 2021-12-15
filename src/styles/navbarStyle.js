import styled from "styled-components";

const NavibarComponent = styled.nav`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px 0 40px;
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