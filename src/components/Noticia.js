import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../Images/slideBlue.jpg';
import { Card } from 'react-bootstrap';
import './Noticia.css';

const Noticia = (props) => {

    const noticia = props.noticia;
    console.log("noticia", noticia);

    return (
    //     <div className="Info ml-5 mt-4 w-50 ">

    //     { Object.keys(noticia).length !== 0  ?

    //         <Carousel>
    //             {noticia.map((item, index) =>
    //                <Carousel.Item key={index}>

    //                     <img
    //                     className="d-block w-100 BorderRadio"
    //                     src={item.tx_imagenUno}
    //                     alt="Second slide"
    //                     />

    //                     {/* <Carousel.Caption>
    //                         <h3>{item.tx_titulo}</h3>
    //                         <p>{item.tx_subTitulo}</p>

    //                     </Carousel.Caption> */}
    //                     <Card >

    //                         <Card.Body>
    //                             <Card.Title>{item.tx_titulo}</Card.Title>
    //                             <Card.Text>{item.tx_subTitulo}</Card.Text>

    //                         </Card.Body>
    //                     </Card>

    //                </Carousel.Item>
    //             )}

    //     </Carousel>

    //      : null }
    // </div>

        <div className="Info ml-5 mt-4 w-50 ">

        { Object.keys(noticia).length !== 0  ?

            <Carousel>
                {noticia.map((item, index) =>
                   <Carousel.Item key={index} >

                        <img
                        className="d-block w-100  rounded-top"
                        src={item.tx_imagenUno}
                        alt="Second slide"
                        />

                        <Card className="rounded-bottom">

                            <Card.Body className="border-top-0 rounded-bottom">
                                <Card.Title>{item.tx_titulo}</Card.Title>
                                <Card.Text>{item.tx_subTitulo}</Card.Text>

                            </Card.Body>
                        </Card>

                   </Carousel.Item>
                )}

        </Carousel>

         : null }
    </div>


    )
}

export default Noticia;
