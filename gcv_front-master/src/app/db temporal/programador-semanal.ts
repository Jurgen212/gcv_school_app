
import { SchoolParents } from "../domain/models/school parents/school-parents";
import { UsefulList } from "../domain/models/useful-lists/useful-lists";
import { WeekProgramator } from "../domain/models/week-programator/week-programator";

// Informacion 1
const tipo              = 1

const existe_titulo_1_1 = true
const info_titulo_1_1   = "!Bienvenidos!"
const tamano_titulo_1_1 = 50

const existe_titulo_2_1 = true
const info_titulo_2_1   = `Te ofrecemos`
const tamano_titulo_2_1 = 30


const existe_info_1_1     = true
const texto_info_1_1      = "En un mundo tan competitivo donde la formación integral del ser humano cobra tanta importancia para nuestra sociedad y para el mundo en general, queremos ofrecerte una alternativa educativa donde potencializamos las competencias de cada estudiante, sin descuidar su formación en valores, que le permita lograr alcanzar sus metas trazadas.<><>Nuestra responsabilidad con el estudiante, comienza desde la confianza del padre de familia. Gracias por creer en nuestro proyecto educativo."
const tamano_info_1_1     = 12
const text_link_info_1_1_1  = ""
const url_link_info_1_1_1   = ""

const text_link_info_1_1_2  = ""
const url_link_info_1_1_2   = ""


const text_link_info_1_1_3  = ""
const url_link_info_1_1_3  = ""



const existe_info_2_1     = true
const texto_info_2_1      = "-Enseñanza en valores.<><>-Proyecto Educativo FIPOX.<><>-Nivel Académico.<><>-Orientación Psicológica.<><>-Desarrollo Espiritual y Pastoral.<><>-Jornada Escolar.<><>-Actividades Extracurriculares.<><>Nuestra propuesta educativa es una experiencia feliz para nuestro estudiante y tranquila para los padres de familia. Somos una institución educativa respetuosa y responsable."
const tamano_info_2_1     = 12

const text_link_info_2_1_1  = ""
const url_link_info_2_1_1   = ""


const text_link_info_2_1_2  = ""
const url_link_info_2_1_2   = ""

const text_link_info_2_1_3  = ""
const url_link_info_2_1_3   = ""


const banner_existe_1_1   = true
const banner_url_1_1      = "banner_principal.png"
const banner_link_1_1     = ""
const banner_es_imagen_1_1= true


const banner_existe_2_1   = true
const banner_url_2_1      = "banner_secondary.png"
const banner_link_2_1     = ""
const banner_es_imagen_2_1= true


const multimedia_existe_1_1   = true
const multimedia_esImagen_1_1 = true
const multimedia_url_1_1      = "image_1.png"
const multimedia_link_1_1     = ""



// Listas de los diferentes salones, primero los del lado izquiero y luego derecho
const drop_1_1_title          = "Lunes"
const drop_1_1_exists         = true
const drop_1_1_font_size_title= 20
const drop_1_1_font_size_data = 12
const drop_1_1_isImg          = true
const drop_1_1_url_image      = "../../assets/lista-utiles-escolares/pre-jardin.pdf"
const drop_1_1_info           = ""
const drop_1_1_a_link         = ""


const drop_1_2_title          = "Martes"
const drop_1_2_exists         = true
const drop_1_2_font_size_title= 20
const drop_1_2_font_size_data = 12
const drop_1_2_isImg          = true
const drop_1_2_url_image      = "../../assets/lista-utiles-escolares/jardin.pdf"
const drop_1_2_info           = ""
const drop_1_2_a_link         = ""

const drop_1_3_title          = "Miércoles"
const drop_1_3_exists         = true
const drop_1_3_font_size_title= 20
const drop_1_3_font_size_data = 12
const drop_1_3_isImg          = true
const drop_1_3_url_image      = "../../assets/lista-utiles-escolares/transicion.pdf"
const drop_1_3_info           = ""
const drop_1_3_a_link         = ""


const drop_1_4_title          = "Jueves"
const drop_1_4_exists         = true
const drop_1_4_font_size_title= 20
const drop_1_4_font_size_data = 12
const drop_1_4_isImg          = true
const drop_1_4_url_image      = "../../assets/lista-utiles-escolares/primero.pdf"
const drop_1_4_info           = ""
const drop_1_4_a_link         = ""

const drop_1_5_title          = "Viernes"
const drop_1_5_exists         = true
const drop_1_5_font_size_title= 20
const drop_1_5_font_size_data = 12
const drop_1_5_isImg          = true
const drop_1_5_url_image      = "../../assets/lista-utiles-escolares/segundo.pdf"
const drop_1_5_info           = ""
const drop_1_5_a_link         = ""

const drop_1_6_title          = "Sábado"
const drop_1_6_exists         = true
const drop_1_6_font_size_title= 20
const drop_1_6_font_size_data = 12
const drop_1_6_isImg          = true
const drop_1_6_url_image      = "../../assets/lista-utiles-escolares/tercero.pdf"
const drop_1_6_info           = ""
const drop_1_6_a_link         = ""

