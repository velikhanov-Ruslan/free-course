import { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { TestPageAsync } from "./pages/TestPage/TestPageAsync";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>set theme</button>
      <Link to={"/"}>main</Link>
      <Link to={"/about"}>to About</Link>
      <Link to={"/test"}>to Test</Link>
      <Suspense fallback={<div>Loading chunk...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/test"} element={<TestPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
