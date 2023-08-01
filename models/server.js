const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        /* Middlewares */
        this.middlewares();

        /* Rutas de mi aplicación */
        this.routes();
    }

    middlewares() {
        this.app.use(cors())
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.status(200).json({
                "msg": "GET API"
            });
        });

        this.app.post('/api', (req, res) => {
            res.status(201).json({
                "msg": "POST API"
            });
        });

        this.app.put('/api', (req, res) => {
            res.json({
                "msg": "PUT API"
            });
        });

        this.app.delete('/api', (req, res) => {
            res.json({
                "msg": "DELETE API"
            });
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`REST Server corriendo en el puerto: ${ this.port }`);
        });
    }
}

module.exports = Server;