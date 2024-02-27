const express = require('express');
const app = express();
const path = require('path');
const enviarMail = require('./enviarMail');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.post('/enviar-correo', async (req, res) => {    
    try {
        const correoUsuario = req.body.correo;
        await enviarMail(correoUsuario);
        res.send('Correo enviado correctamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al enviar el correo');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
