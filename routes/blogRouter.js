const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();
// categorias
router.get('/', (req, res) =>{
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

module.exports = router;
