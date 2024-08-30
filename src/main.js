import express, { urlencoded } from 'express';
import { port } from '../settings/enviroments.js';
import cors from 'cors';
import helmet from "helmet";
import morgan from 'morgan';
import { tasksRoutes } from './routes/tasks.routes.js';

const app = express();

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use("/tasks", tasksRoutes); 

app.get("/", (req, res) => {
  res.send("holis");

});

app.listen(port, () => {
  console.log(`servidor corriendo en el puerto ${port}`);
});