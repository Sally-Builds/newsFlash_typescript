import path from 'path'
import express, {Application} from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'


const app: Application = express()

app.set('view engine', 'pug')
app.set('vies', path.join(__dirname, 'views'))

//middleware
app.use(cors())

//body parser
app.use(express.json())
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
    res.send('hadkfa')
})

module.exports = app