import "../styles/orders.css";
import order1 from "../img/order1.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Star } from "lucide-react";

function Orders() {
  return (
    <div className="orders-container">
      <div className="orders-header">
        <h2>
          Ainda não encontrou o que procura? Você ainda pode encomendar um
          produto!!
        </h2>
      </div>
      <div className="orders-body-exemples">
        <button className="switch-order">
          <ChevronLeft />
        </button>
        <div className="order-img">
          <img src={order1} alt="order1" />
        </div>
        <div className="order-desc">
          <div className="ordered-desc">
            <h3>Encomenda:</h3>
            <p>
              "Quero um amigurumi Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sunt labore quaerat optio nisi nesciunt dolore
              tempore asperiores, tempora inventore beatae? Repellendus vel
              illum iste. Consequuntur, eaque. Cumque porro eveniet expedita!"
            </p>
          </div>
          <div className="order-rating">
            <h3>Avaliação:</h3>
            <p>
              "Quero um amigurumi Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sunt labore quaerat optio nisi nesciunt dolore
              tempore asperiores, tempora inventore beatae? Repellendus vel
              illum iste. Consequuntur, eaque. Cumque porro eveniet expedita!"
            </p>
            <div className="rating-stars">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
        </div>
        <button className="switch-order">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Orders;
