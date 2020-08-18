const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + '/date.js')
const app = express()


let items = ['Buy food', 'Cook the food', 'Eat food']
let workItems = []


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))


app.get('/', (req, res) => {
    let today = date.today()

    res.render('list', { listTitle: today, newListItems: items })

})

app.post('/', (req, res) => {

    let item = req.body.list

    if (item === 'work') {
        workItems.push(req.body.newItem)
        res.redirect('/work')
    } else {

        items.push(item)
        res.redirect('/')
    }


})

app.get('/work', (req, res) => {
    res.render('list', { listTitle: "work", newListItems: workItems })
})

app.post('/work', (req, res) => {

    let item = req.body.newItem
    workItems.push(item)
    res.redirect('/work')

})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})