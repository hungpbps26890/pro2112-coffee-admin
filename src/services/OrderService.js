import axios from "./customized-axios";

export const fetchGetAllOrders = () => axios.get("/api/orders");

export const fetchGetOrderById = (id) => axios.get(`/api/orders/${id}`);

export const putUpdateOrderStatus = (data) =>
  axios.put("/api/orders/order/update-status", data);
