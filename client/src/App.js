import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./theme";
import AuthContext from "./Context/AuthContext";
import useAuth from "./Hooks/useAuth";
import RoutesProvider from "./RoutesProvider/RoutesProvider";

function App() {
  const auth = useAuth();
  const route = RoutesProvider(!!auth.token);

  return (
    <AuthContext.Provider value={auth}>
      <ThemeProvider theme={customTheme}>{route}</ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
