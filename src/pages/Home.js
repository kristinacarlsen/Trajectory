import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import goals from '../assets/images/goals.jpg';
import christmasCookies from '../assets/images/christmasCookies.jpg';
import learnRest from '../assets/images/learnRest.jpg';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
                posts:[
                {
                    id: 0,
                    imgSrc: goals,
                    title: 'Crushing Your Goals in 2020',
                    caption: 'Make this your best year yet.',
                    path: '/crushingyourgoals'
                },
            
                {
                    id: 1,
                    imgSrc: christmasCookies,
                    title: 'My Favorite Holiday Traditions',
                    caption: 'I even let my kids help a little.',
                    path: '/holidaytraditions'
                },
            
                {
                    id: 2,
                    imgSrc: learnRest,
                    title: "Don't Forget Yourself",
                    caption: 'In this season of sickness and stress, make sure you rest.',
                    path: '/dontforgetyourself'
                }
            ],
            firstPost: {
                title: 'Crushing Your Goals in 2020',
                subtitle: 'Make this your best year yet.'
            }
        };
      }
    
      render() {
        return (
    
          <Carousel className='slides'>
                    {this.state.posts.map(post => {
                        
                        return <Carousel.Item key={post.id}>
                            {/* <Link to={post.path} target='_blank'> */}
                            <img 
                            className='align-items-center slide-img d-block w-100' 
                            src={post.imgSrc} 
                            alt='goals'
                            />
                            
                            <Carousel.Caption>
                                <h3>{post.title}</h3>    
                                <p>{post.caption}</p>
                            </Carousel.Caption>



                        </Carousel.Item>
                    })}                    
                </Carousel>
        )
      }
}


export default Home;
