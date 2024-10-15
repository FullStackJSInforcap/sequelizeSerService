
const express = require('express');
const hbs = require('hbs');

class Server{

    constructor(){
        this.app = express();
        this.port = 3000;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.urlencoded({extended: true}));
        this.app.set('view engine', 'hbs');
        hbs.registerPartials(__dirname.slice(0, -7) + '/views/partials');
    }

    routes(){
        this.app.use('/clientes', require('../routes/cliente'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando en el puerto ${this.port}`);
        });
    }

}

module.exports = Server;