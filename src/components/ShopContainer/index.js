import { useReducer } from "react";
import "./index.css";

const initialState = {
  pair1CardClicked: false,
  pair2CardClicked: false,
  pair3CardClicked: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "firstCardClicked":
      return {
        pair1CardClicked: true,
        pair2CardClicked: false,
        pair3CardClicked: false
      };
    case "secondCardClicked":
      return {
        pair1CardClicked: false,
        pair2CardClicked: true,
        pair3CardClicked: false
      };
    case "thirdCardClicked":
      return {
        pair1CardClicked: false,
        pair2CardClicked: false,
        pair3CardClicked: true
      };
    default:
      return initialState;
  }
};

function ShopContainer() {
  const [curState, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="shop-container">
      <h1 className="card-heading">Bundle and Save</h1>
      <div
        className={`card ${curState.pair1CardClicked ? "selected-card" : ""}`}
      >
        <div className="card-details">
          <input
            type="radio"
            name="card"
            onChange={() => dispatch({ type: "firstCardClicked" })}
            className="radio-input"
          />
          <div className="card-item">
            <p className="pair-count">1 Pair</p>
            <div className="price-dkk-container">
              <p className="price-details">DKK 195.00</p>
              {curState.pair1CardClicked && (
                <p className="old-price">DKK 200</p>
              )}
            </div>
          </div>
          <div>
            {curState.pair1CardClicked && (
              <p className="statement">Most Popular</p>
            )}

            <p className="offer">50% OFF </p>
          </div>
        </div>
        {curState.pair1CardClicked && (
          <div className="select-div">
            <div className="size-color-div">
              <p className="size-heading">Size</p>
              <div className="select-bar-div">
                <p>#1</p>
                <select className="drop-down">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>
            <div className="size-color-div">
              <p className="color-heading">Colour</p>
              <div className="select-bar-div">
                <select className="drop-down">
                  <option>Black</option>
                  <option>Sandle</option>
                  <option>Ash</option>
                  <option>Green</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`card ${curState.pair2CardClicked ? "selected-card" : ""}`}
      >
        <div className="card-details">
          <input
            type="radio"
            name="card"
            onChange={() => dispatch({ type: "secondCardClicked" })}
            className="radio-input"
            checked={curState.pair2CardClicked}
          />
          <div className="card-item">
            <p className="pair-count">2 Pair</p>
            <div className="price-dkk-container">
              <p className="price-details">DKK 345.00</p>
              {curState.pair2CardClicked && (
                <p className="old-price">DKK 195.00</p>
              )}
            </div>
          </div>
          <div>
            {curState.pair2CardClicked && (
              <p className="statement">Most Popular</p>
            )}

            <p className="offer">40% OFF </p>
          </div>
        </div>
        {curState.pair2CardClicked && (
          <div className="select-div">
            <div className="size-color-div">
              <p className="size-heading">Size</p>
              <div className="select-bar-div">
                <p>#1</p>
                <select className="drop-down">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
              <div className="select-bar-div">
                <p>#2</p>
                <select className="drop-down">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>
            <div className="size-color-div">
              <p className="color-heading">Colour</p>
              <div className="select-bar-div">
                <select className="drop-down">
                  <option>Black</option>
                  <option>Sandle</option>
                  <option>Ash</option>
                  <option>Green</option>
                </select>
              </div>
              <div className="select-bar-div">
                <select className="drop-down">
                  <option>Black</option>
                  <option>Sandle</option>
                  <option>Ash</option>
                  <option>Green</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`card ${curState.pair3CardClicked ? "selected-card" : ""}`}
      >
        <div className="card-details">
          <input
            type="radio"
            name="card"
            onChange={() => dispatch({ type: "thirdCardClicked" })}
            className="radio-input"
            checked={curState.pair3CardClicked}
          />
          <div className="card-item">
            <p className="pair-count">3 Pair</p>
            <div className="price-dkk-container">
              <p className="price-details">DKK 528.00</p>
              {curState.pair3CardClicked && (
                <p className="old-price">DKK 420.00</p>
              )}
            </div>
          </div>
          <div>
            {curState.pair3CardClicked && (
              <p className="statement">Most Popular</p>
            )}

            <p className="offer">60% OFF </p>
          </div>
        </div>
        {curState.pair3CardClicked && (
          <div className="select-div">
            <div className="size-color-div">
              <p className="size-heading">Size</p>
              <div className="select-bar-div">
                <p>#1</p>
                <select className="drop-down">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
              <div className="select-bar-div">
                <p>#2</p>
                <select className="drop-down">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
              <div className="select-bar-div">
                <p>#3</p>
                <select className="drop-down">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>
            <div className="size-color-div">
              <p className="color-heading">Colour</p>
              <div className="select-bar-div">
                <select className="drop-down">
                  <option>Black</option>
                  <option>Sandle</option>
                  <option>Ash</option>
                  <option>Green</option>
                </select>
              </div>
              <div className="select-bar-div">
                <select className="drop-down">
                  <option>Black</option>
                  <option>Sandle</option>
                  <option>Ash</option>
                  <option>Green</option>
                </select>
              </div>
              <div className="select-bar-div">
                <select className="drop-down">
                  <option>Black</option>
                  <option>Sandle</option>
                  <option>Ash</option>
                  <option>Green</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="total-price-container">
        <p className="statement">Free 2 Day Shipping</p>
        {curState.pair1CardClicked && (
          <p className="total-price">Total: DKK 195.00</p>
        )}
        {curState.pair2CardClicked && (
          <p className="total-price">Total: DKK 360.00</p>
        )}
        {curState.pair3CardClicked && (
          <p className="total-price">Total: DKK 528.00</p>
        )}
      </div>
      <button className="add-card-btn">+ Add to Cart</button>
    </div>
  );
}

export default ShopContainer;
