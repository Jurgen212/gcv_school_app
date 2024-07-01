import { Pool  } from 'pg'

export class ConnectionDB{

    get pool(){
         
        return new Pool({
        host        : process.env.DBHOST    ,
        user        : process.env.DBUSER    ,
        password    : process.env.DBPASSWORD,
        database    : process.env.DBDATABASE
    }) 
}
}

export default ConnectionDB