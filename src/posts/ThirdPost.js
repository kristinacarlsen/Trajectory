import React from 'react';
import Container from 'react-bootstrap/Container';
import learnRest from '../assets/images/learnRest.jpg';

const ThirdPost = (props) => {
    return (
        <Container>
            <h1>{props.title}</h1>
            <h3>{props.caption}</h3>
            <img className='post-img' src={learnRest} alt='accomplishing goals' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada. Magna fringilla urna porttitor rhoncus dolor purus non. In tellus integer feugiat scelerisque varius morbi enim. In hac habitasse platea dictumst quisque sagittis purus sit. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. A scelerisque purus semper eget duis at tellus at urna. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Egestas integer eget aliquet nibh. Viverra aliquet eget sit amet tellus cras. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Diam in arcu cursus euismod quis viverra.

            Mauris nunc congue nisi vitae. Egestas congue quisque egestas diam in arcu cursus euismod. Volutpat sed cras ornare arcu dui vivamus. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Massa placerat duis ultricies lacus sed turpis tincidunt id. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Duis ultricies lacus sed turpis. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Magna fringilla urna porttitor rhoncus dolor purus. Nulla facilisi nullam vehicula ipsum a arcu. Metus vulputate eu scelerisque felis. </p>
        </Container>
    );
};

export default ThirdPost;
