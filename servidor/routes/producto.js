//Rutas para productos

const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

//api/productos
router.post("/", productoController.crearProducto);
router.get("/", productoController.obtenerProductos);
router.get("/:id", productoController.obtenerProducto);
router.put("/:id", productoController.actualizarProducto);
router.delete("/:id", productoController.eliminarProducto);



module.exports = router;