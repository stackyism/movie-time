import React from "react";
import { Container } from "./container";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, createLightTheme } from "baseui";

const engine = new Styletron();
const lightTheme = createLightTheme({  }, {colors : {contentPrimary : '#000'}})

const App = () => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider
        theme={lightTheme}
        overrides={{
          AppContainer: { style: { height: "100%", width: "100%" } },
        }}
      >
        <Container />
      </BaseProvider>
    </StyletronProvider>
  );
};

export default App;
