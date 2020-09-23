import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Wrapper } from "./App.styles";

import LineChart from "../../shared/LineChart";

import AppContainer from "../AppContainer";
import AppHeader from "../AppHeader";
import ShoppingList from "../ShoppingList/ShoppingList";
import Calculator from "../Calculator";

import {
  selectAllProducts,
  selectSelectedProducts,
  selectSelectedProductTotalPrice,
} from "../../store/Products/Products.selectors";

import { toggleProduct } from "../../store/Products/Products.actions";

import extractPercentage from "../../utils/extractPercentage";

function App() {
  const dispatch = useDispatch();
  const colors = ["#62CBC6", "#00ABAD", "#00858C", "#005073", "#004D61"];

  const products = useSelector(selectAllProducts);
  const selectedProducts = useSelector(selectSelectedProducts);
  const totalPrice = useSelector(selectSelectedProductTotalPrice);

  function handleToggle(id) {
    dispatch(toggleProduct(id));
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
                <h2 style={{ fontWeight: 400, fontSize: 12, color: "#00364A" }}>
                  previsão de gastos:
                </h2>
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
