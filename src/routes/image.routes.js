module.exports=app=>{
    const image=require('../controller/image/image.controller');

    const router = require('express').Router();

    router.post('/:id',image.addNewImage);

    app.use('/api/images',router);
}