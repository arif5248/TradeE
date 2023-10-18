const express = require("express");
const { isAuthenticatedUser, isAuthorizeRoles } = require("../middleware/auth");
const {
  newOrder,
  getSingleOrderDetails,
  myOrderDetails,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/order/:id").get(isAuthenticatedUser, getSingleOrderDetails);

router.route("/orders/me").get(isAuthenticatedUser, myOrderDetails);

router
  .route("/admin/orders")
  .get(isAuthenticatedUser, isAuthorizeRoles("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, isAuthorizeRoles("admin"), updateOrder)
  .delete(isAuthenticatedUser, isAuthorizeRoles("admin"), deleteOrder);

module.exports = router;
