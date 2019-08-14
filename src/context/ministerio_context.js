import React from "react"

const ministerioContext = React.createContext({
  educacion:[{
    data:{
    labels: ["Misional", "Administrativo","Proyecto","Sustantivo", "No asignables"],
    datasets: [
      {
        data: [  5387709245284 , 844972495318,  7840145062 ,   322207712994 , 0],
        backgroundColor: ["#A7D5FF", "#0AFC5D", "##E16163", "#FAFF0E",'blue'],
        hoverBackgroundColor: ["#A7D5FF", "#0AFC5D", "##E16163", "#FAFF0E",'blue']
      }
    ]
  }},
  {items: [
    "Educación inicial (per-jardín y jardín) con Becas, Complemento Nutricional, Canasta Básica de Útiles y otros.",
    "Educación Inicial ampliada a niños y niñas desde cero a cinco años. ",
    "Textos para estudiantes y guías para Docentes de la Educación Media",
    "Documentos pedagogicos para estudiantes con necesidades de apoyo",
    "Material educativo diseñado para pueblos indígenas",
    "Distribución de materiales didáctico a las instituciones educativas",
    "Evaluaciones estandarizadas sobre el desempeño de los estudiantes",
    "Ampliación de la jornada escolar",
    "Becas, kits escolares para la culminación oportuna de estudios",
    "Boleto estudiantil para la culminación oportuna de estudios  "
  
  
  ]},{
  datos:{
    nombre:"Ministerio de Educación y Ciencias",
    programas:[{
      nombre:"Programa Central",
      monto: "Gs. 6.240.521.885.664"
    },{
      nombre:"Misional",
      monto:"Gs. 5.387.709.245.284"
    },{
      nombre:"Administrativo",
      monto:"Gs. 844.972.495.318"
    },
    {
      nombre:"Proyecto",
      monto:"Gs. 7.840.145.062 "
    },{
      nombre:"Programa sustantivo",
      monto:"Gs. 322.207.712.994"
    },{
      nombre:"Partidas no asignables",
      monto:"Gs. 0"
    }
  ],
  presupuestoTotal: "Gs. 6.562.729.598.658",
  },
 
    
  },{
    treeMapData : {
    "name":"Programa Sustantivo",
    "children": [
                { 
                    "name": "001 - ATENCIÓN EDUCATIVA OPORTUNA AL PRE JARDIN Y JARDIN" ,
                    "children": [
                        {"name":"004-OPTIMIZAR LOS PROGRAMAS COMPENSATORIOS","value":9718004849},
                        {"name":"005-AMPLIACIÓN EN LA ATENC. EDUC. DESDE LA GEST. HASTA 5 AÑOS","value":123596276913},
                    ]
                },
                {
                    "name":"002 - EDUCACIÓN MEDIA INTEGRADA",
                    "children": [
                        {"name":"005-TRANSFERENCIA Y DOTACION TEXTOS A ESTUD.Y GUIAS A DOCENTES","value":32000000}
                        
                    ]
                },
                {
                    "name":"003 - CALIDAD DEL APRENDIZAJE",
                    "children": [
                        {"name":"001-ELABORAR DOCUMENTOS PEDAG. P/ ESTUD. C/ NECESIDADES DE APOYO","value":156753244},
                        {"name":"003-ELABORAR CURRÍCULUM Y MATERIAL EDUCATIVO P/ PUEBLO INDÍGENA","value":238349364},
                        {"name":"004-DOTAR A INSTITUCIONES EDUCATIVAS DE MATERIALES DIDÁCTICOS","value":1510309674},
                        {"name":"007-INVESTIGACIÓN EVAL. ESTANDARIZADAS DE DESEMPEÑO A ESTUD.","value":3520539526},
                        {"name":"008-CAPACITACIÓN APOYO A LA AMPLIACIÓN DE LA JORNADA ESCOLAR.","value":40569960659}
                        
                    ]
                },
                {
                    "name":"004 - CULMINACIÓN OPORTUNA DE ESTUDIOS",
                    "children": [
                        {"name":"004-OPTIMIZAR LOS PROGRAMAS COMPENSATORIOS","value":133384400639},
                        {"name":"008-MEJORAMIENTO CONDICIONES DE TRANSPORTE DE ESTUDIANTES","value":9481118126}
                    ]
                }
            ]
}},{resumen:[
      {
        nombre:"ATENCIÓN EDUCATIVA OPORTUNA AL PRE JARDIN Y JARDIN",
        porcentaje:"41.38"
      }, {
        nombre:"EDUCACIÓN MEDIA INTEGRADA",
        porcentaje:" 0.010"
      },
      {
        nombre:"CALIDAD DEL APRENDIZAJE",
        porcentanje:"14.28"
      },
      {
        nombre:"CULMINACIÓN OPORTUNA DE ESTUDIOS",
        porcentaje:"44"
      },
]}
  ],
});


export default ministerioContext;