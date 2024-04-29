const express = require('express');
const app = express();
const port = 3000;



// Respuestas informativas (1xx)
app.get('/100', (req, res) => {
  res.status(100).send('Respuesta Informativa: Continuar');
});

app.get('/101', (req, res) => {
  res.status(101).send('Respuesta Informativa: Cambio de protocolo');
});

app.get('/102', (req, res) => {
  res.status(102).send('Respuesta Informativa: Procesando');
});

app.get('/103', (req, res) => {
  res.status(103).send('Respuesta Informativa: Interludio temprano');
});



// Respuestas satisfactorias (2xx)
app.get('/200', (req, res) => {
    res.status(200).send('Respuesta Satisfactoria: OK');
  });
  
  app.get('/201', (req, res) => {
    res.status(201).send('Respuesta Satisfactoria: Creado');
  });
  
  app.get('/202', (req, res) => {
    res.status(202).send('Respuesta Satisfactoria: Aceptado');
  });
  
  app.get('/203', (req, res) => {
    res.status(203).send('Respuesta Satisfactoria: No autorizado');
  });
  
  app.get('/204', (req, res) => {
    res.status(204).send('Respuesta Satisfactoria: Sin contenido');
  });
  
  app.get('/205', (req, res) => {
    res.status(205).send('Respuesta Satisfactoria: Restablecer contenido');
  });
  
  app.get('/206', (req, res) => {
    res.status(206).send('Respuesta Satisfactoria: Contenido parcial');
  });
  
  app.get('/207', (req, res) => {
    res.status(207).send('Respuesta Satisfactoria: Estado múltiple');
  });
  
  app.get('/208', (req, res) => {
    res.status(208).send('Respuesta Satisfactoria: Ya reportado');
  });
  
  app.get('/226', (req, res) => {
    res.status(226).send('Respuesta Satisfactoria: IM utilizado');
  });




// Redirecciones (3xx)
app.get('/300', (req, res) => {
    res.status(300).send('Redirección: Múltiples opciones');
  });
  
  app.get('/301', (req, res) => {
    res.status(301).send('Redirección: Movido permanentemente');
  });
  
  app.get('/302', (req, res) => {
    res.status(302).send('Redirección: Encontrado');
  });
  
  app.get('/303', (req, res) => {
    res.status(303).send('Redirección: Ver otros');
  });
  
  app.get('/304', (req, res) => {
    res.status(304).send('Redirección: No modificado');
  });
  
  app.get('/305', (req, res) => {
    res.status(305).send('Redirección: Utiliza proxy');
  });
  
  app.get('/306', (req, res) => {
    res.status(306).send('Redirección: Cambiado temporalmente');
  });
  
  app.get('/307', (req, res) => {
    res.status(307).send('Redirección: Redirección temporal');
  });
  
  app.get('/308', (req, res) => {
    res.status(308).send('Redirección: Redirección permanente');
  });
  


