import React from 'react';
import {
    Container, 
    NameMovie, 
    Vertical, 
    Horizontal, 
    Info, 
    Points, 
    Year, 
    Seasons, 
    Description, 
    Buttons,
    Genres,
    ButtonWatch,
    ButtonPlus
}from './styled';

export default ({item}) =>{
    let firstDate = new Date(item.first_air_date);
    let genres = [];

    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if(description.length > 200){
        description = description.substring(0, 200) + '...';
    }


    return(
        <Container item={item.backdrop_path}>        
            <Vertical>
                <Horizontal>
                    <NameMovie>{item.original_name}</NameMovie>
                    <Info>
                        <Points>{item.vote_average} pontos</Points>
                        <Year>{firstDate.getFullYear()}</Year>
                        <Seasons>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</Seasons>
                    </Info>
                    <Description>{description}</Description>
                    <Buttons>
                        <ButtonWatch href={`/watch/${item.id}`}>Asistir </ButtonWatch>
                        <ButtonPlus href={`/list/add/${item.id}`}>+ Minha Lista</ButtonPlus>
                    </Buttons>
                    <Genres><strong>Gêneros:</strong>  {genres.join(', ')}</Genres>
                </Horizontal>
            </Vertical>
        </Container>
    );

}