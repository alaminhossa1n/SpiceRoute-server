const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors());
const chef = require('./data/chef.json')

app.get('/', (req, res) => {
    res.send('Chef is running')
});

app.get('/chef',(req, res)=>{
    res.send(chef)
})

app.get('/chef/:id',(req, res)=>{
    const id = req.params.id;
    const selectedChef = chef.find(n=> n.id === id);
    res.send(selectedChef)
})



app.listen(port, () => {
    console.log(`chef API running on port ${port}`);
})