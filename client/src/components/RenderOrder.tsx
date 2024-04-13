import { Order } from "../models/Order";

interface IRenderOrder {
  order: Order;
}

export const RenderOrder = (props: IRenderOrder) => {
  return (
    <div className="bg-white px-3 py-2 border border-black black-shadow mt-2 flex flex-col items-start text-left">
      <p>Order number: {props.order.orderNumber}</p>
      <p>Date: {props.order.date.slice(0, 10)}</p>
      <p>Products: {props.order.products[0].description}</p>
      <p className="self-end mt-2">{props.order.total / 100}:-</p>
    </div>
  );
};
