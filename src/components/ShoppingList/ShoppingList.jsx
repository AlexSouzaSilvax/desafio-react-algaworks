import React from "react";
import Checkbox from "../../shared/Checkbox";
import { Wrapper, Title, Array } from "./ShoppingList.styles";

function ShoppingList({ title, products, onToggle }) {
  const lista = products.map((product) => {
    return <Checkbox value={product.checked} title={product.name} onClick={() => onToggle(product.id, product.checked)} />;
  });

  return (
    <Wrapper>
      <Title>{title}:</Title>
      <Array>{lista}</Array>
    </Wrapper>
  );
}

export default ShoppingList;