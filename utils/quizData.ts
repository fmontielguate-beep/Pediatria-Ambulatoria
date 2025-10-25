
import { Question } from '../types';

export const questions: Question[] = [
    {
        id: 1,
        question: "Con relación a la marcha podemos afirmar lo siguiente:",
        options: [
            "Es un proceso relacionado al desarrollo del cerebelo",
            "Comienza alrededor de los 18 meses",
            "Alcanzará su madurez hasta los 5 años de edad.",
            "Es uno motivo foco frecuente de consulta ortopédica.",
            "Está íntimamente ligado con el desarrollo Psicosocial."
        ],
        correctAnswer: 2
    },
    {
        id: 2,
        question: "Cuál de los siguientes NO influye sobre el desarrollo de la Marcha",
        options: [
            "El grado de laxitud",
            "Coordinación del niño",
            "Tono muscular",
            "Postura erecta del tronco",
            "Deben realizar distancias cortas."
        ],
        correctAnswer: 4
    },
    {
        id: 3,
        question: "Cuál de las siguientes es Incorrecta en relación al pie plano:",
        options: [
            "Hay componente familiar relacionado.",
            "Su corrección se puede hacer después de los 3 años.",
            "Conlleva una marcha torpe",
            "Depende del panículo adiposo",
            "Influye la laxitud ligamentosa"
        ],
        correctAnswer: 1
    },
    {
        id: 4,
        question: "Dentro los primeros 18-24 meses el niño presentara genu varo y posterior genu valgo como desarrollo normal.",
        options: ["Falso", "Verdadero"],
        correctAnswer: 1
    },
    {
        id: 5,
        question: "Con relación Alteraciones Rotacionales “el niño mete los pies” Afirmamos lo siguiente:",
        options: [
            "Es una fase fisiológica del crecimiento durara hasta llegar a los 10 años.",
            "Puede ser una postura antialgica",
            "La rotación interna se debe anteversión femoral",
            "Los cóndilos femorales tienen un ángulo de 50° más.",
            "La articulación más afectada es la del tobillo."
        ],
        correctAnswer: 2
    },
    {
        id: 6,
        question: "Con relación Alteraciones de los Dedos, Clinodactilia afirmamos lo siguiente.",
        options: [
            "Es una angulación interfalangica mayor de 10°.",
            "Se puede iniciar su corrección en los lactantes debido a su laxitud.",
            "Generalmente hay componente familiar",
            "Pueden estar a otras anormalidades sistémicas",
            "Si se produce dolor por su posición contra el calzado se propone cirugía después de los 2 años."
        ],
        correctAnswer: 2
    },
    {
        id: 7,
        question: "Con relación a la Sindáctilas es Incorrecto lo Siguiente:",
        options: [
            "Es la ausencia o separación parcial/total, completa e incompleta de los dedos.",
            "Sindáctila del pie que afecta partes blandas y parcial debe evaluarse tratamiento debido continuara deformando el pie.",
            "Se recomienda hacer estudio radiológico sobre los 10-12 meses para valorar el grado de afectación ósea.",
            "Antes del año de vida es innecesario realizar estudios de imágenes.",
            "Sindáctila generalmente no origina ninguna alteración funcional."
        ],
        correctAnswer: 1
    },
    {
        id: 8,
        question: "En relación a la displasia de cadera afirmamos lo siguiente:",
        options: [
            "Se puede hacer radiografía de cadera a partir del 4 mes para hacer el diagnóstico.",
            "El tratamiento correctivo No quirúrgico se puede hacer en los primeros 6 meses.",
            "El ultrasonido es un método diagnóstico valido después de los 6 meses.",
            "Las maniobras Barlow y Ortolani evidencian la luxación del fémur y pubis",
            "Un factor de riesgo es un parto Distócico de larga duración"
        ],
        correctAnswer: 1
    },
    {
        id: 9,
        question: "Dentro del proceso de micción normal afirmamos lo siguiente:",
        options: [
            "El esfinter uretral interno contiene principalmente receptores M1 y M2",
            "El musculo Detrusor esta inervado principalmente por fibras parasimpatica.",
            "En la fase de vaciamiento hay activación via simpatico",
            "En la fase de llenado hay relajación via parasimpatico",
            "El sistema parasimpatico activan receptores adrenergicos."
        ],
        correctAnswer: 1
    },
    {
        id: 10,
        question: "Dentro de las causas de incontinencia diurna neurogena, esta la siguiente:",
        options: [
            "Vejiga hiperactiva",
            "Tumor espinal",
            "Valvas de uretra posterior",
            "Vegija Hipoactiva",
            "Micción disfuncional"
        ],
        correctAnswer: 1
    },
    {
        id: 11,
        question: "Comorbiidades para enuresis son las siguientes, EXCEPTO:",
        options: [
            "Esteñimiento",
            "TDAH",
            "Alteraciones psicologicas",
            "Reflujo vesicoureteral",
            "Retención por mucho tiempo"
        ],
        correctAnswer: 3
    },
    {
        id: 12,
        question: "Los presentación de micción disfuncional son los siguientes:",
        options: ["Pielonefritis a repetición", "Infección urinaria baja", "Dolor lumbar", "Retención urinaria"],
        correctAnswer: 1
    },
    {
        id: 13,
        question: "En la etiología de micción disfuncional se incluyen los siguientes factores, excepto:",
        options: ["Hereditarios", "Madurativos", "Irritativos", "Conductuales", "Degenerativos"],
        correctAnswer: 4
    },
    {
        id: 14,
        question: "En relación a Infección Urinaria alta o complicada, afirmamos lo siguiente:",
        options: [
            "Se diagnótica con urocutivo positivo y EGO patológico",
            "Se asocia a micción disfuncional",
            "Su causa puede ser vejiga neurogena",
            "Se presenta principalmente con frecuencia, urgencia y disuria",
            "El germen mas comun es E. Coli."
        ],
        correctAnswer: 2
    },
    {
        id: 15,
        question: "En relación a ITU en neonatos ¿Cual de los siguientes No es germen común?",
        options: [
            "Estafilococo Coagulasa negativa",
            "Estreptococo del Grupo В",
            "Estafilococo Saprofiticus",
            "Estafilococo Aureus"
        ],
        correctAnswer: 2
    },
    {
        id: 16,
        question: "En relación a la toma de orina es Incorrecto afirmar los siguiente:",
        options: [
            "Todo niño continente debe ser tomada por chorro medio",
            "El urocultivo con bolsita solo tiene validez del 50% para el diagnóstico",
            "Si se toma por sonda la muestra es positiva con mas de 100,000 UFC",
            "La bolsita sirve principalmente por su valor predictivo negativo",
            "La muestra debe entregarse procesarse durante la primera hora."
        ],
        correctAnswer: 1
    },
    {
        id: 17,
        question: "¿Cual de las siguientes NO es una malformación del riñón o vias Urinarias?",
        options: ["Vejiga Neurogena", "Mega Ureter", "Riñon Multiquistico", "Riñon Poliquistico", "Ureterocele"],
        correctAnswer: 0
    },
    {
        id: 18,
        question: "¿Lo mecanismo protectores para evitar ITU son los siguientes, EXCEPTO?",
        options: [
            "Peptidos antimicrobianos (moco)",
            "IgA secretora",
            "Proteina de Tamm-Horsfall",
            "pH urinario alcalino",
            "Flujo unidireccional"
        ],
        correctAnswer: 3
    },
    {
        id: 19,
        question: "¿Cual de los siguientes NO es un parametro para el diagnóstico de ITU?",
        options: [
            "Esterasa Leucocitaria",
            "Cilindros Leucocitarios",
            "Leucitos >5xC",
            "Nitritos Negativos",
            "Sangre/Eritrocitos >4xC"
        ],
        correctAnswer: 3
    },
    {
        id: 20,
        question: "¿Cual de los siguientes es un signo de infección urinara baja?",
        options: ["Polaquiuria", "Dolor lumbar", "Fiebre", "Irritabilidad", "Nauseas y Vómitos"],
        correctAnswer: 0
    },
    {
        id: 21,
        question: "La Piuria puede ser por las siguientes causas, EXCEPTO:",
        options: ["Vulvovaginitis", "Salmonelosis", "Apendicitis", "Nefrolitiasis", "Enfermedad de transmisión sexual"],
        correctAnswer: 1
    },
    {
        id: 22,
        question: "Las siguientes son indicaciones de solicitar un uretrocistograma, EXCEPTO:",
        options: [
            "ITU en el primer mes de vida",
            "Alteración renal visto en ultrasonido",
            "Tercera infección urinaria febril",
            "Sospecha de Valvas de Uretra posterior",
            "Defectos del Tubo Neural (mielomeningocele)"
        ],
        correctAnswer: 2
    },
    {
        id: 23,
        question: "Si encuentra Hematología con Hb baja, Glóbulos rojos elevados, RDW normal, el diagnóstico más probable es?",
        options: [
            "Anemia Fisiologica.",
            "Anemia Ferropenica.",
            "Talasemia.",
            "Anemia Megaloblastica.",
            "Anemia No Megaloblastica."
        ],
        correctAnswer: 2
    },
    {
        id: 24,
        question: "Cual de los siguientes enunciados sobre el hemograma nos describe mejor la desviación a la izquierda?",
        options: [
            "Leucopenia con predominio de linfocitos",
            "Leucocitosis con predominio de linfocitos y monocitos",
            "Leucopenia con predominio celulas maduras",
            "Leucocitosis con prdominio de polimorfonucleares y presencia de celulas inmaduras como cayados o mielocitos",
            "Pancitopenia con presencia de celulas inmaduras."
        ],
        correctAnswer: 3
    },
    {
        id: 25,
        question: "Respecto al hemograma señale el enunciado INCORRECTO:",
        options: [
            "La hemoglobina es el parametro para definir anemia.",
            "La hemoglobina corpuscular media nos informa el contenido de hemoglobina de los hematies",
            "La concentración de la hemoglobina corpuscular media se encuentra disminuida en pacientes con esferocitosis",
            "El recuento de reticulosistos nos ayuda a clasficar la anemia en generativa y arregenerativa",
            "De las anemias macrociticas la anemia megaloblastica por déficit de B12 o ácido fólico en la mas frecuente en la infancia."
        ],
        correctAnswer: 2
    },
    {
        id: 26,
        question: "Las enzimas musculares CPK se elevan cuando hay un insulto a nivel de:",
        options: [
            "Riñones, suparrenales y páncreas",
            "Cerebro, corazón y musculo esqueletico",
            "Riñones, higado y vesicula biliar",
            "Hueso, corazón y pulmones",
            "Higado, bazo y páncreas."
        ],
        correctAnswer: 1
    },
    {
        id: 27,
        question: "Respecto al examen de orina señale el enunciado INCORRECTO:",
        options: [
            "La piuria siempre se relaciona con inflamación de la via urinaria.",
            "Es importante ver el pH si es mayor o menor de 5 para orientar a afecciones como acidosis tubular, alcalosis metabolica.",
            "La hipostenuria nos sugiere que el paciente puede cursar con secreción inadecuada de hormono antidiuretica.",
            "La presencia de glucosuria con hiperglicemia nos puede orientar a síndrome de Fanconi.",
            "La hipoestunia en un paciente con poliuria nos sugiere descartar diabetes insípida."
        ],
        correctAnswer: 2
    },
    {
        id: 28,
        question: "En relación a hiperleucocitosis y reacción leucemoide, afirmamos lo siguiente:",
        options: [
            "En la Hiperleucocitosis debe haber mas de GB 50,000",
            "Hiperleucocitosis se presenta en procesos infecciosos",
            "Reacción leucomoide no hay celulas inmaduras",
            "La Tosferina se presenta reacción hiperleucocitosis.",
            "La reacción leucemoide es mayor a GB 100,000."
        ],
        correctAnswer: 2
    },
    {
        id: 29,
        question: "En relación a la Clasificación de la Neutropenia, Afirmamos lo siguiente",
        options: [
            "Menor de 100 inumnosupreso",
            "Menor de 2,500 leve",
            "Menor de 1,000 moderada",
            "Menor de 300 grave",
            "Mayor a 2,500 normal"
        ],
        correctAnswer: 2
    },
    {
        id: 30,
        question: "De los receptores de la tos afirmamos los siguiente, EXCEPTO:",
        options: [
            "Hay receptores específicos de tos y los irritativos activados por noxas",
            "Se encuentran conectados por ramas del nervio vago",
            "Se estimulan por irritación química, estimulación táctil y fuerzas mecánicas.",
            "Se encuentran receptores en la pleura, revestimiento corazón, esófago.",
            "Activación de receptores a nivel del diafragma para llevar el arco reflejo de la tos."
        ],
        correctAnswer: 3
    },
    {
        id: 31,
        question: "El arco reflejo este compuesto por 5 componentes cual NO es uno de ellos:",
        options: ["Vía Eferente", "Respuesta Motora", "Sistema nervioso periférico", "Vía aferente", "Estimulo Receptor."],
        correctAnswer: 2
    },
    {
        id: 32,
        question: "De los siguientes cual NO es un antitusivo:",
        options: ["Dextrometorfano", "Guayacolato", "Levodropropizina", "Codeina", "Cloperastina"],
        correctAnswer: 1
    },
    {
        id: 33,
        question: "Cuál de los siguientes NO es un mucolitico:",
        options: ["Carboximetilcisteina", "Alfa Dornasa", "SSN", "Acetilcesteina", "Guayacolato"],
        correctAnswer: 2
    },
    {
        id: 34,
        question: "En qué áreas del organismo se encuentran los receptores de tos excepto",
        options: ["Senos paranasales", "Canales auditivos", "Hígado y Páncreas", "Esófago", "Revestimiento cardiaco"],
        correctAnswer: 2
    },
    {
        id: 35,
        question: "El Centro de la tos a nivel central se encuentra en:",
        options: ["Cerebelo", "Cuerpo calloso", "Hipotálamo", "Corteza cerebral", "Bulbo Raquídeo"],
        correctAnswer: 4
    },
    {
        id: 36,
        question: "Que nervios participan como vía aferente para que se produzca el reflejo Tusígeno",
        options: ["Nervio Vago", "Nervio Trigémino", "Nervio Nasofaringeo", "Nervio Hipogloso", "Nervio Frenico"],
        correctAnswer: 3
    },
    {
        id: 37,
        question: "Los siguientes son las fases de la tos, EXCEPTO:",
        options: ["Fase inspiratoria", "Fase Central", "Fase Compresiva", "Fase Espiratoria"],
        correctAnswer: 1
    },
    {
        id: 38,
        question: "De la fase Compresiva de la tos usted puede afirmar lo siguiente:",
        options: [
            "Inspiración profunda y seguida de la apertura de la glotis",
            "Se inicia con la apertura brusca de la glotis",
            "El aire expulsado es de manera explosiva",
            "Disminuye la resistencia de las vías aéreas y aumenta el volumen pulmonar",
            "Comienza con el cierre de la glotis, contracción activa de los músculos espiratorios"
        ],
        correctAnswer: 4
    },
    {
        id: 39,
        question: "Usted define como tos crónica a un paciente pediátrico que presenta tos de:",
        options: [
            "Mayor de 2 semanas de evolución",
            "Entre 2 y 4 semanas de evolución",
            "Mayor de 4 meses de evolución",
            "Mayor de 4 semanas de evolución",
            "Mayor de 3 meses de evolución"
        ],
        correctAnswer: 3
    },
    {
        id: 40,
        question: "Con respecto al tratamiento de la tos usted puede afirmar lo siguiente Excepto:",
        options: [
            "No se debe de suprimir la tos",
            "En la tosferina el uso de antitusivos puede estar indicado",
            "El uso de antibióticos debe de indicarse siempre que hay fiebre y moco",
            "El uso de mucoliticos es cuestionable",
            "En tos inespecífica puede usarse esteroides inhalados y antibiótico como amoxicilina-Ac. Clavulanico."
        ],
        correctAnswer: 2
    },
    {
        id: 41,
        question: "De los dientes natales podemos afirmar lo siguiente:",
        options: [
            "Su color generalmente es blanco",
            "Contienen esmalte y dentina hipoplasicos",
            "Pueden aparecer hasta el año de vida",
            "Su localización más común es a nivel de maxilar",
            "Su raíz está bien definida."
        ],
        correctAnswer: 1
    },
    {
        id: 42,
        question: "Los nódulos de Bohn se caracterizan por:",
        options: [
            "Elevación quística de 0.5 a 3 mm de diametro",
            "Pueden ser acumulaciones de queratina",
            "Son restos de tejido glandular mucoso.",
            "Son de color aperlado",
            "Pueden producir lesión al pezón de la madre."
        ],
        correctAnswer: 2
    },
    {
        id: 43,
        question: "Con relación a las Perlas de Epstein podemos afirmar lo siguiente.",
        options: [
            "Pueden ser islas de tejido epitelial atrapados durante la fusión de los procesos maxilares.",
            "El tratamiento es suavizar los bordes incisales ásperos.",
            "Generalmente se ubican en regiones palatinas y vestibulares.",
            "Es un crecimiento quístico consistente en la separación del folículo dental.",
            "Son inclusiones de restos de lámina dentaria."
        ],
        correctAnswer: 0
    },
    {
        id: 44,
        question: "Con relación a las caries podemos afirmar lo siguiente, EXCEPTO:",
        options: [
            "Se forman por malos hábitos alimenticios",
            "Microorganismos en cavidad oral",
            "Higiene oral remoción del biofilm dental",
            "Los microorganismos se localizan principalmente en el esmalte.",
            "Sustratos de la dieta."
        ],
        correctAnswer: 3
    },
    {
        id: 45,
        question: "Con relación a Lengua Geográfica: EXCEPTO.",
        options: [
            "También se le conoce como eritema migrante.",
            "Es una lesión inflamatoria descamativa de papilas filiformes",
            "Pueden presentar dolor e irritación",
            "La sensibilidad aumenta con alimentos como cítricos y sodas.",
            "El tratamiento con esteroides puede mejor la sensibilidad."
        ],
        correctAnswer: 4
    },
    {
        id: 46,
        question: "Los dientes natales/neonatales en recién nacido, pueden provocar:",
        options: ["Perlas de Epstein", "Quiste de lámina dentaria", "Úlcera de Riga Fede", "Épulis congénito", "Ninguna es correcta"],
        correctAnswer: 2
    },
    {
        id: 47,
        question: "Área donde se encuentra Nódulos de Bohn:",
        options: ["Lengua", "Carrillos", "Paladar blando", "Rebordes gingivales", "Todas son correctas"],
        correctAnswer: 3
    },
    {
        id: 48,
        question: "¿Cuál es el criterio clínico para determinar Anquiloglosia?",
        options: [
            "Frenillo lingual corto",
            "Restricción de movimiento",
            "Inserción próxima al vértice de lengua",
            "Problemas de lactancia",
            "Todas son correctas"
        ],
        correctAnswer: 4
    },
    {
        id: 49,
        question: "La caries dental es la enfermedad mas frecuente en el paciente pediátrico, su multifactorialidad depende de:",
        options: ["Huésped", "Microflora", "Sustrato", "Tiempo", "Todas son correctas"],
        correctAnswer: 4
    },
    {
        id: 50,
        question: "Entre los síntomas relacionados con la caries dental profunda NO encontramos:",
        options: ["Irritabilidad", "Salivación", "Disociación", "Alteración del sueño", "Sialorrea"],
        correctAnswer: 2
    },
    {
        id: 51,
        question: "Entre los factores que influyen en la erupción dentaria, es INCORRECTO lo siguiente:",
        options: ["Factores genéticos", "Factores higiénicos", "Factores sistémicos", "Factores locales", "Factores ambientales"],
        correctAnswer: 1
    },
    {
        id: 52,
        question: "Cual de los siguientes signos y/o sintomas NO es una bandera roja de problemas de alimentación en la infancia:",
        options: [
            "Falla para crecer",
            "Rechazo de un tipo especifico de alimento",
            "Atopia y eccema",
            "Disfagia",
            "Diarrea con sangre en las evacuaciones."
        ],
        correctAnswer: 1
    },
    {
        id: 53,
        question: "NO es caracteristica del niño altamente selectivo la siguiente:",
        options: [
            "Rechazan alimentos consistentemente debido a sabor, textura, olor o aspecto.",
            "El niño se torna visiblemente ansioso si se le trata de dar alimentos",
            "El niño es alerta, activo e inquisitivo pero rara vez muestra signos de hambre.",
            "Tiene otros trastornos sensoriales fecuentemente presentes."
        ],
        correctAnswer: 2
    },
    {
        id: 54,
        question: "Con respecto a la Neofobia, podemos decir lo siguiente:",
        options: [
            "Es un comportamiento normal en el primer año de vida y su pico maximo de incidencia es entre los 18-24 meses.",
            "Es un trastorno de alimentación grave.",
            "Los niños que no acoplan nuevas comidas visualmente nunca las aceptarán.",
            "Inicia alrededor de los 3 y 4 años y persiste hasta la adolescencia."
        ],
        correctAnswer: 0
    },
    {
        id: 55,
        question: "El padre o cuidador responsable usualmente hacen lo siguiente:",
        options: [
            "Ignoran las señales de hambre del niño.",
            "Dan premios o recompensas al niño para que coman.",
            "Ponen limites sobres las comidas, hablan posteriormente sobre la alimentación.",
            "Ofrecen variedad de comidas al niño para que el escoja y satisfacen todas sus demandas."
        ],
        correctAnswer: 2
    },
    {
        id: 56,
        question: "En el momento de alimentar a un niño usted le recomendaria a la madre lo siguiente:",
        options: [
            "Presionar al niño para que se como todo lo que hay en el plato.",
            "Si no come ofreca una bebida como leche posterior a la comida.",
            "Darle de comer en la boca aunque ya tenga mas de dos años.",
            "Limitar el tiempo de comida a 20-30 minutos",
            "Ofrecer una recompensa, ya que tiene que ganar peso."
        ],
        correctAnswer: 3
    },
    {
        id: 57,
        question: "En Relación a la amblipía, afirmamos lo siguiente:",
        options: [
            "Es Bilateral",
            "Su resolución es espontanea.",
            "Puede ser Exanopsia o refractiva",
            "Mayor en asiaticos que en latinoamericanos.",
            "Esta asociado a Astigmatismo"
        ],
        correctAnswer: 2
    },
    {
        id: 58,
        question: "Las causas de Leucocoria son las siguientes, EXCEPTO",
        options: ["Cataratas", "Despendimiento de retina", "Infeccioso Toxoplasmosis", "Enfermead de Coats", "Infección por CMV"],
        correctAnswer: 4
    },
    {
        id: 59,
        question: "Dentro de los Errores Refractivos estan los siguientes, EXCEPTO:",
        options: ["Miopía", "Nictalopía", "Astigmatismo", "Hipermetropia", "Anisometropía"],
        correctAnswer: 1
    },
    {
        id: 60,
        question: "Los siguiente son signos clínicos de Glaucoma Congenito",
        options: ["Fotofoia", "Epifora", "Opacidad Corneal", "Exoftalmos", "Megalocórnea"],
        correctAnswer: 3
    },
    {
        id: 61,
        question: "Las Causas mas comunes de Ojo rojo Son, EXCEPTO.",
        options: ["Orzuelo", "Conjuntivitis", "Queratitis", "Celulitis preseptal", "Dacriocistitis"],
        correctAnswer: 0
    },
    {
        id: 62,
        question: "En relación al test Bruckner, afirmamos lo siguientes: EXCEPTO:",
        options: [
            "Util para el diagnóstico de Retinoblastoma",
            "Util para evaluar el segmento anterio y posterior",
            "Util para evaluar astigmatismo",
            "Util para evaluar ambliopia",
            "Util para evaluar estrabismo"
        ],
        correctAnswer: 2
    },
    {
        id: 63,
        question: "Paciente femenino de 8 meses de edad... Cual seria la impresión clínica de este paciente?",
        options: ["Bronconeumonia", "Resfriado Común", "Bronquiolitis", "Sinusitis aguda"],
        correctAnswer: 1
    },
    {
        id: 64,
        question: "Que tratamiento seria el mas recomendado para el paciente?",
        options: ["Amoxicilina a 50mg/kd/dia", "Loratadina", "Acetaminofen", "Ambroxol"],
        correctAnswer: 2
    },
    {
        id: 65,
        question: "El paciente es visto en Re consulta 10 días después... Cuál es su impresión clínica de este paciente?",
        options: ["Neumonia complicada", "Amigdalitis bacteriana", "Faringitis viral", "Rinosinusitis aguda"],
        correctAnswer: 3
    },
    {
        id: 66,
        question: "Consulta a su clinica un niño de 3 años... Cuál seria su diagnostico?",
        options: [
            "Faringoamidgalitis por Estreptococo",
            "Faringoamigdalitis viral",
            "Resfriado común",
            "Difteria"
        ],
        correctAnswer: 1
    },
    {
        id: 67,
        question: "En un niño con sospecha de otitis media aguda, cual signo al examen físico tiene mayor especificidad y sensibilidad?",
        options: ["Hiperemia timpanica", "Oido rojo", "Abombamiento de la membrana timpanica", "Signo del Trago"],
        correctAnswer: 2
    },
    {
        id: 68,
        question: "Con relación al resfriado común, podemos afirmar que afecta los siguientes, EXCEPTO.",
        options: ["Senos paranasales", "Conjuntiva", "Laringe", "Nasofaringe", "Trompas de Eustaquio."],
        correctAnswer: 2
    },
    {
        id: 69,
        question: "Con relación al tratamiento del resfriado común podemos afirmar:",
        options: [
            "La combinación de antihistamínicos con descongestionantes puede tener efecto beneficioso en niños pequeños",
            "Los aines se prescriben para manejo de dolor con buenos efecto.",
            "Los antibióticos se pueden valorar en el segundo día de fiebre."
        ],
        correctAnswer: 1
    },
    {
        id: 70,
        question: "Zinc en el tratamiento de resfriado común, afirmamos lo siguiente.",
        options: [
            "Actuaría como inmunomodulador del sistema inmunológico",
            "Se debe dar continuamente por 1 mes.",
            "Reduce la duración media de los síntomas si se inicia dentro de las primeras 24 hrs.",
            "A pesar de sus acciones no reduce la incidencia de catarro."
        ],
        correctAnswer: 2
    },
    {
        id: 71,
        question: "De la otitis media aguda y su clasificación es, EXCEPTO.",
        options: [
            "Otitis media persistente",
            "Otitis media aguda",
            "Otitis media aguda con exudado",
            "Otitis media perforada",
            "Otitis media."
        ],
        correctAnswer: 3
    },
    {
        id: 72,
        question: "De los siguientes cual NO es un germen común en la otitis media aguda:",
        options: ["H. Influenza", "Moraxella Catarrhalis", "S. Pyogenes", "S. Coagulasa negativa", "Pneumococo."],
        correctAnswer: 3
    }
];
