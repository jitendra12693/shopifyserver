var request=require('request');
const URL=require('../../config/url.config');

exports.addNewImage = (req,res) => {
    request.post({
        url:URL.shopifyurl.testingUrl+'products/'+req.params.id+'/images.json',
        "headers": {"content-type": "application/json"},
        "body":JSON.stringify(req.body)
    },(err,result,body)=>{
        if(err) {
            console.log("Error Internal error occures in ");
        }
        else {
            res.json(JSON.parse(body));
        }
    })
}

exports.productImageList=(req,res)=>{
    request.get({
        url:URL.shopifyurl.testingUrl+'products/'+req.params.id+'/images.json',
        headers:{'Content-Type':'application/json'}
    },(err,resp,body)=>{
        if(err) console.log('Error: ',err);
        else res.json(JSON.parse(body));
    })
}

exports.getImageListAfterProductId=(req,res)=>{
    request.get({
        url:URL.shopifyurl.testingUrl+'products/'+req.params.id+'/images.json?since_id'+req.params.productid_2,
        headers:{'Content-Type':'application/json'}
    },(err,resp,body)=>{
        if(err) console.log('Error :',err);
        else res.json(JSON.parse(body));
    });
}

exports.getProductImageCount=(req,res)=>{
    request.get({
        url:URL.shopifyurl.testingUrl+'products/'+req.params.id+'/images/count.json',
        headers:{'Content-Type':'application/json'}
    },(err,resp,body)=>{
        if(err) console.log('Error :',err);
        else res.json(JSON.parse(body));
    });
}

exports.showProductImage=(req,res)=>{
    request.get({
        url:URL.shopifyurl.testingUrl+'products/'+req.params.id+'/images/count.json',
        headers:{'Content-Type':'application/json'}
    },(err,resp,body)=>{
        if(err) console.log('Error :',err);
        else res.json(JSON.parse(body));
    });
}