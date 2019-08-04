import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import usaid_ceamso from '../../assets/images/usaid_ceamso.png'
import pfm_lac from '../../assets/images/PFM-LAC.png'
import logo_hacienda from '../../assets/images/logo_hacienda.png'
import './Footer.css'

const footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                <Col md={6}>
                    <h3>Links de Interés</h3>
                    <ul>
                        <li><a>Sobre el proyecto</a></li>
                        <li><a>Ministerio de Hacienda - Datos abiertos</a></li>
                        <li><a>Contrataciones Públicas - Datos abiertos</a></li>
                        <li><a>Secretaría de la Funcion Pública - Datos abiertos</a></li>
                        <li><a>Qué Compramos</a></li>
                        <li><a>Portal de Datos Abiertos Gubernamentales</a></li>
                    </ul>
                </Col>
                <Col md={6}>
                   <Row>
                        <Col md={6}><img className ='footer__img' src={usaid_ceamso} alt='usaid ceamso'></img> </Col>
                        <Col md={3}><img className ='footer__img' src={pfm_lac} alt='pfm lac'></img></Col>
                        <Col md={3}><img className ='footer__img' src={logo_hacienda} alt= 'logo hacienda'></img></Col>
                        
                        <p>Este material es publicado gracias al apoyo de la Agencia de los Estados Unidos para el Desarrollo Internacional (USAID). El contenido del mismo es exclusiva responsabilidad de sus autores y no refleja necesariamente las opiniones o puntos de vista de USAID o el Gobierno de los Estados Unidos.</p>

                   </Row>
                    
                </Col>
                </Row>
                
            </Container>
        </footer>
    )
}

export default footer;