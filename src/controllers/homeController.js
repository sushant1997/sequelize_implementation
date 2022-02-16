const {Income, Expence} = require('../../models/index');

const getData = async(req, res) => {
    try{
            const income = await Income.findAll({raw: true})
            await res.render('home',{income});
    }catch(e){
        console.log(e)
    }  
    
}


module.exports = {getData}