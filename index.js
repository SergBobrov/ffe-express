import express from 'express';
import path from 'path'
import serverRouters from './routes/server-routes.js'

const app = express();
const PORT = process.env.PROT || 3000;
const __dirname = path.resolve();

app.use(serverRouters)
app.use(express.static(path.resolve(__dirname, 'static')))
// app.use(express.static(‘static’))
// app.set('view engine', 'ejs');
// app.set('views', path.resolve(__dirname, 'views', 'pages'))



app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});

