const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();
// categorias
router.get('/', (req, res) =>{
  res.json(
    {
      terminos_y_condiciones: {
        titulo: "Términos y Condiciones",
        contenido: "Estos son los términos y condiciones de uso de nuestro sitio web. Al acceder y utilizar nuestro sitio, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguno de estos términos, por favor no utilices nuestro sitio."
      },
      politica_de_privacidad: {
        titulo: "Política de Privacidad",
        contenido: "Nuestra política de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas. Al utilizar nuestro sitio, aceptas nuestra política de privacidad y el procesamiento de tus datos personales de acuerdo con la misma."
      },
      politica_de_devoluciones: {
        titulo: "Política de Devoluciones",
        contenido: "Nuestra política de devoluciones establece las condiciones bajo las cuales los clientes pueden devolver productos y solicitar reembolsos. Te recomendamos leer y comprender esta política antes de realizar una compra."
      },
      politica_de_cookies: {
        titulo: "Política de Cookies",
        contenido: "Utilizamos cookies para mejorar la experiencia del usuario en nuestro sitio web. Al utilizar nuestro sitio, aceptas el uso de cookies de acuerdo con nuestra política de cookies. Puedes administrar tus preferencias de cookies a través de la configuración de tu navegador."
      }
    }

  )
});

module.exports = router;
