
const {Income, Expense} = require('../../models/index');


const getPage = async(req, res)=>{
    await res.render('expenses')
}


const Save = async(req, res) =>{
    try{
        
    const {source, categories, amount } = req.body;
    await Expense.create({ source, categories, amount });
    res.redirect('home')

    }catch(e){
        console.log(e)
    }
}


module.exports ={
   getPage, Save
}