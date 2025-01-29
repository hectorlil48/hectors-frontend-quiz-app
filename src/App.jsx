import useLocalStorage from "use-local-storage";
import NavBar from "./components/NavBar";
import StartMenu from "./pages/StartMenu";

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <div className="container">
        <NavBar isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
        <StartMenu />
      </div>
    </div>
  );
}

export default App;
