export interface IDropTemplateController {

    getAllTemplates     ( req: any , res: any   ): any
    getTemplateById     ( req: any , res: any   ): any
    updateTemplateById  ( req: any , res: any   ): any
    postTemplate        ( req: any, res: any    ): any
    deleteTemplateById  ( req: any, res: any    ): any
}