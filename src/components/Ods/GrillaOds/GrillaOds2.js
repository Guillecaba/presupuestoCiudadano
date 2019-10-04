import React from "react";
import {Row , Col} from "react-bootstrap";

import { 
  Ods1,
  Ods3,
  Ods4,
  Ods8,
  Ods16,
} from '../../../assets/images/indexOds2';

const GrillaOds2 = () => {
  return (
    <Row>
      
      <Col md={4}><img className="w-100 mb-4" src={Ods1} alt='ods'></img></Col>
      <Col md={4}><img className="w-100 mb-4" src={Ods3} alt='ods'></img></Col>
      <Col md={4}><img className="w-100 mb-4" src={Ods4} alt='ods'></img></Col>
      <Col md={4}><img className="w-100 mb-4" src={Ods8} alt='ods'></img></Col>
      <Col md={4}><img className="w-100 mb-4" src={Ods16} alt='ods'></img></Col>
      
    </Row>
  )
} 

export default GrillaOds2;