import React, { useState } from "react";
import Checkbox from "../../shared/Checkbox/Checkbox";
import AppContainer from "../AppContainer/AppContainer";
import AppHeader from "../AppHeader";
import { Container, Wrapper } from "./App.styles";

function App() {
  const [visibleCheck1, setVisibleCheck1] = useState(false);
  const [visibleCheck2, setVisibleCheck2] = useState(false);
  const [visibleCheck3, setVisibleCheck3] = useState(false);

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
                onClick={() => setVisibleCheck1(!visibleCheck1)}
              />
            </div>
          }
          middle={
            <div>
              sua lista de compras
              <Checkbox
                title={"Arroz"}
                value={visibleCheck2}
                onClick={() => setVisibleCheck2(!visibleCheck2)}
              />
            </div>
          }
          right={
            <div>
              estatísticas
              <Checkbox
                title={"Carne"}
                value={visibleCheck3}
                onClick={() => setVisibleCheck3(!visibleCheck3)}
              />
            </div>
          }
        />
      </Container>
    </Wrapper>
  );
}

export default App;
