const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const PORT = 8887;

app.use(express.json());
app.use(cors());
app.use(routes);

app.get ('/', (req,res) => {
    res.send('oi');
});
app.listen(PORT, () => {
    console.log('online http://localhost:8887');
});