import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import NavBar from "./components/NavBar";
import StartMenu from "./pages/StartMenu";

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <Router basename="/hectors-frontend-quiz-app">
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <div className="container">
          <NavBar isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
          <Routes>
            <Route path="/" element={<StartMenu />} />
            {/* <Route path="/quiz/:title" element={<QuizPage />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
