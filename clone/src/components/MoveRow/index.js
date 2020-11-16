import React, {useEffect, useState} from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Header from '../Header';

import 
  {
    Container, 
    Title,
    ListArea,
    Image,
    ListCarousel,
    DivImage,
    MoveLeft,
    IconLeft,
    MoveRight,
    IconRight                                            
  }
from './styled';

export default ({title, items}) => {
    const [blackHeader, setBlackHeader] = useState(false);
    const [scrollX, setScrollX]= useState(0);

    console.log(items)

    useEffect(() => {
      const scrollListener = () => {
        if(window.scrollY > 20){
          setBlackHeader(true);
        }else{
          setBlackHeader(false);
        }
      }
      window.addEventListener('scroll', scrollListener);
      return () => {
        window.removeEventListener('scroll', scrollListener);
      }
    }, []);  

    const handleLeftArrow = () =>{
      let x = scrollX + Math.round(window.innerWidth / 2);
      if(x > 0){
        x = 0;
      }
      setScrollX(x);
    }  
    const handleRightArrow = () =>{
      let x = scrollX - Math.round(window.innerWidth / 2);
      let listW = items.items.results.length * 150;
      if((window.innerWidth - listW) > x){
        x = (window.innerWidth - listW) - 60;
      } 
      setScrollX(x);
    } 

    return(
        <Container>
              <Header black={blackHeader} />
                <Title>{title}</Title> 
                <ListArea >
                  <ListCarousel marginLeft={scrollX} tamanho={items.items.results.length}>
                    <MoveLeft>
                      <IconLeft onClick={handleLeftArrow}>
                        <NavigateBeforeIcon />
                      </IconLeft>
                    </MoveLeft>  
                    <MoveRight>
                      <IconRight onClick={handleRightArrow}>
                        <NavigateNextIcon />
                      </IconRight>
                    </MoveRight> 
                    {items.items.results.length > 0 && items.items.results.map((item, index) =>( 
                      <DivImage>
                        <Image key={index} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title}/>
                      </DivImage>
                    ))}  
                  </ListCarousel>
                </ListArea>
            </Container>
    );
}