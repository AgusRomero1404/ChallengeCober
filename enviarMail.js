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
    to: "romeroagustin1404@gmail.com",
    subject: "Nuevo usuario agregado a la lista de espera",
    text: `El correo electronico: ${correoUsuario} se a sumado a nuestra lista de espera`,
  };
  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(message);
  console.log(info);
};
module.exports = enviarMail;
