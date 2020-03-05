const router = require('./routes');
const express = require('express');
const {checkAuthorization} = require('./middlewares/user');
let cors = require('cors');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));