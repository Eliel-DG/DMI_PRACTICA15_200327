import express from "express";
import { router} from "./routes/playerRoute.js"

const api = new express();

const port = 20032

api.use("/players", router)
api.listen(port, ()=> {
    console.log(`El API ha sido iniciado y se encuentra por el puerto: ${port}`)
})