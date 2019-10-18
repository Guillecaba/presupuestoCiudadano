import React from "react"

const ministerioContext = React.createContext([{
  educacion:[{
    data:{
    labels: ["Programa Central","Programa Sustantivo", "Partidas no asignables a Programas"],
    datasets: [
      {
        data: [ 71.71  ,10.76,  17.53],
        backgroundColor: ["orange", "#FAFF0E",'blue'],
        hoverBackgroundColor: ["orange", "#FAFF0E",'blue']
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
    nombre:"Ministerio de Educación y Ciencias",
    programas:[{
      nombre:"Programa Central",
      monto: "Gs. 6.628.473.513.765"
    },{
      nombre:"Misional",
      monto:"Gs. 5.783.387.122.583"
    },{
      nombre:"Administrativo",
      monto:"Gs. 825.610.338.799"
    },
    {
      nombre:"Proyecto",
      monto:"Gs. 19.476.052.383 "
    },{
      nombre:"Programa sustantivo",
      monto:"Gs. 994.908.680.081"
    },{
      nombre:"Partidas no asignables a Programas",
      monto:"Gs. 1.620.564.757.342"
    },{
      nombre:"Proyecto",
      monto:"Gs. 766.478.517.916"
    },{
      nombre:"Actividad",
      monto:"Gs. 228.430.162.165"
    }
  ],
  presupuestoTotal: "Gs. 9.243.946.951.188",
  },
 
    
  },{
    treeMapData : {
      'name':"MINISTERIO DE EDUCACIÓN Y CIENCIAS",
      'children':
      [{
      "name":"Programa Central",
      "children": [
                  { 
                      "name": "Actividad Administrativa" ,
                      "children": [
                          {"name":"GESTIÓN ADMINISTRATIVA INSTITUCIONAL","value":  825610338799 },
                          
                      ]
                  },
                  {
                      "name":"Actividad Misional",
                      "children": [
                          {"name":"BRINDAR SERVICIO EDUCATIVO EN EDUCACIÓN INICIAL","value":  23733554561},
                          {"name":"BRINDAR SERVICIO EDUCATIVO EN PRIMER Y SEGUNDO CICLO DE EEB","value":  3788337220084 },
                          {"name":"BRINDAR SERVICIO EDUCATIVO EN EL TERCER CICLO DE LA EEB Y EM","value":  1446246278653 },
                          {"name":"ATENCION A EDUCACION SUPERIOR Y CIENCIAS","value":  55655897369},
                          {"name":"FORMACION DE MUSICOS EN LOS DISTINTOS GENEROS DE MUSICA","value":  15378406129},
                          {"name":"BRINDAR SERV.EDUC.A JOVENES Y ADULTOS DE 15 AÑOS Y MAS","value":  335486421492 },
                          {"name":"BRINDAR SERVICIO EDUCATIVO EN CENTROS REGIONALES DE EDUC","value":  80117516114 },
                          {"name":"SERV.EDUC.A ESTUDIANTES C/NECESIDADES ESPECIFICAS DE APOYO","value":  18766116131},
                          {"name":"PROMOVER EL TALENTO Y LA FORMACION ARTISTICA","value":  964526200 },
                          {"name":"BRINDAR ATENCION A INSTITUCIONES DE EDUC ESCOLAR INDIGENA","value":  4937942157},
                          {"name":"OTORGAR BECAS PARA EDUCACION SUPERIOR","value":  7837900000 },
                          {"name":"PLANIFICACION Y MONITOREO DE LA POLITICA EDUCATIVA NACIONAL","value":  377987871},
                          {"name":"DIFUNDIR LA INVESTIGACION EDUCATIVA","value":61750000},
                          {"name":"EVALUAR LA CALIDAD EDUCATIVA","value":3419909678},
                          {"name":"PROMOVER POLITICAS P/ EL DESARROLLO DE EDUCACION Y CIENCIAS","value":  2065696144}
                         
  
                          
                      ]
                  },
                  {
                      "name":"Proyecto",
                      "children": [
                          {"name":"FOMENTO Y APOYO OPERAT. PARA LA EJEC. DE PROY. DEL MEC","value":7840145062},  
                          {"name":"DIFUSIÓN DISEÑO DE LA ESTRATEGIA DE TRANSFORMACIÓN EDUC","value":  11635907321}, 
                      ]
                  },
                 
              ]
  }
      ,{
    "name":"Programa Sustantivo",
    "children": [
                { 
                    "name": "ATENCIÓN EDUCATIVA OPORTUNA AL PRE JARDIN Y JARDIN" ,
                    "children": [
                        {"name":"OPTIMIZAR LOS PROGRAMAS COMPENSATORIOS","value":  73140554894 },
                        {"name":"AMPLIACIÓN EN LA ATENC. EDUC. DESDE LA GEST. HASTA 5 AÑOS","value":123596276913},
                    ]
                },
                {
                    "name":"EDUCACIÓN MEDIA INTEGRADA",
                    "children": [
                        {"name":"DIFUNDIR LAS OFERTAS EDUCATIVAS","value":  200000000 },
                        {"name":"TRANSFERENCIA Y DOTACION TEXTOS A ESTUD.Y GUIAS A DOCENTES","value":32000000},
                        {"name":"CAPACITACIÓN A LOS EDUCADORES DE TODOS LOS NIVELES Y MODAL.","value":  85187652000 }
                        
                    ]
                },
                {
                    "name":"CALIDAD DEL APRENDIZAJE",
                    "children": [
                        {"name":"ELABORAR DOCUMENTOS PEDAG. P/ ESTUD. C/ NECESIDADES DE APOYO","value":156753244},
                        {"name":"ELABORAR CURRÍCULUM Y MATERIAL EDUCATIVO P/ PUEBLO INDÍGENA","value":238349364},
                        {"name":"DOTAR A INSTITUCIONES EDUCATIVAS DE MATERIALES DIDÁCTICOS","value":1510309674},
                        {"name":"INVESTIGACIÓN EVAL. ESTANDARIZADAS DE DESEMPEÑO A ESTUD.","value":3520539526},
                        {"name":"CAPACITACIÓN APOYO A LA AMPLIACIÓN DE LA JORNADA ESCOLAR.","value":  20584812599 },
                        {"name":"MEJORAMIENTO DE COND. DE APRENDIZ. CON INCORPORACIÓN DE TIC.","value":    322565734094  }
                        
                    ]
                },
                {
                    "name":"CULMINACIÓN OPORTUNA DE ESTUDIOS",
                    "children": [
                        {"name":"OPTIMIZAR LOS PROGRAMAS COMPENSATORIOS","value":  153184194989 },
                        {"name":"AMPLIACIÓN REP. 111 EST. EDUC. ASU Y 10 DEP. GEOG.","value":    4424756667  },
                        {"name":"AMPLIACIÓN REP. 822 EST. EDUC. ASU 17 DPTOS","value":    200210262217  },
                        {"name":"MEJORAMIENTO CONDICIONES DE TRANSPORTE DE ESTUDIANTES","value":  6356483900 }
                    ]
                }
            ]
  },{
    "name":"Partidas no asignables a Programas",
    "children": [
      {"name":"Transferencias Consolidables","value":"1620564757342" }
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
    labels: ["Programa Central","Programa Sustantivo", "Partidas no asignables a Programas"],
    datasets: [
      {
        data: [   20.05, 78.93 , 1.03],
        backgroundColor: ["orange", "#FAFF0E",'blue'],
        hoverBackgroundColor: ["orange", "#FAFF0E",'blue']
      }
    ]
  }},
  {items: [
    "Aumento y mejoramiento de redes viales pavimentadas.",
    
    "Mejoramiento de caminos vecinales y puentes rurales ",
    "Suministro continuo y permanente para la gente y mejoramiento de los servicios de alcantarillado  "
  
  
  ]},{
  datos:{
    nombre:"MINISTERIO DE OBRAS PÚBLICAS Y COMUNICACIONES",
    programas:[{
      nombre:"Programa Central",
      monto: "Gs. 1.051.526.014.476 "
    },{
      nombre:"Misional",
      monto:"Gs. 159.006.986.699"
    },{
      nombre:"Administrativo",
      monto:"Gs.  371.512.289.231"
    },
    {
      nombre:"Proyecto",
      monto:"Gs. 521.006.738.546 "
    },{
      nombre:"Programa sustantivo",
      monto:"Gs. 4.140.503.123.340"
    },{
      nombre:"Partidas no asignables a Programas",
      monto:"Gs. 53.774.694.697"
    },
    {
      nombre:"Proyecto",
      monto:"Gs. 4.140.503.123.340"
    },{
      nombre:"Actividad",
      monto:"Gs. 0"
    }
  ],
  presupuestoTotal: "Gs. 5.245.803.832.513",
  },
 
    
  },{
    treeMapData : {
      'name':"MINISTERIO DE OBRAS  PÚBLICAS Y COMUNICACIONES",
      'children':
      [{
      "name":"Programa Central",
      "children": [
                  { 
                      "name": "Actividades Administrativas" ,
                      "children": [
                          {"name":"GESTION ADMINISTRATIVA FINANCIERA","value":  371512289231 },
                          
                      ]
                  },
                  {
                      "name":"Actividad Misional",
                      "children": [
                          {"name":"REGULACION DEL TRANSPORTE PÚBLICO DEL ÁREA METROPOLITANA","value":34816987000},
                          {"name":"CONTROL DEL TRANSPORTE PÚBLICO DEL ÁREA METROPOLITANA","value":  18799845549 },
                          {"name":"FISCALIZACIONES DE LOS RECURSOS MINERALES Y ENERGETICOS","value":  6837994933 },
                          {"name":"CONTROL DE CUMPLIMIENTO DE LAS NORMAS DE TRANSITO","value":  51422170537 },
                          {"name":"FISCALIZACIONES DEL TRANSPORTE FLUVIO-MARITIMO","value":  2667336228 },
                          {"name":"REGULACION DEL TRANSPORTE FLUVIO-MARITIMO","value":  2233095912 },
                          {"name":"MANTENIMIENTO, CONSERVACION DE PATRIMONIO HISTORICO Y OTROS","value":  3579000000 },
                          {"name":"CONSERVACIÓN Y DESPEJE DE LA CONTAMINACIÓN DEL RIO PILCOMAYO","value":  9842768360 },
                          {"name":"MANTENIMIENTO DE MÁRGENES Y CAUCES DE ARROYOS","value":  28807788180 }
                             
                      ]
                  },
                  {
                      "name":"Proyecto",
                      "children": [
                          {"name":"SP CONST. AVDA. COST. CENT. HIST. Y PARQUE BICENTENARIO","value":14447423400},
                          {"name":"CONSTRUCCIÓN AV. COSTANERA NORTE, 2ª ETAPA","value":  167130374717 }, 
                          {"name":"DIAGNÓSTICO Y PROTOCOLO DE INTERVENCIÒN EDIF. HISTÒRICOS","value":1700000000}, 
                          {"name":"RESTAURACIÓN DE EDIFICIOS PATRIMONIALES","value":  16061828100 }, 
                          {"name":"EQUIPAMIENTO PROVISIÓN Y COLOCACIÓN DE TEATROS","value":3100000000}, 
                          {"name":"LEVANTAMIENTO DE DATOS Y ELABORACIÓN DE PROYECTOS EJECUTIVOS","value":  1420000000 }, 
                          {"name":"CONSTRUCCIÓN PENITENCIARÍA REGIONAL DE CIUDAD DEL ESTE","value":  10000000000 }, 
                          {"name":"CONSTRUCCIÓN DEL CIRS DE EMBOSCADA","value":  15000000000 }, 
                          {"name":"SP REC. Z. PTO AS. CENT OFIC, CONT. P2419/OC-PR Y 2420/BL-PR","value":  240981743440 }, 
                          {"name":"ANÁLISIS ELAB.PLAN MAESTRO DE NAVEGACIÓN DEL RIO PY","value":  12000000000 }, 
                          {"name":"CAPACITACIÓN Y MEJOR.FORM EJECUCIÓN DE PROYECTOS DE LA DIPE","value":  10000000000 }, 
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
                        {"name":"MEJORAMIENTO DE 151 KM CPTAN. BADO-SANTA ROSA","value":  4530000000 },
                        {"name":"SP MEJ.TRAVESÍAS URB. CDAD. PARAGUARI-CARAPEGUA-QUIIDY-CAAP","value":  4000000000 },
                        {"name":"SP FOCEM-REHAB. Y PAV. ASF. DEL TRAMO CONCEPCIÓN - VALLEMI","value":  12944593534 },
                        {"name":"MEJORAMIENTO PAV.CORRED.INTEG.REHAB.MANT.RED VIAL(FASE II)","value":  90773600000 },
                        {"name":"MEJORAMIENTO DE CORREDORES DE INTEGRACIÓN Y RECONST. VIAL","value":  132090522909 },
                        {"name":"MEJORAMIENTO CORREDOR DE EXPORTACIÓN EN ITAPÚA Y ALTO PARANÁ","value":  244454356373 },
                        {"name":"MEJORAMIENTO TRAMO SAN JUAN NEPOMUCENO  - EMPALME RUTA VI","value":  112050000000 },
                        {"name":"MEJORAMIENTO TRAMO ALBERDI - PILAR","value":  173649202827 },
                        {"name":"HABILITACIÓN DE LA RED VIAL PAV. EN COR, PAR, CAG, GUA, CAZ","value":  146639665065 },
                        {"name":"HABILITACIÓN DE LA RED VIAL PAV. EN DPTO. DE SAN PEDRO","value":  18589567500 },
                        {"name":"HABILITACIÓN DE LA RED VIAL PAV. VILLETA - ALBERDI","value":  36748409409 },
                        {"name":"HABILITACIÓN DE LA RED PAV., DPTOS DE MISIONES E ITAPÚA","value":  91767420661 },
                        {"name":"HABILITACIÓN DE LA RED PAV. DPTOS. S. PEDRO, CAAG. Y CANIND.","value":  113842654646 },
                        {"name":"CONSERVACIÓN DE RUTAS PAVIMENTADAS POR ADMINISTRACIÓN","value":  148193823547 },
                        {"name":"MEJORAMIENTO DE LA FRANJA DE DOMINIO ZONA CHACO","value":  1500000000 },
                        {"name":"MEJORAMIENTO DE LA SEÑALIZACIÓN HORIZONTAL Y VERTICAL ESTE","value":  6000000000 },
                        {"name":"MEJORAMIENTO DE LA SEÑALIZACIÓN HORIZONTAL Y VERTICAL NORTE","value":  6291054415 },
                        {"name":"MEJORAMIENTO DE LA SEÑALIZACIÓN HORIZONTAL Y VERTICAL SUR","value":  6000000000 },
                        {"name":"CONSTRUCCIÓN Y MANTENIMIENTO RUTA Nº 3 TRAMO KM 21.8-170.3","value":  6500000000 },
                        {"name":"CONSTRUCCIÓN Y MANTENIMIENTO RUTA Nº 4 TRAMO KM 225 - 358.4","value":  7300000000 },
                        {"name":"CONSTRUCCIÓN PAV. TIPO EMPED. Y PUENTES-REGIÓN SURESTE-CPE","value":  216742860 },
                        {"name":"CONSTRUCCIÓN PAV. TIPO EMPED. Y PUENTES - REGIÓN CENTRO-CPE","value":  1084000000 },
                        {"name":"CONSTRUCCIÓN PAV. TIPO EMPED. Y PUENTES - REGIÓN CENTRO","value":  4600000000 },
                        {"name":"CONSTRUCCIÓN PAV. TIPO EMPED. Y PUENTES - REGIÓN SUR","value":  8084000000 },
                        {"name":"CONSTRUCCIÓN PAV. TIPO EMPED. Y PUENTES - REGIÓN ESTE","value":8100000000},
                        {"name":"CONSTRUCCIÓN PAV. TIPO EMPED. Y PUENTES -REGIÓN NORTE","value":2100000000},
                        {"name":"CONSTRUCCIÓN PAV. TIPO EMPED. Y PUENTES - REGIÓN CHACO","value":1000000000},
                        {"name":"CONSTRUCCIÓN PAVIMENTO TIPO ADOQUIN - REGIÓN SUR","value":5084000000},
                        {"name":"CONSTRUCCIÓN  PASOS A DESNIVEL - CENTRAL","value":2100000000},
                        {"name":"CONSTRUCCIÓN ALCANTARILLADO Y DESAGÜE PLUVIAL EN CENTRAL","value":100000000},
                        {"name":"CONSTRUCCIÓN PAV. S/ EMPEDRADOS EN REGIÓN NORTE","value":2000000000},
                        {"name":"CONSTRUCCIÓN DE PAV. S/ EMPEDRADOS EN REGIÓN ESTE","value":9800000000},
                        {"name":"CONSTRUCCIÓN ASFALTO S/ EMPEDRADOS - REGIÓN SUR","value":8100000000},
                        {"name":"CONSTRUCCIÓN Y PAV. ASF. DE TR. CAMINEROS EN REGIÓN NORESTE","value":22100000000},
                        {"name":"CONSTRUCCIÓN Y PAV. ASF. DE TR. CAMINEROS EN REGIÓN ESTE","value":5100000000},
                        {"name":"CONSTRUCCIÓN Y PAV. ASF. DE TR. CAMINEROS EN REGIÓN CENTRO","value":47050000000},
                        {"name":"CONSTRUCCIÓN Y PAV. ASFALTICA DE TR. CAMIN. EN REGIÓN CHACO","value":16050000000},
                        {"name":"CONSTRUCCIÓN PAVIMENTACIÓNN NARANJAL SAN CRISTOBAL RUTA 6","value":9288635406},
                        {"name":"AMPLIACIÓN Y DUPLICACIÓN DE LAS RUTAS 2 Y 7","value":269971257050},
                        {"name":"MEJORAMIENTO TRAZADO DEL TRAMO LOMA PLATA - CARMELO PERALTA","value":42738787961},
                        {"name":"CONSTRUCCIÓN DE PAV. S/ EMPEDRADOS EN REGIÓN CENTRO","value":8100000000},
                        {"name":"MEJORAMIENTO Y CONSERV. TRAMO CAAGUAZU - YHU. - EMP. RN 10","value":16000000000},
                        {"name":"MEJORAMIENTO Y CONSERV. TRAMO ÑUMI - SAN JUAN N. - EMP. RN6","value":45870000000},
                        {"name":"HABILITACIÓN Y MANT. DE VÍAS DE ACC. AL ÁREA METROP. DE ASU","value":15000000000},
                        {"name":"HABILITACIÓN Y MANT. DE LA RUTA 1 TRAMO CARAPEGUA - SJB","value":102041547368},
                        {"name":"HABILITACIÓN Y MANT. TRAMO POZO COLORADO - CONCEPCIÓN","value":245987625589},
                        {"name":"HABILITACIÓN Y MANT. RUTA NACIONAL Nº 9 Y ACC. COL. MENONIT","value":475698000000},
                        {"name":"MEJORAMIENTO RUTA N° 9 Y RAFAEL FRANCO","value":36143400000},
                        {"name":"CONSTRUCCIÓN DE LA RUTA SAN PEDRO - BELEN - CONCEPCIÓN","value":219767507904},
                    ]
                },
                {
                    "name":"TRANSITABILIDAD DE CAMINOS VECINALES Y RURALES MEJORADA",
                    "children": [
                        {"name":"SP PROG.NAC.CAM. RUR. 2° E.FASE II BID 2163/OC-2164/BL-OFID","value":  9982000000 },
                        {"name":"MEJORAMIENTO DE CAMINOS VECINALES Y PUENTES","value":23979386364},
                        {"name":"MEJORAMIENTO CAMINOS VECINALES EN LA REGIÓN ORIENTAL","value":184375365867},
                        {"name":"MEJORAMIENTO DE 160KM DE CAMINOS VECINALES EN LA R ORIENTAL","value":141735994721},
                        {"name":"CONSERVACIÓN CAMINOS RURALES NO PAVIMENTADOS R. OCCIDENTAL","value":9572000000},
                        {"name":"CONSTRUCCIÓN CAMINOS RURALES NO PAVIMENTADOS R. ORIENTAL","value":15082173606},
                        {"name":"CONSTRUCCIÓN PUENTES Y ALCANTARILLAS EN LA REGIÓN ORIENTAL","value":9672169851},
                        {"name":"CONSTRUCCIÓN PUENTES Y ALCANTARILLAS EN LA R.OCCIDENTAL","value":3546956346},
                        {"name":"CONSERVACIÓN CAMINOS RURALES NO PAVIMENT. R. ORIENTAL","value":15123912692},
                        {"name":"LEVANTAMIENTO FACTIB. Y DISEÑO INGENIERÍA CAMINOS Y PUENTES","value":2536000000},
                        {"name":"MEJORAMIENTO CAMINOS VECINALES Y PUENTES EN LA RO","value":291092465900},
                        {"name":"MEJORAMIENTO DE LA GESTIÓN DE LOS DISTRITOS DEPARTAMENTALES","value":83290448400},
                
                    ]
                },
                {
                    "name":"ACCESO A SISTEMAS DE AGUA POTABLE Y SANEAMIENTO",
                    "children": [
                        {"name":"SP PROYECTO ACUEDUCTO","value":21678006992},
                        {"name":"SP PROG. SANEAM. Y AGUA POT. P/CHACO Y CIUD. INTERM. RE","value":126907611052},
                        {"name":"MEJORAMIENTO DEL SERV. DE ALCANT. DE LA BAH. ASUNCIÓN","value":126205966418},
                        {"name":"MEJORAMIENTO ALCANTARILLADO DE LA CIUDAD DE SAN LORENZO","value":82582290107},
                    ]
                },
                
            ]
},{
  "name":"Partidas no asignables a Programas",
  "value":"53774694697"
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
        data: [ 0.4 , 17.6,  0 ,  82.44 , 0],
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
      monto: "Gs.  80.899.039.448  "
    },{
      nombre:"Misional",
      monto:"Gs. 2.268.000.000"
    },{
      nombre:"Administrativo",
      monto:"Gs.  78.631.039.448"
    },
    {
      nombre:"Proyecto",
      monto:"Gs. 0 "
    },{
      nombre:"Programa sustantivo",
      monto:"Gs. 379.991.025.878"
    },{
      nombre:"Partidas no asignables a Programas",
      monto:"Gs. 0"
    },
    {
      nombre:"Proyecto",
      monto:"Gs. 90.284.170.236"
    },{
      nombre:"Actividad",
      monto:"Gs. 289.706.855.642"
    }
  ],
  presupuestoTotal: "Gs.  460.890.065.326",
  
  },
 
    
  },{
    treeMapData : {
      'name':"MINISTERIO DE URBANISMO VIVIENDA Y HABITAT",
      'children':
      [{
      "name":"Programa Central",
      "children": [
                  { 
                      "name": "Actividades Administrativas" ,
                      "children": [
                          {"name":"001-GESTIÓN ADMINISTRATIVA","value":  78631039448 },
                          
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
                    "name": "SOLUCIONES HABITACIONALES ADECUADAS" ,
                    "children": [
                        {"name":"CONSTRUCCIÓN DE VIVIENDAS ECONÓMICAS","value":  85814585293 },
                        {"name":"PRÉSTAMOS PARA VIVIENDAS OTORGADOS","value":  25716387524 },
                        {"name":"CONSTRUCCIÓN DE VIVIENDAS EN ASENTAMIENTOS INDÍGENAS","value":  15939583536 },
                        {"name":"SUBSIDIO HABITACIONAL","value":  136683619461 },
                        {"name":"CONSTRUCCIÓN DE VIVIENDAS SOCIALES EN MUNICIPIOS","value":  25552679828 },
                        {"name":"SP MERCOSUR ROGA","value":  2348850000 },
                        {"name":"CONSTRUCCIÓN DE 4500 SOLUCIONES HABITACIONALES EN EL PY","value":  26939637050 },
                
                        {"name":"MEJORAMIENTO DE LAS CONDIC. DE HÁBITAT. DE CHACARITA ALTA","value":  43704165752 },
                        {"name":"MEJORAMIENTO  Y AMPLIACION DE VIVIENDAS DEL AMA","value":  17291517434 },
                       
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
      labels: ["Programa Central","Programa Sustantivo", "Partidas no asignables a Programas"],
      datasets: [
        {
          data: [   29.84, 70.08 , 0.08],
          backgroundColor: ["orange", "#FAFF0E",'blue'],
          hoverBackgroundColor: ["orange", "#FAFF0E",'blue']
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
    nombre:"MINISTERIO DE SALUD PÚBLICA Y BIENESTAR SOCIAL",
    programas:[{
      nombre:"Programa Central",
      monto: "Gs. 1.737.697.717.915  "
    },{
      nombre:"Misional",
      monto:"Gs. 208.058.116.414"
    },{
      nombre:"Administrativo",
      monto:"Gs.  1.400.850.048.847"
    },
    {
      nombre:"Proyecto",
      monto:"Gs. 128.789.552.654 "
    },{
      nombre:"Programa sustantivo",
      monto:"Gs. 4.081.022.674.528"
    },{
      nombre:"Partidas no asignables a Programas",
      monto:"Gs. 4.565.004.915"
    },
    {
      nombre:"Proyecto",
      monto:"Gs. 120.694.316.564"
    },{
      nombre:"Actividad",
      monto:"Gs. 3.960.328.357.964"
    }
  ],
  presupuestoTotal: "Gs. 5.823.285.397.358",
  
  },
 
    
  },{
    treeMapData : {
      'name':"MINISTERIO DE SALUD PÚBLICA Y BIENESTAR SOCIAL",
      'children':
      [{
      "name":"Programa Central",
      "children": [
                  { 
                      "name": "Actividades Administrativas" ,
                      "children": [
                          {"name":"Gestión administrativa p/el funcionamiento institucional","value":  1188371059555 },
                          {"name":"Recursos financieros transferidos a consejos de salud ","value":  48440653763 },
                          {"name":"CONSTRUCCIÓN DEL HOSPITAL NACIONAL  DE CORONEL OVIEDO ","value":    50000000000  },
                          {"name":"CONSTRUCCIÓN GRAN HOSPITAL GENERAL DE BARRIO OBRERO ","value":    50000000000  },
                          {"name":"MEJORAMIENTO FORT. Y APOYO INTEGRAL A LOS SERV DE SALUD PUB ","value":    64038335529  },
                          
                      ]
                  },
                  {
                      "name":"Actividad Misional",
                      "children": [
                          {"name":"ACCIONES PARA EL APOYO A LOS SERV. DE SALUD","value":  28693581338 },
                          {"name":"CONTROL DE LA ZOONOSIS","value":  5807585146 },
                          {"name":"ENFERMEDADES. TRANSMITIDAS POR VECTORES REDUCIDAS Y CONTROLADAS","value":  116013836082 },
                          {"name":"CURSOS Y CAPACITACIONES EN EL ÁREA DE SALUD","value":  882673445 },
                          {"name":"ACCIONES PARA LA ATENCIÓN INTEGRAL DEL VIH-SIDA","value":  2362552658 },
                          {"name":"VIGILANCIA DE ENFERMEDADES NO TRANSMISIBLES Y TRANSMISIBLES","value":  8978755067 },
                          {"name":"VIGILANCIA DE ENFERMEDADES NO TRANSMISIBLES","value":  590864166 },
                          {"name":"ATENCIÓN INTEGRAL A PACIENTES CON ENFERM. DE LA DIABETES","value":  868798357 },
                          {"name":"GENERACIÓN DE INFORMACIÓN DE CALID S/ LA SITUAC DE SALUD D TERRI","value":  2925992407 },
                          {"name":"INSPECCIONES Y HABILITACIONES A ESTABLECIMIENTOS SANITARIOS","value":  20403939270 },
                          {"name":"REGISTROS NUEVOS Y RENOVACIÓN DE PRODUCTOS SANITARIOS","value":  11220840095 },
                          {"name":"CATEG. Y ACRED. ENTID. PRESTAD. DE SERV. DE SALUD NIVEL NAC","value":  7058258256 },
                          {"name":"REGULAR Y FISCALIZAR LA UTILIZACIÓN DE SANGRE HUMANA Y DERIV","value":  2250440127 },
                              
                      ]
                  },
                  {
                      "name":"Proyecto",
                      "children": [
                          {"name":"SP PROGRAMA DE DESARROLLO INFANTIL TEMPRANO (DIT)","value":  120322934005 },
                          {"name":"INVESTIGACIÓN ,EDUC. Y BIOTECNOLOGÍA APLICADAS A LA SALUD","value":8466618649},

                      ]
                  },
                 
              ]
  }
      ,{
    "name":"Programa Sustantivo",
    "children": [
                { 
                    "name": "ACCESO A LA ATENCIÓN PRIMARIA DE LA SALUD" ,
                    "children": [
                        {"name":"SERVICIOS DE ATENCIÓN PRIMARIA DE LA SALUD","value":309911543761}
                    ]
                },{
                  "name":"SERVICIOS HOSPITALARIOS P/LA REDUCCIÓN DE LA MORBIMORTALIDAD",
                  "children":[
                    {"name":"SERVICIOS DE ATENC. INTEGRAL. A LA POBLACIÓN DE CONCEPCIÓN","value":  55801106377 },
                    {"name":"SERV. DE ATEN. INTEGRAL A LA POBLACIÓN DE SAN PEDRO","value":76862309275},
                    {"name":"SERV. DE ATEN. INTEG. A LA  POBLACIÓN DE CORDILLERA","value":71820918883},
                    {"name":"SERV. DE ATEN.INT. A POBLACIÓN DE GUAIRÁ","value":64350167565},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN DE CAAGUAZÚ","value":91121445637  },
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN DE CAAZAPÁ","value":44879893001},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN DE ITAPÚA","value":83796345505},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN DE MISIONES","value":60162459099},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN DE PARAGUARÍ","value":80022221482},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN DE ALTO PARANÁ","value":99364223514},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN DE CENTRAL","value":93020175862},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN DE ÑEEMBUCU","value":39663885233},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN DE AMAMBAY","value":36170787035},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN DE CANINDEYÚ","value":41038223737},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN DE PDTE HAYES","value":31817105807},
                    {"name":"SERV. DE ATEN. INT.  A  POBLACIÓN DE BOQUERÓN","value":18572802435},
                    {"name":"SERV. DE ATEN. INT. A  POBLACIÓN DE ALTO PARAGUAY","value":15751440557},
                    {"name":"SERV. DE ATEN. INT. A  POBLACIÓN DE LA CAPITAL","value":62949382930},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN DE VILLETA","value":9858808771},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN EN H. BARRIO OBRERO","value":54023415876},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN EN H. DE ITÁ","value":14410845974},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN EN EL H.D. ITAUGUA","value":7718848600},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN EN EL H. DE LUQUE","value":59581707293},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN EN H. DE ÑEMBY","value":28017606425},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN EN EL H. SAN LORENZO","value":46198527480},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN EN EL H. DE VILLA ELISA","value":19650516516},
                    {"name":"SERV. DE ATENCIÓN INTEGRAL A LA POB. EN EL H. PEDIÁTRICO","value":41073409576},
                    {"name":"SERV. DE ATEN.INT. A POBLAC. EN EL HOSP. NACIONAL","value":228983333498},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN EN EL H. STA. ROSA DEL A.","value":27993536329},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN EN EL H. LAMBARÉ","value":34456407466},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN EN EL H.FDO DE LA MORA","value":26054885889},
                    {"name":"SERV. DE ATENC. INT. A POBLACIÓN EN EL H. LIMPIO","value":28906653957},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN EN EL H. LOMA PYTA","value":24330118123},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN EN EL H. CAPIATÁ","value":36051895388},
                    {"name":"SERV. DE ATEN. INT. A POBLACIÓN EN EL H.M.R.A.","value":28053613342},
                    {"name":"SERV. DE ATEN. EN EL INST. NAC. DE ABLACIÓN Y TRASP.","value":4532859515},
                    {"name":"ATEN. INT. A POBLACIÓN H. INDÍGENA SAN ROQUE G. SC.","value":7308929146},
                    {"name":"ATEN. DE AFECCIONES CARDIOVAS. H. SAN JORGE","value":25417607276},
                    {"name":"ATENCIÓN A POBLAC. PROG. NAC. PREV. CARDIOVASCULAR","value":2026338844},
                    {"name":"ATENCIÓN INT. EN SALUD RESPIRATORIA - INERAM","value":43151723264},
                    {"name":"ATENCIÓN DE POBLAC. CON ENFERM. INFECCIOSAS IMT","value":32544128372},
                    {"name":"ATENCIÓN A LA POBLACIÓN CON ENFERMEDADES ONCOLÓGICAS-INCAN","value":351742128125},
                    {"name":"ATENC. DE POBLAC. C/ ENFERM. ONCOLOG. DE CUELLO UTERINO","value":1219697453},
                    {"name":"ATENC. INT. DEL QUEMADO CENQUER","value":26302722636},
                    {"name":"ATEN. INT. EN EL CENT. NAC. DE CONTROL DE ADICCIONES","value":9695223179},
                    {"name":"ATENCION A PACIENTES RENALES INST. NAC. DE NEFROLOGÍA","value":11677155387},
                    {"name":"ATENCIÓN A LAS URGENCIAS MÉDICO, QUIRURGICAS - H . TRAUMA","value":143931084864},
                    {"name":"SERVICIO DE PROVISIÓN DE LECHE MATERNA - BANCO DE LECH","value":87372284},
                    {"name":"ATENCIÓN A LA POBLACIÓN CON ENFERMEDAD MENTAL - H. PSIQUIÁTR","value":32934753373},
                    {"name":"ATENCIÓN INTEGRAL A LA POBLACIÓN MAT. INF. SAN PABLO","value":58552851083},
                    {"name":"ATENCIÓN INTEGRAL A POBLACIÓN MAT. INF. CRUZ ROJA PYA.","value":23361284705},
                    {"name":"ATENCIÓN INTEGRAL A POBLACIÓN MAT. INF. STMA.TRINIDAD","value":30623703444},
                    {"name":"CAPACITACIONES, FORMACIÓN E INVESTIGACIÓN EN EL IMT","value":235504370},
                    {"name":"CAPACITACIONES, FORMACIÓN E INVESTIGACIÓN EN EL H. NACIONAL","value":1295704508},
                    {"name":"CAPACITACIÓN, FORMACIÓN E INVESTIGACIÓN EN EL H. PEDIÁTRICO","value":23900740845},
                    {"name":"CAPACITACIÓN, FORMACIÓN E INVESTIGACIÓN EN EL INERAN","value":180090481},
                    {"name":"CAPACITACIÓN, FORMACIÓN E INVESTIGACIÓN EN EL CENQUER","value":745348726},
                  ]
                },{ 
                  "name": "SERVICIOS DE APOYO Y DIAGNÓSTICO P/ LA MEJORA EN LA ATENCIÓN" ,
                  "children": [
                      {"name":"OBTENCIÓN, PRODUCCIÓN Y SUMINISTROS DE SANGRE","value":  6500188428 },
                      {"name":"HABILITACIÓN Y CONTROL DE LABORATORIOS DE ANÁLISIS CLÍNICOS","value":16344856465},
                      {"name":"SERVICIOS LABORATORIALES","value":    7025618152 },
                      {"name":"GESTIONES INTEGRADAS PARA LA PROVISIÓN DE BIOLÓGICOS","value":190399109118},
                      {"name":"INTERVENCIONES EN CASOS EMERG. EXTRAHOSPITALARIAS","value":59316980535},
                      {"name":"PROV. DE MEDICAMENTOS, INSUMOS, INST.Y EQUIPOS","value":492826057540},
                  ]
              },
              { 
                "name": "AUMENTO DE LA COBERTURA EN LA ATENC. A ENFERM. ESPECIALES" ,
                "children": [
                    {"name":"PROMOCIÓN Y TRATAMIENTO DE FIBRÓSIS QUÍSTICA Y RETARDO MENTA","value":584427801},
                    {"name":"MEDICAMENTOS PARA ENFERMEDADES LISOSOMALES","value":6440000000},
                    {"name":"ATENCIÓN INTEGRAL A LA POB. CON ENFERMEDADES OCULARES","value":3662259656},
                    {"name":"ATENCIÓN INTEGRAL DE POBLACIÓN CON ENFERMEDADES BUCALES","value":4397466098},
                    {"name":"ENTREGA DE INSUMOS PARA PERSONAS CON OSTOMÍA","value":2097600000},
                    {"name":"ASISTENCIA A LA POBLACIÓN (ANATOMÍA Y SALUD MENTAL)","value":484826985},
                    {"name":"CAPACITACIONES DE RR.HH. DEL MSPYBS.","value":5960514798},
                    {"name":"ENTREGA DE MEDICAMENTOS, KIT DE PARTO Y ANTICONCEPTIVOS","value":16210434870},
                ]
            },
            { 
              "name": "SEGURIDAD ALIMENTARIA NUTRICIONAL HUMANA MEJORADA" ,
              "children": [
                  {"name":"VIGILANCIA ALIMENTARIA NUTRICIONAL","value":22085169959},
                  {"name":"SENSIBILIZACIÓN EN TEMAS DE ALIMENTACIÓN Y NUTRICIÓN","value":3913924211},
                  {"name":"ASISTENCIA ALIMENTARIA NUTRICIONAL","value":102858928891},

              ]
          },
          { 
            "name": "MEJORA EN EL BIENESTAR SOCIAL P/ PER. EN SITUAC. DE RIESGO" ,
            "children": [
                {"name":"ATENCIÓN INTEGRAL A LA POBLACIÓN ADULTA MAYOR","value":1913599016},
                {"name":"ATENCIÓN INTEGRAL A LA POBLACIÓN EN SITUACIÓN DE RIESGO","value":25494285385},
                {"name":"REGISTRO Y ACREDITACIÓN DE ENTIDADES SIN FINES DE LUCRO","value":960742374},
            ]
        },
        { 
          "name": "ACCESO A LOS SERV. DE AGUA POTABLE Y SANEAMIENTO AMBIENTAL" ,
          "children": [
              {"name":"GESTIÓN ADMINISTRATIVA","value":46458721500},
              {"name":"CONSTRUCCIÓN SEMB. OPORT.- 480 SISTEMA DE AGUA Y SANEAM.","value":3528327466},
              {"name":"SP ABAST.DE AGUA. POT.Y SAN.BAS PEQ.COM.RURAL E INDI(FOCEM)","value":12359746995},
      
              {"name":"CONSTRUCCIÓN SIST.AGUAPOT.Y.SAN.PEQ.CIUD.COM.RURAL.E.INDIG.","value":104806242103},
              {"name":"ACCIONES DE VIGILANCIA DE CALIDAD AMBIENTAL","value":20485126104},
              
          ]
      }
                
               
                
            ]
},
{
  "name":"Partidas no asignables a Programas",
  "value":"4565004915"    
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
  desarrollo:[{
    data:{
      labels: ["Programa Central","Programa Sustantivo", "Partidas no asignables a Programas"],
      datasets: [
        {
          data: [   13, 87 ],
          backgroundColor: ["orange", "#FAFF0E",'blue'],
          hoverBackgroundColor: ["orange", "#FAFF0E",'blue']
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
    nombre:"MINISTERIO DE DESARROLLO SOCIAL",
    programas:[{
      nombre:"Programa Central",
      monto: "Gs. 63.000.224.308  "
    },{
      nombre:"Misional",
      monto:"Gs. 17.176.470.340"
    },{
      nombre:"Administrativo",
      monto:"Gs.   52.683.444.138"
    },
    {
      nombre:"Proyecto",
      monto:"Gs. 0 "
    },{
      nombre:"Programa sustantivo",
      monto:"Gs. 461.872.756.263"
    },{
      nombre:"Partidas no asignables a Programas",
      monto:"Gs. 0"
    },
    {
      nombre:"Proyecto",
      monto:"Gs. 0"
    },{
      nombre:"Actividad",
      monto:"Gs. 461.872.756.263"
    }
  ],
  presupuestoTotal: "Gs. 524.872.980.571",
  
  },
 
    
  },{
    treeMapData : {
      'name':"MINISTERIO DE DESARROLLO SOCIAL",
      'children':
      [{
      "name":"Programa Central",
      "children": [
                  { 
                      "name": "Actividades Administrativas" ,
                      "children": [
                          {"name":"ACTIVIDADES CENTRALES ADMINISTRATIVAS","value":  52683444138 },
                          
                          
                      ]
                  },
                  {
                      "name":"Actividad Misional",
                      "children": [
                          {"name":"ATENCION SOCIAL Y COMEDORES COMUNITARIOS","value":  10316780170 },
                          {"name":"ASISTENCIA A PESCADORES POR VEDA PESQUERA","value":  6859690170 },
                          
                          
                              
                      ]
                  },
                 /*  {
                      "name":"Proyecto",
                      "children": [
                          {"name":"008-SP PROGRAMA DE DESARROLLO INFANTIL TEMPRANO (DIT)","value":  120322934005 },
                          {"name":"012-INVESTIGACIÓN ,EDUC. Y BIOTECNOLOGÍA APLICADAS A LA SALUD","value":8466618649},

                      ]
                  }, */
                 
              ]
  }
      ,{
    "name":"Programa Sustantivo",
    "children": [
                { 
                    "name": "PROTECCION SOCIAL A FAMILIAS EN SITUACION DE POBREZA" ,
                    "children": [
                        {"name":"PROTECCION SOCIAL A FAMILIAS DE TEKOPORA","value":415595076232}
                    ]
                },{
                  "name":"INCLUSIÓN ECONÓMICA DE FAMILIAS EN SITUACIÓN DE POBREZA",
                  "children":[
                    {"name":"FOMENTO DE MICROEMPRENDIMIENTOS A PARTICIPANTES DE TENONDERA","value":  37132748096 },
                    
                ]
            },
            { 
              "name": "PROMOCION SOCIAL" ,
              "children": [
                  {"name":"REGULARIZACIÓN DE TERRITORIOS SOCIALES","value":9144931935},
                  

              ]
          },
         
                
               
                
            ]
},
/* {
  "name":"Partidas no asignables",
  "value":"4565004915"    
} */]}},{resumen:[
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






// OOOOOOLAAAA //

/* {
  treeMapData : {
    'name':"MINISTERIO DE EDUCACIÓN Y CIENCIAS",
    'children':
    [{
    "name":"Programa Central",
    "children": [
                { 
                    "name": "Actividade Administrativa" ,
                    "children": [
                        {"name":"GESTIÓN ADMINISTRATIVA INSTITUCIONAL","value":  825610338799 },
                        
                    ]
                },
                {
                    "name":"Actividad Misional",
                    "children": [
                        {"name":"BRINDAR SERVICIO EDUCATIVO EN EDUCACIÓN INICIAL","value":  23733554561},
                        {"name":"BRINDAR SERVICIO EDUCATIVO EN PRIMER Y SEGUNDO CICLO DE EEB","value":  3788337220084 },
                        {"name":"BRINDAR SERVICIO EDUCATIVO EN EL TERCER CICLO DE LA EEB Y EM","value":  1446246278653 },
                        {"name":"ATENCION A EDUCACION SUPERIOR Y CIENCIAS","value":  55655897369},
                        {"name":"FORMACION DE MUSICOS EN LOS DISTINTOS GENEROS DE MUSICAL","value":  15378406129},
                        {"name":"BRINDAR SERV.EDUC.A JOVENES Y ADULTOS DE 15 AÑOS Y MAS","value":  335.486421492 },
                        {"name":"BRINDAR SERVICIO EDUCATIVO EN CENTROS REGIONALES DE EDUC","value":  80.117516114 },
                        {"name":"SERV.EDUC.A ESTUDIANTES C/NECESIDADES ESPECIFICAS DE APOYO","value":  18766116131},
                        {"name":"PROMOVER EL TALENTOY LA FORMACION ARTISTICA","value":  964526200 },
                        {"name":"BRINDAR ATENCION A INSTITUCIONES DE EDUC ESCOLAR INDIGENA","value":  4937942157},
                        {"name":"OTORGAR BECAS PARA EDUCACION SUPERIOR","value":  7837900000 },
                        {"name":"PLANIFICACION Y MONITOREO DE LA POLITICA EDUCATIVA NACIONAL","value":  377987871},
                        {"name":"DIFUNDIR LA INVESTIGACION EDUCATIVA","value":61750000},
                        {"name":"EVALUAR LA CALIDAD EDUCATIVA","value":3419909678},
                        {"name":"PROMOVER POLITICAS P/ EL DESARROLLO DE EDUCACION Y CIENCIAS","value":  2065696144}
                       

                        
                    ]
                },
                {
                    "name":"Proyecto",
                    "children": [
                        {"name":"FOMENTO Y APOYO OPERAT. PARA LA EJEC. DE PROY. DEL MEC","value":7840145062},  
                        {"name":"DIFUSIÓN DISEÑO DE LA ESTRATEGIA DE TRANSFORMACIÓN EDUC","value":  11635907321}, 
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
}]}}
 */

