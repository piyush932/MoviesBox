import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Mainroutes from "./routes/Mainroutes";
import ThemeContext from "./context/ThemeContext";
import { useContext, useEffect } from "react";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const userTheme = localStorage.getItem("app-theme");
    if (userTheme != null) {
      setTheme(userTheme);
    }
  }, []);
  return (
      <div id="app-wrapper" data-theme={theme}>
        <Navbar />
        <Mainroutes />
      </div>
  );
}

export default App;
