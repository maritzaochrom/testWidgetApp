import React from 'react';
import Carousel from "react-multi-carousel";
import WithStyles from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slide1 from '../Images/slideBlue.jpg';
import { Card } from 'react-bootstrap';

const MultiCarouselExample = (props) => {
    const noticia = props.noticia2;
    console.log("noticia2", noticia);

    // const responsive = {
    //   superLargeDesktop: {
    //     // the naming can be any, depends on you.
    //     breakpoint: { max: 4000, min: 3000 },
    //     items: 5
    //   },
    //   desktop: {
    //     breakpoint: { max: 3000, min: 1024 },
    //     items: 3
    //   },
    //   tablet: {
    //     breakpoint: { max: 1024, min: 464 },
    //     items: 2
    //   },

    //   mobile: {
    //     breakpoint: { max: 464, min: 0 },
    //     items: 1
    //   }
    // };

    return(

          // <Carousel
          //     swipeable={false}
          //     draggable={false}
          //     showDots={true}
          //     responsive={responsive}
          //     ssr={true} // means to render carousel on server-side.
          //     infinite={true}
          //     // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          //     autoPlaySpeed={1000}
          //     keyBoardControl={true}
          //     customTransition="all .5"
          //     transitionDuration={500}
          //     containerClass="carousel-container"
          //     removeArrowOnDeviceType={["tablet", "mobile"]}
          //     // deviceType={this.props.deviceType}
          //     dotListClass="custom-dot-list-style"
          //     itemClass="carousel-item-padding-40-px"
          //   >
          //     <div>Item 1</div>
          //     <div>Item 2</div>
          //     <div>Item 3</div>
          //     <div>Item 4</div>
          // </Carousel>

          <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 3,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 2,
                  partialVisibilityGutter: 30
                }
              }}
              removeArrowOnDeviceType="10"
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
    <div className="Info ml-5 mt-4 w-50 ">

{ Object.keys(noticia).length !== 0  ?

    <Carousel>
        {noticia.map((item, index) =>
           <Carousel.Item key={index}>

                <img
                className="d-block w-100 BorderRadio"
                src={item.tx_imagenUno}
                alt="Second slide"
                />

                {/* <Carousel.Caption>
                    <h3>{item.tx_titulo}</h3>
                    <p>{item.tx_subTitulo}</p>

                </Carousel.Caption> */}
                <Card >

                    <Card.Body>
                        <Card.Title>{item.tx_titulo}</Card.Title>
                        <Card.Text>{item.tx_subTitulo}</Card.Text>

                    </Card.Body>
                </Card>

           </Carousel.Item>
        )}

</Carousel>

 : null }
</div>
</Carousel>


    )
}

export default MultiCarouselExample;
