import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../Images/slideBlue.jpg';
import './NavbarComponent.css';

const PrePublicacion = (props) => {

    const prePublicacion = props.prePublicacion;
    console.log(prePublicacion)

    return (

        <div className="Info ml-5 mt-4 w-50">

            { Object.keys(prePublicacion).length !== 0 ?

                <Carousel>

                    {prePublicacion.map((item, index) =>

                       <Carousel.Item key={index}>
                         {console.log("item", item)}
                            <img
                            className="d-block w-100 BorderRadio"
                            src={slide1}
                            alt="Second slide"
                            />

                            <Carousel.Caption >
                                <h3> {item.tx_titulo}</h3>
                                <p> {item.tx_subTitulo}</p>

                            </Carousel.Caption>
                       </Carousel.Item>

                     )}

            </Carousel>

             : null }
        </div>
    )
}

export default PrePublicacion;
