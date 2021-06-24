import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarComponent.css';
import { Button, Form, Nav, Navbar, FormControl, Container, InputGroup } from 'react-bootstrap';
import * as api from './api';
import '../App.css';

import ComponentWidget from './ComponentWidget';
import InstagramWidget from './InstagramWidget';
import PrePublicacion from './PrePublicacion';
import PostPublicacion from './PostPublicacion';
import Noticia from './Noticia';
import MultiCarouselExample from './MultiCarouselExample';

const NavbarComponent = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

    const [postPublicacion, setPostPublicacion] = useState({})
    const [prePublicacion, setPrePublicacion] = useState({})
    const [noticia, setNoticia] = useState({})
    const [noticia2, setNoticia2] = useState({})


      const handleSubmit = (e) => {
        e.preventDefault()

        api.getPosts(formData.email)
            .then((response) => {

                setPrePublicacion(response.data.recordset.filter((post) => post.nb_plantilla === "Pre-publicacion"))

                const arrayPostPublicacion = response.data.recordset.filter((post) => post.nb_plantilla === "Post-publicacion")
                arrayPostPublicacion.length === 0 ? setPostPublicacion({}) : setPostPublicacion(arrayPostPublicacion[arrayPostPublicacion.length-1])

                setNoticia(response.data.recordset.filter((post) => post.nb_plantilla === "Noticia"))
                setNoticia2(response.data.recordset.filter((post) => post.nb_plantilla === "Noticia"))

            })

      }

    return (
        <div>
            <Container fluid className="pl-0 pr-0">
                <Navbar bg="dark" variant="dark" className="p-4">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>

                    <Form inline="true" className="w-1" onSubmit={handleSubmit}>
                        <div className="pr-3">
                            <div inline="true">
                                <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">Email:</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder=""
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                />
                                </InputGroup>
                            </div>
                        </div>
                        <div className="pr-3">
                        <div inline="true">
                            <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Password:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder=""
                                aria-label="Password"
                                aria-describedby="basic-addon1"
                                onChange={(e) =>
                                    setFormData({ ...formData, password: e.target.value })
                                }
                            />
                            </InputGroup>
                        </div>
                        </div>

                        <Button variant="outline-info" type="submit">Login</Button>
                    </Form>
                </Navbar>
            </Container>


            <PrePublicacion  prePublicacion={prePublicacion} />
            <PostPublicacion postPublicacion={postPublicacion} />
            <Noticia noticia={noticia}/>
            {/* <MultiCarouselExample noticia2={noticia2}/> */}

            <div className="Youtube">
                <ComponentWidget />
            </div>

            <div className="Instagram">
                <InstagramWidget/>
            </div>

        </div>
    )
}

export default NavbarComponent;
