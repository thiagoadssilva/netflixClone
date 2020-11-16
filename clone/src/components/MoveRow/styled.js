import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 30px;
`;

export const Title = styled.h2`
    margin: 0px 0px 0px 30px;
`;

export const ListArea = styled.div`      
    overflow-x: hidden;
    padding-left: 30px;
`;

export const DivImage = styled.div`
    display: inline-block;
    width: 150px;
    cursor: pointer;
`;

export const Image = styled.img`
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
    &:hover{
        transform: scale(1);
    }
    
`;



export const MoveLeft = styled.div`
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba(0,0,0,0.6);
    left: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    opacity:0;
    transition: all ease 0.2s;
`;
export const IconLeft = styled.div`
    font-size: 50px;
    
`;
export const MoveRight = styled.div`
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba(0,0,0,0.6);
    right: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    opacity:0;
    transition: all ease 0.2s;
`;
export const IconRight = styled.div`
    font-size: 50px;
`;


export const ListCarousel = styled.div` 
    width: ${props => props.tamanho * 150}px;  
    margin-left: ${props =>props.marginLeft}px;
    transition: all ease 0.5s;
   
   :hover ${MoveLeft}{
        opacity: 1;
    }
    :hover ${MoveRight}{
        opacity: 1;
    }

    @media (max-width: 760px){
        ${MoveLeft}, ${MoveRight}{
            opacity: 1;
        }
    }
`;

