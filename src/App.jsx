import useLocalStorage from "use-local-storage";
import NavBar from "./components/NavBar";
import StartMenu from "./pages/StartMenu";
import QuizPage from "./pages/QuizPage";
import Results from "./pages/Results";

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const [quizData, setQuizData] = useLocalStorage("quizData", null);
  const [score, setScore] = useLocalStorage("score", 0);
  const [quizTitle, setQuizTitle] = useLocalStorage("quizTitle", "");
  const [quizIcon, setQuizIcon] = useLocalStorage("quizIcon", "");

  const handleRestart = () => {
    setQuizData(null);
    setQuizTitle(null);
    setScore(0);
  };

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"} role="main">
      <div className="container">
        <NavBar
          isChecked={isDark}
          quizTitle={quizTitle}
          quizIcon={quizIcon}
          handleChange={() => setIsDark(!isDark)}
          handleRestart={handleRestart}
          role="navigation"
        />
        {!quizData ? (
          <StartMenu
            setQuizData={setQuizData}
            setQuizTitle={setQuizTitle}
            setQuizIcon={setQuizIcon}
          />
        ) : quizData.completed ? (
          <Results
            score={score}
            totalQuestions={quizData.questions.length}
            quizTitle={quizTitle}
            quizIcon={quizIcon}
            handleRestart={handleRestart}
          />
        ) : (
          <QuizPage
            quizData={quizData}
            setQuizData={setQuizData}
            setScore={setScore}
          />
        )}
      </div>
    </div>
  );
}

export default App;
