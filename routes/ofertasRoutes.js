const express = require("express");
const {
  getOfertas,
  getOfertasByLevel,
  postOfertas,
  getOfertasByKind,
  getOfertasByPrice,
  getOfertasOrderByCourse,
} = require("../controllers/ofertasControllers");

const router = express.Router();

router.get("/", getOfertas);
router.get("/kind/:kind", getOfertasByKind);
router.get("/price/:firstPrice/:secondPrice", getOfertasByPrice);
router.get("/level/:level", getOfertasByLevel);
router.get("/course", getOfertasOrderByCourse);
router.post("/", postOfertas);

module.exports = router;
