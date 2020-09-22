import React, { useEffect, useState } from "react";
import LineChart from "../../shared/LineChart";
import AppContainer from "../AppContainer";
import AppHeader from "../AppHeader";
import ShoppingList from "../ShoppingList/ShoppingList";
import { Container, Wrapper } from "./App.styles";
import productsMock from "../../mocks/products.json";

function App() {
  const colors = ["#62CBC6", "#00ABAD", "#00858C", "#005073", "#004D61"];

  const [healty, setHealty] = useState(20);
  const [products, setProducts] = useState(productsMock.products);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const newSelectedProducts = products.filter((product) => product.checked);
    setSelectedProducts(newSelectedProducts);
  }, [products]);

  function handleToggle(id, checked) {
    const newProducts = products.map((product) =>
      product.id === id
        ? {
            ...product,
            checked: !product.checked,
          }
        : product
    );
    setProducts(newProducts);
  }

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={
            <ShoppingList
              title="Produtos disponíveis"
              products={products}
              onToggle={handleToggle}
            />
          }
          middle={
            <ShoppingList title="Sua Lista de compras" products={selectedProducts} />
          }
          right={
            <div>
              estatísticas
              <LineChart
                title={"Saudavel"}
                percentage={healty}
                color={colors[0]}
              />
              <LineChart
                title={"Não tão saudavel"}
                percentage={healty}
                color={colors[1]}
              />
              <LineChart
                title={"Limpeza"}
                percentage={healty}
                color={colors[2]}
              />
              <LineChart
                title={"Outros"}
                percentage={healty}
                color={colors[3]}
              />
            </div>
          }
        />
      </Container>
    </Wrapper>
  );
}

export default App;
