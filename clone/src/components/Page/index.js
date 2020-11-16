import React,{useEffect, useState} from 'react';
import {Container, Section, Loading, LoadingImage} from './styled';
import MoveRow from '../MoveRow';
import Footer from '../Footer';
import Tmdb from '../../Tmdb';
import FeaturedMovie from '../FeaturedMovie.js';

export default () =>{
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    useEffect(() =>{
        const loadAll = async () =>{
          let list = await Tmdb.getHomeList();
          setMovieList(list);
          // Pegando o Features
          let originals = list.filter(i=>i.slug === 'originals');
          let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
          let chosen = originals[0].items.results[randomChosen];
          let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
  
          setFeaturedData(chosenInfo);
        }
        loadAll();
      },[]);
    return(
        <Container>
          <Section>
            {featuredData &&
                <FeaturedMovie item={featuredData}/>
            }
            {movieList.map((item, index) =>(
              <MoveRow key={index} title={item.title} items={item}/>
            ))}
          </Section>
          <Footer />
          {movieList.length <= 0 &&    
            <Loading>
                <LoadingImage src ="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/netflix-loading.gif" alt="Carregando"/>
            </Loading>  
          }
        </Container>
    );
}