import React from 'react';
import {Container, Link, LinkMovie} from './styled';

export default () => {
    return(
        <Container>
                Feito Com 😍  
                <Link href="https://github.com/thiagoadssilva/netflixClone" target="_blank"> Thiago Jose da Silva</Link><br/>
                Direitos de imagem para Netflix <br/>
                Dados pegos do site:
                <LinkMovie href="https://www.themoviedb.org/" target="_blank"> themoviedb</LinkMovie>
        </Container>
    );
}