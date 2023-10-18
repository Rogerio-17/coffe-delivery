import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"

function App() {


  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <div>oi moundo</div>
      <GlobalStyle/>
      </ThemeProvider>
    </div>
  )

}

export default App
