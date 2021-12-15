import styled from 'styled-components';

const FooterComponent = styled.footer`
    height: 10vh;
    display: flex;
    align-items: center;
    padding: 0 40px 0 20px;
    justify-content: space-between;
    svg {
        height: 25px;
        width: 25px;
    }
    ul {
        display: flex;
        li {
            margin-right: 10px;
        }
    }
    a {
        &:hover {
            color: #8C52FF;
        }
    }
`;

export {
    FooterComponent,
}