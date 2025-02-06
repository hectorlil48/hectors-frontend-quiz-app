import useLocalStorage from "use-local-storage";
import NavBar from "./components/NavBar";
import StartMenu from "./pages/StartMenu";
import QuizPage from "./pages/QuizPage";
import Results from "./pages/Results";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const [quizData, setQuizData] = useLocalStorage("quizData", null);
  const [score, setScore] = useState(0);
  const [quizTitle, setQuizTitle] = useLocalStorage("quizTitle", "");
  const [quizIcon, setQuizIcon] = useLocalStorage("quizIcon", "");

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <div className="container">
        <NavBar
          isChecked={isDark}
          quizTitle={quizTitle}
          quizIcon={quizIcon}
          handleChange={() => setIsDark(!isDark)}
        />
        {!quizData ? (
          <StartMenu
            setQuizData={setQuizData}
            setQuizTitle={setQuizTitle}
            setQuizIcon={setQuizIcon}
          />
        ) : quizData.completed ? (
          <Results />
        ) : (
          <QuizPage
            quizData={quizData}
            setQuizData="setQuizData"
            setScore="setScore"
          />
        )}
      </div>
    </div>
  );
}

export default App;