// Errores del cliente (4xx)
app.get('/400', (req, res) => {
    res.status(400).send('Error del Cliente: Solicitud Incorrecta');
  });
  
  app.get('/401', (req, res) => {
    res.status(401).send('Error del Cliente: No autorizado');
  });
  
  app.get('/402', (req, res) => {
    res.status(402).send('Error del Cliente: Pago requerido');
  });
  
  app.get('/403', (req, res) => {
    res.status(403).send('Error del Cliente: Prohibido');
  });
  
  app.get('/404', (req, res) => {
    res.status(404).send('Error del Cliente: No encontrado');
  });
  
  app.get('/405', (req, res) => {
    res.status(405).send('Error del Cliente: Método no permitido');
  });
  
  app.get('/406', (req, res) => {
    res.status(406).send('Error del Cliente: No aceptable');
  });
  
  app.get('/407', (req, res) => {
    res.status(407).send('Error del Cliente: Autenticación de proxy requerida');
  });
  
  app.get('/408', (req, res) => {
    res.status(408).send('Error del Cliente: Tiempo de espera de solicitud');
  });
  
  app.get('/409', (req, res) => {
    res.status(409).send('Error del Cliente: Conflicto');
  });
  
  app.get('/410', (req, res) => {
    res.status(410).send('Error del Cliente: Ya no disponible');
  });
  
  app.get('/411', (req, res) => {
    res.status(411).send('Error del Cliente: Longitud requerida');
  });
  
  app.get('/412', (req, res) => {
    res.status(412).send('Error del Cliente: Falló la precondición');
  });
  
  app.get('/413', (req, res) => {
    res.status(413).send('Error del Cliente: Entidad de solicitud demasiado grande');
  });
  
  app.get('/414', (req, res) => {
    res.status(414).send('Error del Cliente: URI demasiado largo');
  });
  
  app.get('/415', (req, res) => {
    res.status(415).send('Error del Cliente: Tipo de medio no soportado');
  });
  
  app.get('/416', (req, res) => {
    res.status(416).send('Error del Cliente: Rango no satisfactorio');
  });
  
  app.get('/417', (req, res) => {
    res.status(417).send('Error del Cliente: Falló la expectativa');
  });
  
  app.get('/418', (req, res) => {
    res.status(418).send('Error del Cliente: Soy una tetera');
  });
  
  app.get('/421', (req, res) => {
    res.status(421).send('Error del Cliente: Se requiere autenticación');
  });
  
  app.get('/422', (req, res) => {
    res.status(422).send('Error del Cliente: Entidad no procesable');
  });
  
  app.get('/423', (req, res) => {
    res.status(423).send('Error del Cliente: Bloqueado');
  });
  
  app.get('/424', (req, res) => {
    res.status(424).send('Error del Cliente: Falló la dependencia');
  });
  
  app.get('/425', (req, res) => {
    res.status(425).send('Error del Cliente: Colección no ordenada');
  });
  
  app.get('/426', (req, res) => {
    res.status(426).send('Error del Cliente: Mejora requerida');
  });
  
  app.get('/428', (req, res) => {
    res.status(428).send('Error del Cliente: Se requiere precondición');
  });
  
  app.get('/429', (req, res) => {
    res.status(429).send('Error del Cliente: Demasiadas solicitudes');
  });
  
  app.get('/431', (req, res) => {
    res.status(431).send('Error del Cliente: Campos de encabezado de solicitud demasiado grandes');
  });
  
  app.get('/451', (req, res) => {
    res.status(451).send('Error del Cliente: No disponible por razones legales');
  });




  // Errores del servidor (5xx)
app.get('/500', (req, res) => {
    res.status(500).send('Error del Servidor: Error interno del servidor');
  });
  
  app.get('/501', (req, res) => {
    res.status(501).send('Error del Servidor: No implementado');
  });
  
  app.get('/502', (req, res) => {
    res.status(502).send('Error del Servidor: Puerta de enlace incorrecta');
  });
  
  app.get('/503', (req, res) => {
    res.status(503).send('Error del Servidor: Servicio no disponible');
  });
  
  app.get('/504', (req, res) => {
    res.status(504).send('Error del Servidor: Tiempo de espera de puerta de enlace');
  });
  
  app.get('/505', (req, res) => {
    res.status(505).send('Error del Servidor: Versión de HTTP no soportada');
  });
  
  app.get('/506', (req, res) => {
    res.status(506).send('Error del Servidor: Variante también negocia');
  });
  
  app.get('/507', (req, res) => {
    res.status(507).send('Error del Servidor: Espacio insuficiente en el almacenamiento');
  });
  
  app.get('/508', (req, res) => {
    res.status(508).send('Error del Servidor: Bucle detectado');
  });
  
  app.get('/510', (req, res) => {
    res.status(510).send('Error del Servidor: No extendido');
  });
  
  app.get('/511', (req, res) => {
    res.status(511).send('Error del Servidor: Requerido autenticación de red');
  });





app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});



