import { Router } from "express";
import userCtrl from "../controllers/ejemploController.js";


const route=Router();
route.get("/",userCtrl.getData);
route.get("/:id",userCtrl.getDataByid);

route.post("/", userCtrl.saveData);
route.put("/:id",userCtrl.actualizar)
route.delete("/:id",userCtrl.eliminar)

export default route;

//Backend1finalizado

