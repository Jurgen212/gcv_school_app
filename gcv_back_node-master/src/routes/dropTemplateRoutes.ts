import { Router }                   from "express"                                  ;
import { IDropTemplateController }  from "../controllers/IDropTemplateController"   ;
import DropTemplateController       from "../controllers/DropTemplateController"    ;

const router                                    = Router()
const dropController: IDropTemplateController   = new DropTemplateController()

router.get      ('/'    , dropController.getAllTemplates    )
router.get      ('/:id' , dropController.getTemplateById    )
router.post     ('/'    , dropController.postTemplate       )
router.put      ('/:id' , dropController.updateTemplateById )
router.delete   ('/:id' , dropController.deleteTemplateById )

export default router