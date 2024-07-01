import { CalendarData } from "../domain/models/calendar/calendar";


//Pone los eventos un dia antes OJO, si el evento es el 11, poner 12
const evento_1_end      ="2023-05-12" 
const evento_1_start    = "2023-05-12"
const evento_1_title    = "Prueba informacion calendario"

const evento_2_end      ="2023-06-17" 
const evento_2_start    = "2023-06-17"
const evento_2_title    = "Noche Mariana"

const evento_3_end      ="2023-07-12" 
const evento_3_start    = "2023-07-12"
const evento_3_title    = "Prueba informacion calendario"

const evento_4_end      ="2023-05-10" 
const evento_4_start    = "2023-05-10"
const evento_4_title    = "Noche Mariana"


const evento_5_end      ="2023-05-1" 
const evento_5_start    = "2023-05-1"
const evento_5_title    = "Prueba informacion calendario"

const evento_6_end      ="2023-05-19" 
const evento_6_start    = "2023-05-19"
const evento_6_title    = "Noche Mariana"


const evento_7_end      ="2023-05-20" 
const evento_7_start    = "2023-05-20"
const evento_7_title    = "Prueba informacion calendario"

const evento_8_end      ="2023-05-21" 
const evento_8_start    = "2023-05-21"
const evento_8_title    = "Noche Mariana"


const evento_9_end      ="2023-05-25" 
const evento_9_start    = "2023-05-25"
const evento_9_title    = "Prueba informacion calendario"

const evento_10_end      ="2023-05-7" 
const evento_10_start    = "2023-05-7"
const evento_10_title    = "Noche Mariana"


const evento_11_end      ="2023-01-12" 
const evento_11_start    = "2023-01-12"
const evento_11_title    = "Prueba informacion calendario"

const evento_12_end      ="2023-12-17" 
const evento_12_start    = "2023-12-17"
const evento_12_title    = "Noche Mariana"


const evento_13_end      ="2023-06-16" 
const evento_13_start    = "2023-06-16"
const evento_13_title    = "Prueba informacion calendario"

const evento_14_end      ="2023-05-02" 
const evento_14_start    = "2023-05-02"
const evento_14_title    = "Noche Mariana"


const evento_15_end      ="2023-06-01" 
const evento_15_start    = "2023-06-01"
const evento_15_title    = "Prueba informacion calendario"



export const calendarShow: CalendarData[] = [{ title: evento_1_title, end:  evento_1_end + "T00:00:00.000Z" , start: evento_1_start + "T00:00:00.000Z"  },
                                             { title: evento_2_title, end:  evento_2_end + "T00:00:00.000Z" , start: evento_2_start + "T00:00:00.000Z"  },
                                             { title: evento_3_title, end:  evento_3_end + "T00:00:00.000Z" , start: evento_3_start + "T00:00:00.000Z"  },
                                             { title: evento_4_title, end:  evento_4_end + "T00:00:00.000Z" , start: evento_4_start + "T00:00:00.000Z"  },
                                             { title: evento_5_title, end:  evento_5_end + "T00:00:00.000Z" , start: evento_5_start + "T00:00:00.000Z"  },
                                             { title: evento_6_title, end:  evento_6_end + "T00:00:00.000Z" , start: evento_6_start + "T00:00:00.000Z"  },
                                             { title: evento_7_title, end:  evento_7_end + "T00:00:00.000Z" , start: evento_7_start + "T00:00:00.000Z"  },
                                             { title: evento_8_title, end:  evento_8_end + "T00:00:00.000Z" , start: evento_8_start + "T00:00:00.000Z"  },
                                             { title: evento_9_title, end:  evento_9_end + "T00:00:00.000Z" , start: evento_9_start + "T00:00:00.000Z"  },
                                             { title: evento_10_title, end:  evento_10_end + "T00:00:00.000Z" , start: evento_10_start + "T00:00:00.000Z"  },
                                             { title: evento_11_title, end:  evento_11_end + "T00:00:00.000Z" , start: evento_11_start + "T00:00:00.000Z"  },
                                             { title: evento_12_title, end:  evento_12_end + "T00:00:00.000Z" , start: evento_12_start + "T00:00:00.000Z"  },
                                             { title: evento_13_title, end:  evento_13_end + "T00:00:00.000Z" , start: evento_13_start + "T00:00:00.000Z"  },
                                             { title: evento_14_title, end:  evento_14_end + "T00:00:00.000Z" , start: evento_14_start + "T00:00:00.000Z"  },
                                             { title: evento_15_title, end:  evento_15_end + "T00:00:00.000Z" , start: evento_15_start + "T00:00:00.000Z"  }]
