const router = require('express').Router();
const expensesrouter = require('../controllers/expensesController')

router.get('/',expensesrouter.getPage)
router.post('/',expensesrouter.Save)

module.exports = router;
