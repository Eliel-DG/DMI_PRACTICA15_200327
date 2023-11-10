import Express from "express";
import { createPlayer, FindPlayerByID , FindPlayerByEmail, updatePlayer,changePlayerPortrait,deletePlayer} from "../controllers/playerController.js"

const router = Express.Router()

router.post("/newPlayer", createPlayer)
router.get("/FindOne/:playerID", FindPlayerByID)
router.get("/FindOne/:email", FindPlayerByEmail)
router.put("/update/playerID:", updatePlayer)
router.patch("/changePortrait/:playerID", changePlayerPortrait)
router.delete("/deltePlayer/:playerID", deletePlayer)


export {router}