const drop_1_7_title          = "Domingo"
const drop_1_7_exists         = true
const drop_1_7_font_size_title= 20
const drop_1_7_font_size_data = 12
const drop_1_7_isImg          = true
const drop_1_7_url_image      = "../../assets/lista-utiles-escolares/cuarto.pdf"
const drop_1_7_info           = ""
const drop_1_7_a_link         = ""




export const weekProgramatorShow: WeekProgramator = {    type          : tipo, 
                                                    title_1       : { exist: existe_titulo_1_1, info  : info_titulo_1_1  , size  : tamano_titulo_1_1 }, 
                                                    title_2       : { exist: existe_titulo_2_1, info  : info_titulo_2_1  , size  : tamano_titulo_2_1 }, 
                                                    information_1 : { exist: existe_info_1_1, info  : texto_info_1_1, fontSize: tamano_info_1_1, 
                                                                    link  :[ {text: text_link_info_1_1_1, url: url_link_info_1_1_1},  {text: text_link_info_1_1_2, url: url_link_info_1_1_2},  {text: text_link_info_1_1_3, url: url_link_info_1_1_3} ]}, 
                                                    information_2 : { exist: existe_info_2_1, info  : texto_info_2_1, fontSize: tamano_info_2_1, link  :[ {text: text_link_info_2_1_1, url: url_link_info_2_1_1},  {text: text_link_info_2_1_2, url: url_link_info_2_1_2},  {text: text_link_info_2_1_3, url: url_link_info_2_1_3}] }, 
                                                    banner_1      : { a_link  : banner_link_1_1, exist  : banner_existe_1_1, urlLink : `../../../../../../assets/programador-semanal/${ banner_url_1_1 }`, isImg   : banner_es_imagen_1_1, }, 
                                                    banner_2      : { a_link  : banner_link_2_1, exist  : banner_existe_2_1, urlLink : `../../../../../../assets/programador-semanal/${ banner_url_2_1 }`, isImg   : banner_es_imagen_2_1, }, 
                                                    multimedia_1  : { a_link  : multimedia_link_1_1, isImg   : multimedia_esImagen_1_1, exist  : multimedia_existe_1_1, urlLink :  `../../../../../../assets/programador-semanal/${ multimedia_url_1_1 }` }, 
                                                    drop_1        : [   { title  : drop_1_1_title, exist: drop_1_1_exists, fontSizeTitle: drop_1_1_font_size_title, drop: [{fontSizeData: drop_1_1_font_size_data, isImg: drop_1_1_isImg, urlImage: drop_1_1_url_image, info: drop_1_1_info, a_link: drop_1_1_a_link}] },
                                                                        { title  : drop_1_2_title, exist: drop_1_2_exists, fontSizeTitle: drop_1_2_font_size_title, drop: [{fontSizeData: drop_1_2_font_size_data, isImg: drop_1_2_isImg, urlImage: drop_1_2_url_image, info: drop_1_2_info, a_link: drop_1_2_a_link}] },
                                                                        { title  : drop_1_3_title, exist: drop_1_3_exists, fontSizeTitle: drop_1_3_font_size_title, drop: [{fontSizeData: drop_1_3_font_size_data, isImg: drop_1_3_isImg, urlImage: drop_1_3_url_image, info: drop_1_3_info, a_link: drop_1_3_a_link}] },
                                                                        { title  : drop_1_4_title, exist: drop_1_4_exists, fontSizeTitle: drop_1_4_font_size_title, drop: [{fontSizeData: drop_1_4_font_size_data, isImg: drop_1_4_isImg, urlImage: drop_1_4_url_image, info: drop_1_4_info, a_link: drop_1_4_a_link}] },
                                                                        { title  : drop_1_5_title, exist: drop_1_5_exists, fontSizeTitle: drop_1_5_font_size_title, drop: [{fontSizeData: drop_1_5_font_size_data, isImg: drop_1_5_isImg, urlImage: drop_1_5_url_image, info: drop_1_5_info, a_link: drop_1_5_a_link}] },
                                                                        { title  : drop_1_6_title, exist: drop_1_6_exists, fontSizeTitle: drop_1_6_font_size_title, drop: [{fontSizeData: drop_1_6_font_size_data, isImg: drop_1_6_isImg, urlImage: drop_1_6_url_image, info: drop_1_6_info, a_link: drop_1_6_a_link}] },
                                                                        { title  : drop_1_7_title, exist: drop_1_7_exists, fontSizeTitle: drop_1_7_font_size_title, drop: [{fontSizeData: drop_1_7_font_size_data, isImg: drop_1_7_isImg, urlImage: drop_1_7_url_image, info: drop_1_7_info, a_link: drop_1_7_a_link}] } ],
                                                    drop_2        : []
                                                } 
                                        