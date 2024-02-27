const nodemailer = require("nodemailer");
const { config } = require("process");
enviarMail = async (correoUsuario) => {
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "enviodemailpruebatecnicacober@gmail.com",
      pass: "lvyx flcc sick ddmc",
    },
  };

  const message = {
    from: "enviodemailpruebatecnicacober@gmail.com",
    to: "admin@grupocober.online",
    subject: "Nueva suscripción",
    text: `El correo electronico: ${correoUsuario} se ha suscrito con exito `,
  };
  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(message);
  console.log(info);
};
module.exports = enviarMail;
