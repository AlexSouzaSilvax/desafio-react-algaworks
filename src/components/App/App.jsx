import React, { useState } from "react";
import Checkbox from "../../shared/Checkbox";
import LineChart from "../../shared/LineChart";
import AppContainer from "../AppContainer";
import AppHeader from "../AppHeader";
import { Container, Wrapper } from "./App.styles";

function App() {
  const [visibleCheck1, setVisibleCheck1] = useState(false);
  const [visibleCheck2, setVisibleCheck2] = useState(false);

  const [healty, setHealty] = useState(20);

  const colors = ["#62CBC6", "#00ABAD", "#00858C", "#005073", "#004D61"];

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={
            <div>
              produtos disponíveis
              <Checkbox
                title={"Alface"}
                value={visibleCheck1}
                onClick={() => {
                  setVisibleCheck1(!visibleCheck1);
                  setHealty(healty + 10);
                }}
              />
            </div>
          }
          middle={
            <div>
              sua lista de compras
              <Checkbox
                title={"Arroz"}
                value={visibleCheck2}
                onClick={() => {
                  setVisibleCheck2(!visibleCheck2);
                  setHealty(healty - 10);
                }}
              />
            </div>
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
