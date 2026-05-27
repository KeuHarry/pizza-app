import React from "react";
import ReactDOM from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", null, [
    React.createElement("h1", null, props.name || "Pepperoni Pizza"),
    React.createElement(
      "p",
      null,
      props.description ||
        "A delicious pepperoni pizza with a crispy crust and melted cheese.",
    ),
  ]);
};

const App = () => {
  return React.createElement("div", null, [
    React.createElement("h1", null, "Welcome to the Pizza App!"),
    React.createElement(Pizza, {
      name: "Margherita Pizza",
      description:
        "A classic pizza with fresh tomatoes, mozzarella cheese, and basil.",
    }),
    React.createElement(Pizza, {
      name: "Veggie Delight",
      description:
        "A healthy pizza loaded with fresh vegetables and a tangy tomato sauce.",
    }),
    React.createElement(Pizza, {
      name: "Meat Lovers",
      description:
        "A hearty pizza with a variety of meats and a rich, savory sauce.",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian Paradise",
      description: "A tropical pizza with ham, pineapple, and a sweet glaze.",
    }),
    React.createElement(Pizza, {
      name: "Four Cheese Blast",
      description:
        "A creamy pizza with a blend of four different cheeses and a hint of garlic.",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
