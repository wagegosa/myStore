const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Hola mi server en express')
});
app.get('/categorias', (req, res) =>{
  res.json({
    name: 'categoria 1',
    product: {
      name: 'product 1',
      brand: 'marca 1'
    }
  },
  {
  name: 'categoria 2',
    product: {
      name: 'product 2',
      brand: 'marca 1'
    }
  },
  {
  name: 'categoria 3',
    product: {
      name: 'product 1',
      brand: 'marca 3'
    }
  }
    )
});
app.get('/products', (req, res) =>{
  res.json(
    {
      name: 'product 1',
      price: 1000
    },{
      name: 'product 2',
      price: 2000
    },{
      name: 'product 3',
      price: 3000
    }
  )
});
app.get('/carrito', (req, res) =>{
  res.json({
    price: 1000
  })
});
app.get('/pago', (req, res) =>{
  res.json(
    {
      name: 'pago 1',
      price: 1000
    },
    {
      name: 'pago 2',
      price: 2000
    },
    {
      name: 'pago 3',
      price: 3000
    }
  )
});
app.get('/pedido', (req, res) =>{
  res.json(
    {
      name: 'pedido 1',
      price: 1000
    },
    {
      name: 'pedido 5',
      price: 1000
    },
    {
      name: 'pedido 9',
      price: 1000
    }
  )
});
app.get('/inicio-sesion', (req, res) =>{
  res.json({
    name: 'product 1',
    price: 1000
  })
});
app.get('/registro', (req, res) =>{
  res.json(
    {
      active: true,
      user: 'user 1'
    },
    {
      active: true,
      user: 'user 6'
    },
    {
      active: false,
      user: 'user 3'
    },
  )
});
app.get('/usuarios', (req, res) =>{
  res.json({
    name: 'nombre 1',
    usuarios: 'user1'
  },
  {
    name: 'nombre 2',
    usuarios: 'user2'
  },
  {
    name: 'nombre 3',
    usuarios: 'user3'
  }
  )
});
app.get('/terminos-condiciones', (req, res) =>{
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
app.get('/blog', (req, res) =>{
  res.json(
    {
      blog: [
        {
          titulo: "Nuevas tendencias en moda primavera 2023",
          fecha_publicacion: "2023-03-15",
          contenido: "Descubre las últimas tendencias en moda primavera para este año. Desde colores vibrantes hasta estilos relajados, te mostramos lo que está de moda esta temporada."
        },
        {
          titulo: "Consejos para mantener una dieta saludable",
          fecha_publicacion: "2023-02-28",
          contenido: "Mantener una dieta equilibrada es esencial para la salud. En este artículo, te proporcionamos consejos prácticos para llevar un estilo de vida más saludable a través de la alimentación."
        }
      ],
      noticias: [
        {
          titulo: "Lanzamiento de la nueva colección de otoño",
          fecha_publicacion: "2023-08-10",
          contenido: "¡Estamos emocionados de anunciar el lanzamiento de nuestra nueva colección de otoño! Descubre las últimas prendas de moda para la temporada de otoño y prepárate para lucir con estilo."
        },
        {
          titulo: "Apertura de una nueva sucursal en tu ciudad",
          fecha_publicacion: "2023-06-20",
          contenido: "Estamos encantados de informarles que hemos inaugurado una nueva sucursal de nuestra tienda en tu ciudad. Visítanos en nuestra ubicación recién abierta y disfruta de ofertas especiales de apertura."
        }
      ]
    }

  )
});


app.listen(port, () => {
  console.log('Estas en el puerto: ', port);
})
