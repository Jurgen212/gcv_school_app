import { Router } from "express";

const router = Router()

router.get('/', ( req, res ) =>{
    console.log( req, res  )
})

router.get('/:id', (req, res ) =>{
    console.log( req, res )
})

router.post('/', (req, res ) =>{
    console.log( req, res )
})


router.put('/:id', (req, res ) =>{
    console.log( req, res )
})

router.delete('/:id', (req, res ) =>{
    console.log( req, res )
})

export default router