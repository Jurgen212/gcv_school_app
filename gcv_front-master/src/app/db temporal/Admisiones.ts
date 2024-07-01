import { Admissions } from "../domain/models/admissions/admissions";
import { Graduates } from "../domain/models/graduates/graduates";


// Banners
// https://previews.dropbox.com/p/thumb/AB-78Dcfvoj_mKGjgxitSC4uHf0Ueg86NFTGC46U8rVqcqyQ1tGKSCaN77-iG5kWHEfW_1fEHgegWsMtfI6lu9_GDkJAOio5W8tfxtbqP9By2YDyUor72MhfCtshS76i3lLvlstgYfGvnTty6sUExsSGs-IhfdAzt5Y2GIlPAdRr98xHtXhNX926hVR1Xl0wRRNF5zrmapU0graJU_zM0aqr4q-TsrAWIhNgpW4r_y0qfGT-2kPEilm77h8uIc2iNrnugNL_uzhmEmgtqOojZmvSJ_3LSmVXNqWn0dUgRtBsRNTz5G39D-yirI0YXIh-6HwAy6Zl1X3Fo-korR-qvHeI/p.png
// https://previews.dropbox.com/p/thumb/AB9mMTbr1alFGjM77076oIohnlpboaVrEJF6P7G-RP-cIZmQxbeNuiXIhG2LoAE7GqGDAxcdB5Gy8qxIt0aRMxtnMtGhaLd4xkFInEJYlFVojTQPPnst-wTYaYu1L2vterpL17fB3GmexkOQRBPGLXhKVO3McIwotKaBh9QFdh05rjXdVjm1NJ8Pw7-VVNwwYAu8B1oxgYuucWS5MzJ-nJDJHBOgnDd_uxdaPFPR_8gm8bB3XX7zNovGBj9cov1pRkaM0CntVg77DF-gSfR1bR9QhMNOXXd29W8ZFUWnemC-7wM1atBd-Iqrrsm8xG28bqebYl6azSTVIdqFprjMJfPZ/p.png

// Imagen
// https://cdn.ethic.es/wp-content/uploads/2023/03/imagen.jpg
// https://www.youtube.com/watch?v=sTfHzp8WP24

// Informacion 1
const tipo              = 2
const titulo            = `Noticia prueba 1`
const imagen_principal  = "imagen_principal.jpeg"

const existe_titulo_1_1 = true
const info_titulo_1_1   = "!Bienvenidos!"
const tamano_titulo_1_1 = 50

const existe_titulo_2_1 = true
const info_titulo_2_1   = `Te ofrecemos`
const tamano_titulo_2_1 = 30


const existe_info_1_1     = true
const texto_info_1_1      = "En un mundo tan competitivo donde la formación integral del ser humano cobra tanta importancia para nuestra sociedad y para el mundo en general, queremos ofrecerte una alternativa educativa donde potencializamos las competencias de cada estudiante, sin descuidar su formación en valores, que le permita lograr alcanzar sus metas trazadas.<><>Nuestra responsabilidad con el estudiante, comienza desde la confianza del padre de familia. Gracias por creer en nuestro proyecto educativo."
const tamano_info_1_1     = 12

const text_link_info_1_1_1  = "GCV"
const url_link_info_1_1_1   = "http://gcv.edu.co/"

const text_link_info_1_1_2  = "Youtube"
const url_link_info_1_1_2   = "https://www.youtube.com/"

const text_link_info_1_1_3  = "Drive"
const url_link_info_1_1_3   = "https://drive.google.com/drive/folders/1rq68QnNyl2N-QVuFMEczLKkpJq91pGZn"

const text_link_info_1_1_4  = "GCV"
const url_link_info_1_1_4   = "http://gcv.edu.co/"

const text_link_info_1_1_5  = "Youtube"
const url_link_info_1_1_5   = "https://www.youtube.com/"

const text_link_info_1_1_6  = "Drive"
const url_link_info_1_1_6   = "https://drive.google.com/drive/folders/1rq68QnNyl2N-QVuFMEczLKkpJq91pGZn"

const text_link_info_1_1_7  = "Youtube"
const url_link_info_1_1_7   = "https://www.youtube.com/"

const text_link_info_1_1_8  = "Drive"
const url_link_info_1_1_8   = "https://drive.google.com/drive/folders/1rq68QnNyl2N-QVuFMEczLKkpJq91pGZn"



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
const banner_url_2_1      = "laguna.mp4"
const banner_link_2_1     = ""
const banner_es_imagen_2_1= false


const multimedia_existe_1_1   = true
const multimedia_esImagen_1_1 = false
const multimedia_url_1_1      = "https://www.youtube.com/watch?v=_iaijndWnA8"
const multimedia_link_1_1     = ""




const multimedia_existe_2_1   = true
const multimedia_esImagen_2_1 = false
const multimedia_url_2_1      = "laguna.mp4"
const multimedia_link_2_1     = ""



export const admissionsShow: Admissions = { type          : tipo, 
                                            title         : titulo, 
                                            image         : `../../../../assets/admisiones/${ imagen_principal }`, 
                                            title_1       : { exist: existe_titulo_1_1, info  : info_titulo_1_1  , size  : tamano_titulo_1_1 }, 
                                            title_2       : { exist: existe_titulo_2_1, info  : info_titulo_2_1  , size  : tamano_titulo_2_1 }, 
                                            information_1 : { exist: existe_info_1_1, info  : texto_info_1_1, fontSize: tamano_info_1_1, link  : [{text: text_link_info_1_1_1, url: url_link_info_1_1_1}, {text: text_link_info_1_1_2, url: url_link_info_1_1_2}, {text: text_link_info_1_1_3, url: url_link_info_1_1_3},{text: text_link_info_1_1_4, url: url_link_info_1_1_4},{text: text_link_info_1_1_5, url: url_link_info_1_1_5},{text: text_link_info_1_1_6, url: url_link_info_1_1_6}]}, 
                                            information_2 : { exist: existe_info_2_1, info  : texto_info_2_1, fontSize: tamano_info_2_1, link  : [{text: text_link_info_2_1_1, url: url_link_info_2_1_1}, {text: text_link_info_2_1_2, url: url_link_info_2_1_2}, {text: text_link_info_2_1_3, url: url_link_info_2_1_3} ]}, 
                                            banner_1      : { a_link  : banner_link_1_1, exist  : banner_existe_1_1, urlLink : `../../../../../../assets/admisiones/${ banner_url_1_1 }`, isImg   : banner_es_imagen_1_1, }, 
                                            banner_2      : { a_link  : banner_link_2_1, exist  : banner_existe_2_1, urlLink : `../../../../../../assets/admisiones/${ banner_url_2_1 }`, isImg   : banner_es_imagen_2_1, }, 
                                            multimedia_1: { a_link  : multimedia_link_1_1, isImg   : multimedia_esImagen_1_1, exist  : multimedia_existe_1_1, urlLink :  `../../../../../../assets/admisiones/${ multimedia_url_1_1 }` }, 
                                            multimedia_2: { a_link  : multimedia_link_2_1, isImg   : multimedia_esImagen_2_1, exist  : multimedia_existe_2_1, urlLink :  `../../../../../../assets/admisiones/${ multimedia_url_2_1 }` } }