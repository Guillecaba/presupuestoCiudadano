import React from "react"

const ministerioContext = React.createContext([{
  educacion:[{
    data:{
    labels: ["Misional", "Administrativo","Proyecto","Sustantivo", "No asignables"],
    datasets: [
      {
        data: [  82 ,12,  0.1 ,   3.9 , 0],
        backgroundColor: ["#A7D5FF", "#0AFC5D", "#E16163", "#FAFF0E",'blue'],
        hoverBackgroundColor: ["#A7D5FF", "#0AFC5D", "##E16163", "#FAFF0E",'blue']
      }
    ]
  }},
  {items: [{id:1,descripcion:"Educación inicial (per-jardín y jardín) con Becas, Complemento Nutricional, Canasta Básica de Útiles y otros.", },
    { id: 2, descripcion: "Educación inicial (per-jardín y jardín) con Becas, Complemento Nutricional, Canasta Básica de Útiles y otros.", },
    { id: 3, descripcion: "Educación Inicial ampliada a niños y niñas desde cero a cinco años. ", },
    { id: 4, descripcion: "Textos para estudiantes y guías para Docentes de la Educación Media", },
    { id: 5, descripcion: "Documentos pedagogicos para estudiantes con necesidades de apoyo", },
    { id: 6, descripcion: "Material educativo diseñado para pueblos indígenas", },
    { id: 7, descripcion: "Distribución de materiales didáctico a las instituciones educativas", },
    { id: 8, descripcion: "Evaluaciones estandarizadas sobre el desempeño de los estudiantes", },
    { id: 9, descripcion: "Ampliación de la jornada escolar", },
    { id: 10, descripcion: "Becas, kits escolares para la culminación oportuna de estudios", },
    { id: 11, descripcion: "Boleto estudiantil para la culminación oportuna de estudios  " },
  
  
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
                      "name":"Proyecto",
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
        data: [   4, 5, 12 ,   79 , 0],
        backgroundColor: ["#A7D5FF", "#0AFC5D", "#E16163", "#FAFF0E",'blue'],
        hoverBackgroundColor: ["#A7D5FF", "#0AFC5D", "##E16163", "#FAFF0E",'blue']
      }
    ]
  }},
  {items: [
    "Aumento y mejoramiento de redes viales pavimentadas.",
    
    "Mejoramiento de caminos vecinales y puentes rurales ",
    "Suministro continuo y permanente para la gente y mejoramiento de los servicios de alcantarillado  "
  
  
  ]},{
  datos:{
    nombre:"MINISTERIO DE OBRAS PUBLICAS Y COMUNICACIONES",
    programas:[{
      nombre:"Programa Central",
      monto: "Gs. 1.650.660.105.102 "
    },{
      nombre:"Misional",
      monto:"Gs. 353.889.062.834"
    },{
      nombre:"Administrativo",
      monto:"Gs. 393.743.094.684"
    },
    {
      nombre:"Proyecto",
      monto:"Gs. 903.027.947.584 "
    },{
      nombre:"Programa sustantivo",
      monto:"Gs. 6.391.309.521.513"
    },{
      nombre:"Partidas no asignables",
      monto:"Gs. 0"
    }
  ],
  presupuestoTotal: "Gs. 8.041.969.626.615",
  },
 
    
  },{
    treeMapData : {
      'name':"MINISTERIO DE OBRAS PUBLICAS Y COMUNICACIONES",
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
                      "name":"Proyecto",
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
                        {"name":"004-SP FOCEM-REHAB. Y PAV. ASF. DEL TRAMO CONCEPCIÓN - VALLEMI","value":11452501534},
                        {"name":"005-MEJORAMIENTO PAV.CORRED.INTEG.REHAB.MANT.RED VIAL(FASE II)","value":208073600000},
                        {"name":"007-MEJORAMIENTO DE CORREDORES DE INTEGRACIÓN Y RECONST. VIAL","value":140343994780},
                        {"name":"008-MEJORAMIENTO CORREDOR DE EXPORTACIÓN EN ITAPÚA Y ALTO PARANÁ","value":365654356373},
                        {"name":"009-MEJORAMIENTO TRAMO SAN JUAN NEPOMUCENO  - EMPALME RUTA VI","value":162050000000},
                        {"name":"010-MEJORAMIENTO TRAMO ALBERDI - PILAR","value":178149202827},
                        {"name":"012-HABILITACIÓN DE LA RED VIAL PAV. EN COR, PAR, CAG, GUA, CAZ","value":146639665065},
                        {"name":"013-HABILITACIÓN DE LA RED VIAL PAV. EN DPTO. DE SAN PEDRO","value":53015353748},
                        {"name":"014-HABILITACIÓN DE LA RED VIAL PAV. VILLETA - ALBERDI","value":36748409409},
                        {"name":"015-HABILITACIÓN DE LA RED PAV., DPTOS DE MISIONES E ITAPÚA","value":97668477673},
                        {"name":"016-HABILITACIÓN DE LA RED PAV. DPTOS. S. PEDRO, CAAG. Y CANIND.","value":121057800110},
                        {"name":"017-CONSERVACIÓN DE RUTAS PAVIMENTADAS POR ADMINISTRACION","value":180654798897},
                        {"name":"020-MEJORAMIENTO DE LA FRANJA DE DOMINIO ZONA CHACO","value":2958526595},
                        {"name":"022-MEJORAMIENTO DE LA SEÑALIZACION HORIZONTAL Y VERTICAL ESTE","value":47580935182},
                        {"name":"023-MEJORAMIENTO DE LA SEÑALIZACION HORIZONTAL Y VERTICAL NORTE","value":28246039106},
                        {"name":"024-MEJORAMIENTO DE LA SEÑALIZACION HORIZONTAL Y VERTICAL SUR","value":16527810004},
                        {"name":"025-CONSTRUCCIÓN Y MANTENIMIENTO RUTA Nº 3 TRAMO KM 21.8-170.3","value":26915521686},
                        {"name":"026-CONSTRUCCIÓN Y MANTENIMIENTO RUTA Nº 4 TRAMO KM 225 - 358.4","value":17541720111},
                        {"name":"028-CONSTRUCCIÓN PAV. TIPO EMPED. Y PUENTES-REGION SURESTE-CPE","value":22000000000},
                        {"name":"029-CONSTRUCCIÓN PAV. TIPO EMPED. Y PUENTES - REGION CENTRO-CPE","value":22984000000},
                        {"name":"030-CONSTRUCCIÓN PAV. TIPO EMPED. Y PUENTES - REGION CENTRO","value":23000000000},
                        {"name":"031-CONSTRUCCIÓN PAV. TIPO EMPED. Y PUENTES - REGION SUR","value":15984000000},
                        {"name":"032-CONSTRUCCIÓN PAV. TIPO EMPED. Y PUENTES - REGION ESTE","value":20000000000},
                        {"name":"033-CONSTRUCCIÓN PAV. TIPO EMPED. Y PUENTES - REGION NORTE","value":18000000000},
                        {"name":"034-CONSTRUCCIÓN PAV. TIPO EMPED. Y PUENTES - REGION CHACO","value":2000000000},
                        {"name":"035-CONSTRUCCIÓN PAVIMENTO TIPO ADOQUIN - REGION SUR","value":11984000000},
                        {"name":"036-CONSTRUCCIÓN  PASOS A DESNIVEL - CENTRAL","value":6000000000},
                        {"name":"037-CONSTRUCCIÓN ALCANTARILLADO Y DESAGUE PLUVIAL EN CENTRAL","value":100000000},
                        {"name":"038-CONSTRUCCIÓN PAV. S/ EMPEDRADOS EN REGION NORTE","value":12400000000},
                        {"name":"040-CONSTRUCCIÓN DE PAV. S/ EMPEDRADOS EN REGION ESTE","value":29000000000},
                        {"name":"041-CONSTRUCCIÓN ASFALTO S/ EMPEDRADOS - REGION SUR","value":34000000000},
                        {"name":"043-CONSTRUCCIÓN Y PAV. ASF. DE TR. CAMINEROS EN REGION NORESTE","value":95000000000},
                        {"name":"045-CONSTRUCCIÓN Y PAV. ASF. DE TR. CAMINEROS EN REGION ESTE","value":10000000000},
                        {"name":"046-CONSTRUCCIÓN Y PAV. ASF. DE TR. CAMINEROS EN REGION CENTRO","value":101950000000},
                        {"name":"047-CONSTRUCCIÓN Y PAV. ASFALTICA DE TR. CAMIN. EN REGION CHACO","value":34950000000},
                        {"name":"048-CONSTRUCCIÓN PAVMENTACION NARANJAL SAN CRISTOBAL RUTA 6","value":9288635406},
                        {"name":"049-AMPLIACIÓN Y DUPLICACIÓN DE LAS RUTAS 2 Y 7","value":489720257049},
                        {"name":"050-MEJORAMIENTO TRAZADO DEL TRAMO LOMA PLATA - CARMELO PERALTA","value":42738787961},
                        {"name":"051-CONSTRUCCIÓN DE PAV. S/ EMPEDRADOS EN REGION CENTRO","value":140000000000},
                        {"name":"052-MEJORAMIENTO Y CONSERV. TRAMO CAAGUAZU - YHU. - EMP. RN 10","value":16000000000},
                        {"name":"053-MEJORAMIENTO Y CONSERV. TRAMO ÑUMI - SAN JUAN N. - EMP. RN6","value":45870000000},
                        {"name":"054-HABILITACIÓN Y MANT. DE VÍAS DE ACC. AL AREA METROP. DE ASU","value":66626591725},
                        {"name":"055-HABILITACIÓN Y MANT. DE LA RUTA 1 TRAMO CARAPEGUA - SJB","value":102041547368},
                        {"name":"056-HABILITACIÓN Y MANT. TRAMO POZO COLORADO - CONCEPCIÓN","value":245987625589},
                        {"name":"057-HABILITACIÓN Y MANT. RUTA NACIONAL Nº 9 Y ACC. COL. MENONIT","value":865698000000},
                        {"name":"058-MEJORAMIENTO RUTA N° 9 Y RAFAEL FRANCO","value":36143400000},
                    ]
                },
                {
                    "name":"002 - TRANSITABILIDAD DE CAMINOS VECINALES Y RURALES MEJORADA",
                    "children": [
                        {"name":"001-SP PROG.NAC.CAM. RUR. 2° E.FASE II BID 2163/OC-2164/BL-OFID","value":15138674714},
                        {"name":"002-MEJORAMIENTO DE CAMINOS VECINALES Y PUENTES","value":25147386364},
                        {"name":"003-MEJORAMIENTO CAMINOS VECINALES EN LA REGIÓN ORIENTAL","value":236916491410},
                        {"name":"004-MEJORAMIENTO DE 160KM DE CAMINOS VECINALES EN LA R ORIENTAL","value":141735994721},
                        {"name":"005-CONSERVACIÓN CAMINOS RURALES NO PAVIMENTADOS R. OCCIDENTAL","value":39759606600},
                        {"name":"006-CONSTRUCCIÓN CAMINOS RURALES NO PAVIMENTADOS R. ORIENTAL","value":338824848499},
                        {"name":"007-CONSTRUCCIÓN PUENTES Y ALCANTARILLAS EN LA REGIÓN ORIENTAL","value":60062489851},
                        {"name":"008-CONSTRUCCIÓN PUENTES Y ALCANTARILLAS EN LA R.OCCIDENTAL","value":18646956346},
                        {"name":"009-CONSERVACIÓN CAMINOS RURALES NO PAVIMENT. R. ORIENTAL","value":74763464836},
                        {"name":"010-LEVANTAMIENTO FACTIB. Y DISEÑO INGENIERIA CAMINOS Y PUENTES","value":2536000000},
                        {"name":"011-MEJORAMIENTO CAMINOS VECINALES Y PUENTES EN LA RO","value":505092465900},
                        {"name":"012-MEJORAMIENTO DE LA GESTIÓN DE LOS DISTRITOS DEPARTAMENTALES","value":155190448400},

                        
                    ]
                },
                {
                    "name":"003 - ACCESO A SISTEMAS DE AGUA POTABLE Y SANEAMIENTO",
                    "children": [
                        {"name":"001-SP PROYECTO ACUEDUCTO","value":51678006992},
                        {"name":"002-SP PROG. SANEAM. Y AGUA POT. P/CHACO Y CIUD. INTERM. RE","value":132132872157},
                        {"name":"003-MEJORAMIENTO DEL SERV. DE ALCANT. DE LA BAH. ASUNCIÓN","value":126205966418},
                        {"name":"004-MEJORAMIENTO ALCANTARILLADO DE LA CIUDAD DE SAN LORENZO","value":82582290107},
                    ]
                },
                
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
},
{
  urbanismo:[{
    data:{
    labels: ["Misional", "Administrativo","Proyecto","Sustantivo", "No asignables"],
    datasets: [
      {
        data: [ 0.3 , 12.9,  0 ,  86.8 , 0],
        backgroundColor: ["#A7D5FF", "#0AFC5D", "#E16163", "#FAFF0E",'blue'],
        hoverBackgroundColor: ["#A7D5FF", "#0AFC5D", "##E16163", "#FAFF0E",'blue']
      }
    ]
  }},
  {items: [
    "Construcción de viviendas económicas",
    
    "Préstamos para la vivienda",
    "Construcción de viviendas en asentamientos indígenas  ",
    "Subsidio habitacional",
    "Construcción de viviendas sociales",
    "Viviendas, promoción social y capacitación de la comunidad en localidades de frontera.",
    "4500 soluciones habitacionales en el país",
    "5800 soluciones habitacionales en áreas rurales",
    "Mejoramiento de las condiciones habitacionales de Chacarita Alta",
    "Mejoramiento de viviendas del Área metropolitana de Asunción.",
  ]},{
  datos:{
    nombre:"MINISTERIO DE URBANISMO VIVIENDA Y HABITAT",
    programas:[{
      nombre:"Programa Central",
      monto: "Gs.  80.973.450.295  "
    },{
      nombre:"Misional",
      monto:"Gs. 2.268.000.000"
    },{
      nombre:"Administrativo",
      monto:"Gs. 78.705.450.295"
    },
    {
      nombre:"Proyecto",
      monto:"Gs. 0 "
    },{
      nombre:"Programa sustantivo",
      monto:"Gs. 531.935.122.252"
    },{
      nombre:"Partidas no asignables",
      monto:"Gs. 0"
    }
  ],
  presupuestoTotal: "Gs.  612.908.572.547",
  
  },
 
    
  },{
    treeMapData : {
      'name':"MINISTERIO DE URBANISMO VIVIENDA Y HABITAT",
      'children':
      [{
      "name":"Programa Central",
      "children": [
                  { 
                      "name": "Actividades Administrativa" ,
                      "children": [
                          {"name":"001-GESTION ADMINISTRATIVA","value":78705450295},
                          
                      ]
                  },
                  {
                      "name":"Actividad Misional",
                      "children": [
                          {"name":"002-CAPACITACIONES A MUNICIPIOS","value":2268000000},
                              
                      ]
                  },
                  {
                      "name":"Proyecto",
                      "children": [
                          

                      ]
                  },
                 
              ]
  }
      ,{
    "name":"Programa Sustantivo",
    "children": [
                { 
                    "name": "001 - SOLUCIONES HABITACIONALES ADECUADAS" ,
                    "children": [
                        {"name":"001-CONSTRUCCION DE VIVIENDAS ECONOMICAS","value":85832985293},
                        {"name":"002-PRESTAMOS PARA VIVIENDAS OTORGADOS","value":25716387524},
                        {"name":"003-CONSTRUCCIÓN DE VIVIENDAS EN ASENTAMIENTOS INDIGENAS","value":15939583536},
                        {"name":"004-SUBSIDIO HABITACIONAL","value":260609315835},
                        {"name":"005-CONSTRUCCION DE VIVIENDAS SOCIALES EN MUNICIPIOS","value":25552679828},
                        {"name":"006-SP MERCOSUR ROGA","value":2348850000},
                        {"name":"007-CONSTRUCCIÓN DE 4500 SOLUCIONES HABITACIONALES EN EL PY","value":26939637050},
                        {"name":"008-CONSTRUCCIÓN DE 5800 SOLUCIONES HABITAC. EN AREAS RURALES PY","value":28000000000},
                        {"name":"009-MEJORAMIENTO DE LAS CONDIC. DE HABITAB. DE CHACARITA ALTA","value":43704165752},
                        {"name":"010-MEJORAMIENTO  Y AMPLIACION DE VIVIENDAS DEL AMA","value":17291517434},
                       
                    ]
                },
                
               
                
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
},{
  salud:[{
    data:{
    labels: ["Misional", "Administrativo","Proyecto","Sustantivo", "No asignables"],
    datasets: [
      {
        data: [  3.9 , 22.2,  1.8,  72.1 , 0],
        backgroundColor: ["#A7D5FF", "#0AFC5D", "#E16163", "#FAFF0E",'blue'],
        hoverBackgroundColor: ["#A7D5FF", "#0AFC5D", "##E16163", "#FAFF0E",'blue']
      }
    ]
  }},
  {items: [
    "Acceso a unidades de salud familiar integrales y de calidad en comunidades",
    "Servicios hospitalarios para la reducción de muertes causadas por enfermedades",
    "Servicios de apoyo y diagnóstico para mejora en la atención  ",
    "Aumento de la cobertura en la atención y medicamentos a enfermedades especiales (físicas y mentales)",
    "Sensibilización, asistencia y vigilancia en materia de alimentación y nutrición",
    "Bienestar social y atención a adultos mayores y otras personas en situaciones de riesgo ",
    "Acceso a los servicios de agua potable y saneamiento ambiental en comunidades rurales e indígenas"
    
  ]},{
  datos:{
    nombre:"MINISTERIO DE SALUD PUBLICA Y BIENESTAR SOCIAL",
    programas:[{
      nombre:"Programa Central",
      monto: "Gs. 1.539.354.410.4985  "
    },{
      nombre:"Misional",
      monto:"Gs. 216.090.625.327"
    },{
      nombre:"Administrativo",
      monto:"Gs. 1.223.157.111.772"
    },
    {
      nombre:"Proyecto",
      monto:"Gs. 100.106.673.399 "
    },{
      nombre:"Programa sustantivo",
      monto:"Gs. 3.979.313.069.289"
    },{
      nombre:"Partidas no asignables",
      monto:"Gs. 0"
    }
  ],
  presupuestoTotal: "Gs. 5.518.667.479.787",
  
  },
 
    
  },{
    treeMapData : {
      'name':"MINISTERIO DE SALUD PÚBLICA Y BIENESTAR SOCIAL",
      'children':
      [{
      "name":"Programa Central",
      "children": [
                  { 
                      "name": "Actividades Administrativa" ,
                      "children": [
                          {"name":"001-GESTION ADMINISTRATIVA P/ EL FUNCIONAMIENTO INSTITUCIONAL","value":1174716458009},
                          {"name":"002-RECURSOS FINANCIEROS TRANSFERIDOS A CONSEJOS DE SALUD","value":48440653763},
                          
                      ]
                  },
                  {
                      "name":"Actividad Misional",
                      "children": [
                          {"name":"007-ACCIONES PARA EL APOYO A LOS SERV. DE SALUD","value":28693581338},
                          {"name":"009-CONTROL DE LA ZOONOSIS","value":6096809146},
                          {"name":"010-ENFERMED. TRANSMITIDAS POR VECTORES REDUCIDAS Y CONTROLADAS","value":123575901680},
                          {"name":"011-CURSOS Y CAPACITACIONES EN EL AREA DE SALUD","value":882823445},
                          {"name":"013-ACCIONES PARA LA ATENCIÓN INTEGRAL DEL VIH-SIDA","value":2362552658},
                          {"name":"014-VIGILANCIA DE ENFERMEDADES NO TRANSMISIBLES Y TRANSMISIBLES","value":8994026217},
                          {"name":"015-VIGILANCIA DE ENFERMEDADES NO TRANSMISIBLES","value":590864166},
                          {"name":"016-ATENCION INTEGRAL A PACIENTES CON ENFERM. DE LA DIABETES","value":868798357},
                          {"name":"017-GENERACIÓN DE INFORM DE CALID S/ LA SITUAC DE SALUD D TERRI","value":2930726799},
                          {"name":"018-INSPECCIONES Y HABILITACIONES A ESTABLECIMIENTOS SANITARIOS","value":20454483270},
                          {"name":"019-REGISTROS NUEVOS Y RENOVACIÓN DE PRODUCTOS SANITARIOS","value":11220840095},
                          {"name":"020-CATEG. Y ACRED. ENTID. PRESTAD. DE SERV. DE SALUD NIVEL NAC","value":7168346256},
                          {"name":"021-REGULAR Y FISCALIZAR LA UTILIZACIÓN DE SANGRE HUMANA Y DERIV","value":2250871900},
                              
                      ]
                  },
                  {
                      "name":"Proyecto",
                      "children": [
                          {"name":"008-SP PROGRAMA DE DESARROLLO INFANTIL TEMPRANO (DIT)","value":91640054750},
                          {"name":"012-INVESTIGACIÓN ,EDUC. Y BIOTECNOLOGÍA APLICADAS A LA SALUD","value":8466618649},

                      ]
                  },
                 
              ]
  }
      ,{
    "name":"Programa Sustantivo",
    "children": [
                { 
                    "name": "001 - ACCESO A LA ATENCIÓN PRIMARIA DE LA SALUD" ,
                    "children": [
                        {"name":"001-SERVICIOS DE ATENCION PRIMARIA DE LA SALUD","value":280061045039}
                    ]
                },{
                  "name":"002 - SERVICIOS HOSPITALARIOS P/LA REDUCCIÓN DE LA MORBIMORTALIDAD",
                  "children":[
                    {"name":"001-SERVICIOS DE ATENC. INTEGRAL. A LA POBLACION DE CONCEPCION","value":  56164742377 },
                    {"name":"002-SERV. DE ATEN. INTEGRAL A LA POBLACIÓN DE SAN PEDRO","value":77858010116},
                    {"name":"003-SERV. DE ATEN. INTEG. A LA POBLACION DE CORDILLERA","value":72278622883},
                    {"name":"004-SERV. DE ATEN.INT. A POBLACIÓN DE GUAIRÁ","value":64910363565},
                    {"name":"005-SERV. DE ATEN. INT. A POBLACIÓN DE CAAGUAZÚ","value":91701297637  },
                    {"name":"006-SERV. DE ATEN. INT. A POBLACIÓN DE CAAZAPÁ","value":45551005001},
                    {"name":"007-SERV. DE ATEN. INT. A POBLACIÓN DE ITAPÚA","value":84412701505},
                    {"name":"008-SERV. DE ATEN. INT. A POBLACIÓN DE MISIONES","value":60564186911},
                    {"name":"009-SERV. DE ATEN. INT. A POBLACIÓN DE PARAGUARÍ","value":82225691755},
                    {"name":"010-SERV. DE ATEN. INT. A POBLACIÓN DE ALTO PARANÁ","value":99942671514},
                    {"name":"011-SERV. DE ATEN. INT. A POBLACIÓN DE CENTRAL","value":93635127862},
                    {"name":"012-SERV. DE ATEN. INT. A POBLACIÓN DE ÑEEMBUCU","value":40055601233},
                    {"name":"013-SERV. DE ATEN. INT. A POBLACIÓN DE AMAMBAY","value":36408950651},
                    {"name":"014-SERV. DE ATEN. INT. A POBLACIÓN DE CANINDEYÚ","value":41289539737},
                    {"name":"015-SERV. DE ATEN. INT. A POBLACIÓN DE PDTE HAYES","value":32068421807},
                    {"name":"016-SERV. DE ATEN. INT.  A POBLACION DE BOQUERÓN","value":18826926435},
                    {"name":"017-SERV. DE ATEN. INT. A POBLACION DE ALTO PARAGUAY","value":15898860557},
                    {"name":"018-SERV. DE ATEN. INT. A POBLACION DE LA CAPITAL","value":63989746930},
                    {"name":"019-SERV. DE ATEN. INT. A POBLACIÓN DE VILLETA","value":9980956771},
                    {"name":"020-SERV. DE ATEN. INT. A POBLACIÓN EN H. BARRIO OBRERO","value":54405303876},
                    {"name":"021-SERV. DE ATEN. INT. A POBLACIÓN EN H. DE ITÁ","value":14558265974},
                    {"name":"022-SERV. DE ATEN. INT. A POBLACIÓN EN EL H.D. ITAUGUA","value":7758160600},
                    {"name":"023-SERV. DE ATEN. INT. A POBLACIÓN EN EL H. DE LUQUE","value":59996303293},
                    {"name":"024-SERV. DE ATEN. INT. A POBLACIÓN EN H. DE ÑEMBY","value":28455654425},
                    {"name":"025-SERV. DE ATEN. INT. A POBLACIÓN EN EL H. SAN LORENZO","value":46629555480},
                    {"name":"026-SERV. DE ATEN. INT. A POBLACIÓN EN EL H. DE VILLA ELISA","value":19722120516},
                    {"name":"027-SERV. DE ATENCIÓN INTEGRAL A LA POB. EN EL H. PEDIATRICO","value":41731885576},
                    {"name":"028-SERV. DE ATEN.INT. A POBLAC. EN EL HOSP. NACIONAL","value":231943864429},
                    {"name":"029-SERV. DE ATEN. INT. A POBLACIÓN EN EL H. STA. ROSA DEL A.","value":28025828329},
                    {"name":"030-SERV. DE ATEN. INT. A POBLACIÓN EN EL H. LAMBARÉ","value":34775115466},
                    {"name":"031-SERV. DE ATEN. INT. A POBLACIÓN EN EL H.FDO DE LA MORA","value":26297777889},
                    {"name":"032-SERV. DE ATENC. INT. A POBLACIÓN EN EL H. LIMPIO","value":29222553957},
                    {"name":"033-SERV. DE ATEN. INT. A POBLACIÓN EN EL H. LOMA PYTA","value":24758671623},
                    {"name":"034-SERV. DE ATEN. INT. A POBLACIÓN EN EL H. CAPIATÁ","value":36387451388},
                    {"name":"035-SERV. DE ATEN. INT. A POBLACIÓN EN EL H.M.R.A.","value":28111177342},
                    {"name":"036-SERV. DE ATEN. EN EL INST. NAC. DE ABLACIÓN Y TRASP.","value":4532859515},
                    {"name":"037-ATEN. INT. A POBLACIÓN H. INDÍGENA SAN ROQUE G. SC.","value":7419845146},
                    {"name":"038-ATEN. DE AFECCIONES CARDIOVAS. H. SAN JORGE","value":25665000716},
                    {"name":"039-ATENCIÓN A POBLAC. PROG. NAC. PREV. CARDIOVASCULAR","value":2026338844},
                    {"name":"040-ATENCION INT. EN SALUD RESPIRATORIA - INERAM","value":43606619264},
                    {"name":"041-ATENCION DE POBLAC. CON ENFERM. INFECCIOSAS IMT","value":32730860372},
                    {"name":"042-ATENCION A LA POBLACION CON ENFERMEDADES ONCOLOGICAS-INCAN","value":202824334318},
                    {"name":"043-ATENC. DE POBLAC. C/ ENFERM. ONCOLOG. DE CUELLO UTERINO","value":1219697453},
                    {"name":"044-ATENC. INT. DEL QUEMADO CENQUER","value":26393229536},
                    {"name":"045-ATEN. INT. EN EL CENT. NAC. DE CONTROL DE ADICCIONES","value":9785941293},
                    {"name":"046-ATENCION A PACIENTES RENALES INST. NAC. DE NEFROLOGIA","value":11677155387},
                    {"name":"047-ATENCIÓN A LAS URGENCIAS MÉDICO, QUIRURGICAS - H . TRAUMA","value":146065642864},
                    {"name":"048-SERVICIO DE PROVISIÓN DE LECHE MATERNA - BANCO DE LECH","value":87372284},
                    {"name":"049-ATENCIÓN A LA POBLACIÓN CON ENFERMEDAD MENTAL - H. PSIQUIÁTR","value":33233805373},
                    {"name":"050-ATENCIÓN INTEGRAL A LA POBLACIÓN MAT. INF. SAN PABLO","value":58868751083},
                    {"name":"051-ATENCIÓN INTEGRAL A POBLACIÓN MAT. INF. CRUZ ROJA PYA.","value":23767040705},
                    {"name":"052-ATENCIÓN INTEGRAL A POBLACIÓN MAT. INF. STMA.TRINIDAD","value":30812070054},
                    {"name":"053-CAPACITACIONES, FORMACIÓN E INVESTIGACIÓN EN EL IMT","value":235504370},
                    {"name":"054-CAPACITACIONES, FORMACION E INVESTIGACIÓN EN EL H. NACIONAL","value":1350777967},
                    {"name":"055-CAPACITACIÓN, FORMACION E INVESTIGACION EN EL H. PEDIATRICO","value":23900740845},
                    {"name":"056-CAPACITACIÓN, FORMACIÓN E INVESTIGACION EN EL INERAN","value":180090481},
                    {"name":"057-CAPACITACION, FORMACION E INVESTIGACION EN EL CENQUER","value":759096691},
                  ]
                },{ 
                  "name": "003 - SERVICIOS DE APOYO Y DIAGNOSTICO P/ LA MEJORA EN LA ATENCIÓN" ,
                  "children": [
                      {"name":"001-OBTENCIÓN, PRODUCCIÓN Y SUMINISTROS DE SANGRE","value":  6654628428 },
                      {"name":"002-HABILITACIÓN Y CONTROL DE LABORATORIOS DE ANALISIS CLÍNICOS","value":16714294515},
                      {"name":"003-SERVICIOS LABORATORIALES","value":    7025618152 },
                      {"name":"004-GESTIONES INTEGRADAS PARA LA PROVISIÓN DE BIOLÓGICOS","value":190399109118},
                      {"name":"005-INTERVENCIONES EN CASOS EMERG. EXTRAHOSPITALARIAS","value":58650593990},
                      {"name":"006-PROV. DE MEDICAMENTOS, INSUMOS, INST.Y EQUIPOS","value":542504388880},
                  ]
              },
              { 
                "name": "004 - AUMENTO DE LA COBERTURA EN LA ATENC. A ENFERM. ESPECIALES" ,
                "children": [
                    {"name":"001-PROMOCIÓN Y TRATAMIENTO DE FIBRÓSIS QUÍSTICA Y RETARDO MENTA","value":584427801},
                    {"name":"002-MEDICAMENTOS PARA ENFERMEDADES LISOSOMALES","value":6440000000},
                    {"name":"003-ATENCIÓN INTEGRAL A LA POB. CON ENFERMEDADES OCULARES","value":3662259656},
                    {"name":"004-ATENCIÓN INTEGRAL DE POBLACIÓN CON ENFEREMEDADES BUCALES","value":4397466098},
                    {"name":"005-ENTREGA DE INSUMOS PARA PERSONAS CON OSTOMÍA","value":2097600000},
                    {"name":"006-ASISTENCIA A LA POBLACIÓN (ANATOMÍA Y SALUD MENTAL)","value":484826985},
                    {"name":"007-CAPACITACIONES DE RR.HH. DEL MSPYBS.","value":5961027839},
                    {"name":"008-ENTREGA DE MEDICAMENTOS, KIT DE PARTO Y ANTICONCEPTIVOS","value":16210894870},
                ]
            },
            { 
              "name": "005 - SEGURIDAD ALIMENTARIA NUTRICIONAL HUMANA MEJORADA" ,
              "children": [
                  {"name":"001-VIGILANCIA ALIMENTARIA NUTRICIONAL","value":22336485959},
                  {"name":"002-SENSIBILIZACIÓN EN TEMAS DE ALIMENTACIÓN Y NUTRICIÓN","value":3913924211},
                  {"name":"003-ASISTENCIA ALIMENTARIA NUTRICIONAL","value":103567128891},

              ]
          },
          { 
            "name": "006 - MEJORA EN EL BIENESTAR SOCIAL P/ PER. EN SITUAC. DE RIESGO" ,
            "children": [
                {"name":"001-ATENCIÓN INTEGRAL A LA POBLACIÓN ADULTA MAYOR","value":1920099016},
                {"name":"002-ATENCIÓN INTEGRAL A LA POBLACIÓN EN SITUACIÓN DE RIESGO","value":26085369385},
                {"name":"003-REGISTRO Y ACREDITACIÓN DE ENTIDADES SIN FINES DE LUCRO","value":967394804},
            ]
        },
        { 
          "name": "007 - ACCESO A LOS SERV. DE AGUA POTABLE Y SANEAMIENTO AMBIENTAL" ,
          "children": [
              {"name":"001-GESTIÓN ADMINISTRATIVA","value":48538241500},
              {"name":"003-CONSTRUCCIÓN SEMB. OPORT.- 480 SISTEMA DE AGUA Y SANEAM.","value":3528327466},
              {"name":"004-SP ABAST.DE AGUA. POT.Y SAN.BAS PEQ.COM.RURAL E INDI(FOCEM)","value":12360238508},
              {"name":"005-CONSTRUCCIÓN GRAN HOSPITAL GENERAL DE BARRIO OBRERO","value":912400000},
              {"name":"006-CONSTRUCCIÓN SIST.AGUAPOT.Y.SAN.PEQ.CIUD.COM.RURAL.E.INDIG.","value":104806242103},
              {"name":"007-ACCIONES DE VIGILANCIA DE CALIDAD AMBIENTAL","value":20843146104},
              
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
}]);


export default ministerioContext;