import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components";

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Header></Header>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
