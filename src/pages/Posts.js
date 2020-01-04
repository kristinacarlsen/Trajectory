import React from 'react';
import FirstPost from '../posts/FirstPost';
import SecondPost from '../posts/SecondPost';
import ThirdPost from '../posts/ThirdPost';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Posts(props) {
    return(
        <Container className='post-content'>
            <Row className='justify-content-md-center'>
                <FirstPost title='Crushing Your Goals in 2020' caption='Make this your best year yet.' />


                <SecondPost title='My Favorite Holiday Traditions' caption='I even let my kids help a little.' />


                <ThirdPost title="Don't Forget Yourself" caption='In this season of sickness and stress, make sure you rest.' />
            </Row>
        </Container>
    )
}

export default Posts;