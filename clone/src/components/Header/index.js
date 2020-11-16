import React from 'react';
import { Container, LogoNetflix, ImageNetflix, LogoUser, ImageUser } from './styled';

export default ({black}) =>{
    console.log(black);
    return(        
        <Container black={black}>
            <LogoNetflix>
                <ImageNetflix src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix" />
            </LogoNetflix>
            <LogoUser>
                <ImageUser src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Netflix" />
            </LogoUser>          
        </Container>
    );
}