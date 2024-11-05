import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const userEmail = process.env.EMAIL_SENDER;
const userPassword = process.env.PASS_SENDER;

const sendEmail = async (
  emailCliente,
  pedidoId,
  nombreCliente,
  total,
  fecha
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: userEmail,
      pass: userPassword,
    },
  });

  const mailOptions = {
    from: userEmail,
    to: emailCliente,
    subject: "Boleta de Confirmación de Pedido",
    html: `
      <h1>Gracias por tu compra</h1>
      <p>Estimado/a ${nombreCliente},</p>
      <p>Tu pedido ha sido confirmado exitosamente. Aquí tienes los detalles de tu boleta:</p>
      <ul>
        <li><strong>ID Pedido:</strong> ${pedidoId}</li>
        <li><strong>Total:</strong> $${total}</li>
        <li><strong>Fecha:</strong> ${fecha}</li>
      </ul>
      <p>Gracias por confiar en nosotros.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Correo enviado exitosamente a:", emailCliente);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    throw new Error("Error al enviar el correo");
  }
};

export default sendEmail;
