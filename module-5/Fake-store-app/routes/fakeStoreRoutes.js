const express = require("express");
const router = express.Router();
const controller = require("../controllers/fakeStoreController");

router.get("/products", controller.getAllProducts);
router.get("/categories", controller.getCategories);
router.get("/products/category/:category", controller.getProductsByCategory);

module.exports = router;
