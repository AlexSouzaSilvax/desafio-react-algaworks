import React, { useEffect, useState } from "react";
import LineChart from "../../shared/LineChart";
import AppContainer from "../AppContainer";
import AppHeader from "../AppHeader";
import ShoppingList from "../ShoppingList/ShoppingList";
import { Container, Wrapper } from "./App.styles";
import productsMock from "../../mocks/products.json";
import extractPercentage from "../../utils/extractPercentage";
import Calculator from "../Calculator";

function App() {
  const colors = ["#62CBC6", "#00ABAD", "#00858C", "#005073", "#004D61"];

  const [products, setProducts] = useState(productsMock.products);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newSelectedProducts = products.filter((product) => product.checked);
    setSelectedProducts(newSelectedProducts);
  }, [products]);

  useEffect(() => {
    const total = selectedProducts
      .map((product) => product.price)
      .reduce((a, b) => a + b, 0);
    setTotalPrice(total);
  }, [selectedProducts]);

  function handleToggle(id) {
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
            <ShoppingList
              title="Sua Lista de compras"
              products={selectedProducts}
            />
          }
          right={
            <div>
              estatísticas
              <LineChart
                title={"Saudavel"}
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("healthy")
                  ).length
                )}
                color={colors[0]}
              />
              <LineChart
                title={"Não tão saudavel"}
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("junk")
                  ).length
                )}
                color={colors[1]}
              />
              <LineChart
                title={"Limpeza"}
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("cleaning")
                  ).length
                )}
                color={colors[2]}
              />
              <LineChart
                title={"Outros"}
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("others")
                  ).length
                )}
                color={colors[3]}
              />
              <div style={{ marginTop: 12 }}>
                <h2
                  style={{ fontWeight: 400, fontSize: 12, color: "#00364A" }}
                ></h2>
                previsão de gastos:
                <div style={{ fontSize: 24 }}>
                  {totalPrice.toLocaleString("pt-br", {
                    currency: "BRL",
                    minimumFractionDigits: 2,
                    style: "currency",
                  })}
                </div>
                <Calculator />
              </div>
            </div>
          }
        />
      </Container>
    </Wrapper>
  );
}

export default App;
