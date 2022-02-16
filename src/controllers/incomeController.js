const {Income, Expence} = require('../../models/index');


const getPage = async(req, res)=>{
    await res.render('income')
}


const Save = async(req, res) =>{
    try{
        console.log(req.body)
    const {source, categories, amount } = req.body;
    await Income.create({ source, categories, amount });
    res.redirect('home')

    }catch(e){
        console.log(e)
    }
}


module.exports ={
   getPage, Save
}