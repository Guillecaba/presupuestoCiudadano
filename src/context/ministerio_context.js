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
    nombre:"Ministerio de Educacion y Ciencias",
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
      'name':"MINISTERIO DE EDUCACIÓN Y CIENCIAS",
      'children':
      [{
      "name":"Programa Central",
      "children": [
                  { 
                      "name": "Actividade Administrativa" ,
                      "children": [
                          {"name":"GESTIÓN ADMINISTRATIVA INSTITUCIONAL","value":844972495318},
                          
                      ]
                  },
                  {
                      "name":"Actividad Misional",
                      "children": [
                          {"name":"BRINDAR SERVICIO EDUCATIVO EN EDUCACIÓN INICIAL","value":22224895209},
                          {"name":"BRINDAR SERVICIO EDUCATIVO EN PRIMER Y SEGUNDO CICLO DE EEB","value":3517471652123},
                          {"name":"BRINDAR SERVICIO EDUCATIVO EN EL TERCER CICLO DE LA EEB Y EM","value":1360384688378},
                          {"name":"ATENCION A EDUCACION SUPERIOR Y CIENCIAS","value":53922280085},
                          {"name":"FORMACION DE MUSICOS EN LOS DISTINTOS GENEROS DE MUSICAL","value":14388395100},
                          {"name":"BRINDAR SERV.EDUC.A JOVENES Y ADULTOS DE 15 AÑOS Y MAS","value":304850435905},
                          {"name":"BRINDAR SERVICIO EDUCATIVO EN CENTROS REGIONALES DE EDUC","value":77011495141},
                          {"name":"SERV.EDUC.A ESTUDIANTES C/NECESIDADES ESPECIFICAS DE APOYO","value":17631398507},
                          {"name":"PROMOVER EL TALENTOY LA FORMACION ARTISTICA","value":964526200},
                          {"name":"BRINDAR ATENCION A INSTITUCIONES DE EDUC ESCOLAR INDIGENA","value":4989634943},
                          {"name":"OTORGAR BECAS PARA EDUCACION SUPERIOR","value":7837900000},
                          {"name":"PLANIFICACION Y MONITOREO DE LA POLITICA EDUCATIVA NACIONAL","value":377987871},
                          {"name":"DIFUNDIR LA INVESTIGACION EDUCATIVA","value":61750000},
                          {"name":"EVALUAR LA CALIDAD EDUCATIVA","value":3419909678},
                          {"name":"PROMOVER POLITICAS P/ EL DESARROLLO DE EDUCACION Y CIENCIAS","value":2172296144},
                          {"name":"BRINDAR SERVICIO EDUCATIVO EN EDUCACIÓN INICIAL","value":22224895209},

                          
                      ]
                  },
                  {
                      "name":"Actividad Proyecto",
                      "children": [
                          {"name":"FOMENTO Y APOYO OPERAT. PARA LA EJEC. DE PROY. DEL MEC","value":7840145062},   
                      ]
                  },
                 
              ]
  }
      ,{
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
}]}},{resumen:[
      {
        nombre:"ATENCIÓN EDUCATIVA OPORTUNA AL PRE JARDIN Y JARDIN",
        porcentaje:"41.38"
      }, {
        nombre:"EDUCACIÓN MEDIA INTEGRADA",
        porcentaje:" 0.010"
      },
      {
        nombre:"CALIDAD DEL APRENDIZAJE",
        porcentaje:"14.28"
      },
      {
        nombre:"CULMINACIÓN OPORTUNA DE ESTUDIOS",
        porcentaje:"44"
      },
]}
  ],
}, {
  obras:[{
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
    nombre:"MINISTERIO DE OBRAS PÚBLICAS Y COMUNICACIONES",
    programas:[{
      nombre:"Programa Central",
      monto: "Gs. 1.650.660.105.102 "
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
      'name':"MINISTERIO DE OBRAS PÚBLICAS Y COMUNICACIONES",
      'children':
      [{
      "name":"Programa Central",
      "children": [
                  { 
                      "name": "Actividades Administrativa" ,
                      "children": [
                          {"name":"GESTION ADMINISTRATIVA FINANCIERA","value":393743094684},
                          
                      ]
                  },
                  {
                      "name":"Actividad Misional",
                      "children": [
                          {"name":"REGULACION DEL TRANSPORTE PUBLICO DEL AREA METROPOLITANA","value":34816987000},
                          {"name":"CONTROL DEL TRANSPORTE PUBLICO DEL AREA METROPOLITANA","value":18806845549},
                          {"name":"FISCALIZACIONES DE LOS RECURSOS MINERALES Y ENERGETICOS","value":6869494933},
                          {"name":"CONTROL DE CUMPLIMIENTO DE LAS NORMAS DE TRANSITO","value":51275938759},
                          {"name":"FISCALIZACIONES DEL TRANSPORTE FLUVIO-MARITIMO","value":2702043103},
                          {"name":"REGULACION DEL TRANSPORTE FLUVIO-MARITIMO","value":2233095912},
                          {"name":"MANTENIMIENTO, CONSERVACION DE PATRIMONIO HISTORICO Y OTROS","value":3594000000},
                          {"name":"CONSERVACION Y DESPEJE DE LA COLMATACION DEL RIO PILCOMAYO","value":140517668360},
                          {"name":"MANTENIMIENTO DE MARGENES Y CAUCES DE ARROYOS","value":91305538180},
                          {"name":"CONSTRUCCION DE AREAS DE RETENCION DE CAUCES DE ARROYOS","value":1767451038},      
                      ]
                  },
                  {
                      "name":"Actividad Proyecto",
                      "children": [
                          {"name":"SP CONST. AVDA. COST. CENT. HIST. Y PARQUE BICENTENARIO","value":97318632310},
                          {"name":"CONSTRUCCIÓN AV. COSTANERA NORTE, 2ª ETAPA","value":167130374717}, 
                          {"name":"DIAGNÓSTICO Y PROTOCOLO DE INTERVENCIÒN EDIF. HISTÒRICOS","value":1700000000}, 
                          {"name":"RESTAURACIÓN DE EDIFICIOS PATRIMONIALES","value":16211828100}, 
                          {"name":"EQUIPAMIENTO PROVISIÓN Y COLOCACIÓN DE TEATROS","value":3100000000}, 
                          {"name":"LEVANTAMIENTO DE DATOS Y ELABORACIÓN DE PROYECTOS EJECUTIVOS","value":1420000000}, 
                          {"name":"CONSTRUCCIÓN PENITENCIARIA REGIONAL DE CIUDAD DEL ESTE","value": 42000000000}, 
                          {"name":"CONSTRUCCIÓN DEL CIRS DE EMBOSCADA","value":84000000000}, 
                          {"name":"SP REC. Z. PTO AS. CENT OFIC, CONT. P2419/OC-PR Y 2420/BL-PR","value":420981743568}, 
                          {"name":"ANÁLISIS ELAB.PLAN MAESTRO DE NAVEGACION DEL RIO PY","value":30000000000}, 
                          {"name":"CAPACITACIÓN Y MEJOR.FORM EJECUCION DE PROYECTOS DE LA DIPE","value":10000000000}, 
                          {"name":"CONSTRUCCIÓN CONSTRUCCIÓN DE LA FRANJA COSTERA SUR","value":29165368889}, 

                      ]
                  },
                 
              ]
  }
      ,{
    "name":"Programa Sustantivo",
    "children": [
                { 
                    "name": "RED VIAL PAVIMENTADA INCREMENTADA" ,
                    "children": [
                        {"name":"MEJORAMIENTO DE 151 KM CPTAN. BADO-SANTA ROSA","value":7150000000},
                        {"name":"SP MEJ.TRAVESÍAS URB. CDAD. PARAGUARI-CARAPEGUA-QUIIDY-CAAP","value":17000000000},
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
}]}},{resumen:[
      {
        nombre:"ATENCIÓN EDUCATIVA OPORTUNA AL PRE JARDIN Y JARDIN",
        porcentaje:"41.38"
      }, {
        nombre:"EDUCACIÓN MEDIA INTEGRADA",
        porcentaje:" 0.010"
      },
      {
        nombre:"CALIDAD DEL APRENDIZAJE",
        porcentaje:"14.28"
      },
      {
        nombre:"CULMINACIÓN OPORTUNA DE ESTUDIOS",
        porcentaje:"44"
      },
]}
  ],
});


export default ministerioContext;