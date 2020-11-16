import styled from 'styled-components';

export const Container = styled.header`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background-color: ${props=>props.black ? '#141414' : 'transparent'};
    transition: all ease 0.3s;
`;


export const LogoNetflix = styled.div`
    height: 25px;
`;
export const ImageNetflix = styled.img`
    height: 100%;
    cursor: pointer;
`;

export const LogoUser = styled.div`
    height: 35px;
`;
export const ImageUser  = styled.img`
    height: 100%;
    border-radius: 3px;
    cursor: pointer;
`;