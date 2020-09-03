const Request = require("request");
const URL=require('../../config/url.config');
const { json } = require("body-parser");
const request = require("request");

exports.productList=(req,res)=>{
    try {
      Request.get({
        "headers": {"content-type": "application/json"},
        "url": URL.shopifyurl.testingUrl+ 'products.json',
        },(error,response, body) => {
        if(error) {
          console.log('Error in products.controller.productList called internal error');
        }else{
            res.json(JSON.parse(body));
            console.log("SUCEESS products.controller.productList ");
          }
        });
      }catch(error){
        logger.log('error','Error in productList in Catch Products Controller : ',error);
    }
}

exports.addNewProduct=(req,res)=>{
   try{
        Request.post({
            "headers": {"content-type": "application/json"},
            "url": URL.shopifyurl.testingUrl+'products.json',
            "body": JSON.stringify(req.body)
        },(error,response,body)=>{
            if(error){
                console.log('Error in products.controller.addNewProduct called internal error',error);
            }else{
                res.json(JSON.parse(body));
                console.log("SUCEESS products.controller.addNewProduct ");
            }
        });
   } catch(exception){
        console.log('error','Error in addNewProduct in Catch Products Controller : ',error);
   }
}

exports.updateProduct=(req,res)=>{
  try{
    Request.put({
        url:URL.shopifyurl.testingUrl+'products/'+req.params.id+'.json',
        "headers": {"content-type": "application/json"},
        body:JSON.stringify(req.body)
    },(err,resp,body)=>{
      if(err) console.log("error",err);
      else
        res.json(JSON.parse(body));
    });
  }catch(ex){
    console.log('Exception',ex);
  }
}

exports.deleteProduct=(req,res)=>{
  try{
  request.delete({
    url:URL.shopifyurl.testingUrl+'products/'+req.params.id+'.json',
    headers: {"content-type": "application/json"},
    body:JSON.stringify(req.body)
    },(err,resp,body)=>{
      if(err) console.log("error",err);
      else
        res.json(JSON.parse(body));
    });
  }catch(ex){
    console.log('Exception',ex);
  }
}

exports.productCount=(req,res)=>{
  try{
    request.get({
      url:URL.shopifyurl.testingUrl+'products/count.json',
      headers:{'Content-Type':'application/json'}
    },(err,resp,body)=>{
      if(err) console.log('Error :',err)
      else res.json(JSON.parse(body));
    })
  }catch(ex){
    console.log("Exception :",ex);
  }
}

exports.getProductById=(req,res)=>{
  try{
    request.get({
      url:URL.shopifyurl.testingUrl+'products/'+req.params.id+'.json',
      headers:{'Content-Type':'application/json'}
    },(err,resp,body)=>{
      if(err) console.log('Error:',err);
      else res.json(JSON.parse(body));
    })
  }catch(ex){
    console.log('Exception :',ex)
  }
}