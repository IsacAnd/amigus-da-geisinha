import { useState } from "react";
import "../styles/products.css";
import product from "../img/amigurumi.jpg";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";

function Products() {
  const [products, setProducts] = useState([
    {
      title: "Dragão de crochê",
      desc: "Dragão de crochê feito à mão, linha 12 col",
      price: 45,
      available: true,
      favorite: true,
    },
    {
      title: "Urso fofo",
      desc: "Urso de crochê rosa claro feito com linha premium",
      price: 38,
      available: true,
      favorite: true,
    },
    {
      title: "Polvo bebê",
      desc: "Polvo de crochê ideal para berços, feito com linha antialérgica",
      price: 30,
      available: true,
      favorite: false,
    },
    {
      title: "Chaveiro de coração",
      desc: "Mini coração de crochê para chaveiro, diversas cores",
      price: 10,
      available: false,
      favorite: false,
    },
    {
      title: "Gatinho de crochê",
      desc: "Gato cinza feito à mão com olhos bordados",
      price: 42,
      available: true,
      favorite: false,
    },
    {
      title: "Cacto decorativo",
      desc: "Cacto de crochê em vasinho, ótimo para decoração",
      price: 25,
      available: true,
      favorite: false,
    },
    {
      title: "Coelho de Páscoa",
      desc: "Coelhinho de crochê com orelhas grandes e fofas",
      price: 50,
      available: false,
      favorite: false,
    },
  ]);

  function onChangeFavorited(index) {
    setProducts(
      products.map((prod, id) =>
        id === index ? { ...prod, favorite: !prod.favorite } : prod
      )
    );
  }

  return (
    <div className="products-container">
      <div className="products-box">
        <div className="products-header">
          <h2 id="products-title">
            Estes são nossos produtos feitos com carinho 💕!
          </h2>
          <div className="order-products">
            <label htmlFor="category">Ordernar por: </label>
            <select name="category" id="select-categories">
              <option value="lowest-price">Menor preço</option>
              <option value="highest-price">Maior preço</option>
              <option value="rating">Avalição</option>
            </select>
          </div>
        </div>
        <div className="products-body">
          {products.map((prod, index) => (
            <div key={index} className="card-item">
              <div className="product-img">
                <img src={product} alt="" />
              </div>
              <div className="product-description">
                <div className="prod-title">
                  <h4>{prod.title}</h4>
                  <button onClick={() => onChangeFavorited(index)}>
                    <Heart className={prod.favorite && "favorited"} size={20} />
                  </button>
                </div>
                <div className="prod-info">
                  <h4>R${prod.price}</h4>
                  <p>{prod.desc}</p>
                </div>
                <div className="prod-action">
                  <button>
                    Adicionar ao carrinho
                    <ShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
