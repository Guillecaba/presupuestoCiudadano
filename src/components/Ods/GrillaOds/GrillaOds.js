import React from "react";
import {Row , Col} from "react-bootstrap";

import { 
  Ods2,
  Ods5,
  Ods6,
  Ods7,
  Ods9,
  Ods10,
  Ods11,
  Ods12,
  Ods13,
  Ods15,
  Ods17,
} from '../../../assets/images/indexOds';

const GrillaOds = () => {
  return (
    <Row>
      
      <Col md={3}><img className="w-100 mb-4" src={Ods2} alt='ods'></img></Col>
      <Col md={3}><img className="w-100 mb-4" src={Ods5} alt='ods'></img></Col>
      <Col md={3}><img className="w-100 mb-4" src={Ods6} alt='ods'></img></Col>
      <Col md={3}><img className="w-100 mb-4" src={Ods7} alt='ods'></img></Col>
      <Col md={3}><img className="w-100 mb-4" src={Ods9} alt='ods'></img></Col>
      <Col md={3}><img className="w-100 mb-4" src={Ods10} alt='ods'></img></Col>
      <Col md={3}><img className="w-100 mb-4" src={Ods11} alt='ods'></img></Col>
      <Col md={3}><img className="w-100 mb-4" src={Ods12} alt='ods'></img></Col>
      <Col md={3}><img className="w-100 mb-4" src={Ods13} alt='ods'></img></Col>
      <Col md={3}><img className="w-100 mb-4" src={Ods15} alt='ods'></img></Col>
      <Col md={3}><img className="w-100 mb-4" src={Ods17} alt='ods'></img></Col>
    </Row>
  )
} 

export default GrillaOds;