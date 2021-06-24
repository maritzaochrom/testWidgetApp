import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../Images/slideBlue.jpg';

const PostPublicacion = (props) => {

    const postPublicacion = props.postPublicacion;

    return (
        <div className="Info ml-5 mt-4 w-50">

        { Object.keys(postPublicacion).length !== 0  ?

            <Carousel >

                   <Carousel.Item>

                        <img
                        className="d-block w-100 BorderRadio"
                        src={slide1}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>{postPublicacion.tx_titulo}</h3>
                            <p>{postPublicacion.tx_subTitulo}</p>

                        </Carousel.Caption>
                   </Carousel.Item>


        </Carousel>

         : null }
    </div>
    )
}

export default PostPublicacion;
