import { Router } from "express";
import { IDataTemplateController } from '../controllers/IDataTemplateController';
import DataTemplateController from "../controllers/DataTemplateController";

const router                                    = Router()
const dataController: IDataTemplateController   = new DataTemplateController()

router.get      ('/'    , dataController.getAllTemplates        )
router.get      ('/:id' , dataController.getTemplateById        )
router.post     ('/'    , dataController.postTemplate           )
router.put      ('/:id' , dataController.updateTemplateById     )
router.delete   ('/:id' , dataController.deleteTemplateById     )

export default router