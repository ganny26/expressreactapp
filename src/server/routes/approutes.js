import express from 'express'
import * as appController from '../controllers/appcontroller'

const router = express.Router()

router.all('*', appController.requestValidation)
router.get('/', appController.initialize)
router.get('/me', appController.getCoinBase)
router.post('/adduser', appController.addUser)


module.exports = router
