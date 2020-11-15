import React, {useEffect, useState} from 'react';
import Tmdb from '../../Tmdb';
import 
  {
    Container, 
    List,
    Title,
    ListArea,
    Image,
    ListCarousel,
    DivImage                      
  }
from './styled';


export default () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() =>{
      const loadAll = async () =>{
        let list = await Tmdb.getHomeList();
        setMovieList(list);
      }
      loadAll();
    },[]);

    return(
        <Container>
             {movieList.map((item, index) =>(
              <List key={index}>
                <Title>{item.title}</Title> 
                <ListArea>
                  <ListCarousel>
                    {item.items.results.length > 0 && item.items.results.map((item, index) =>(
                      <DivImage>
                        <Image key={index} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title}/>
                      </DivImage>
                    ))}
                  </ListCarousel>
                </ListArea>
              </List> 
            ))}
        </Container>
    );
}