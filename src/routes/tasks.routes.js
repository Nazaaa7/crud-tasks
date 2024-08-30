import { Router } from "express";

const tasksRoutes  = Router();

tasksRoutes.get("/", (req, res) =>{
  res.send("taskssssss");
});


export {tasksRoutes};