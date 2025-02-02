// express stuff
import express,{ Request, Response, NextFunction} from 'express'
import router from './routes/employee.route'
import { urlencoded } from 'body-parser';

// run and init the database connection
const {sequelize} = require('./Database/models')






const app = express();
const port_number = 3000;

app.use(express.json())                 // support json
app.use(urlencoded({extended:true}));   // support url encoding of params

app.get("/",(req: Request , res: Response) =>
{
    return res.send("hello worlds");
})

app.use('/',router);


app.listen(port_number, async ()=>{
    console.log("Application listening at http://localhost:"+port_number);
    //console.log(getAllEmployees()); // typeof object
    checkDatabaseConnection();
    //await sequelize.sync({force:true});
    
});


async function checkDatabaseConnection() {
    try {
      await sequelize.authenticate({force:true});
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }