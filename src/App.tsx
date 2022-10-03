import { useState } from "react";
import SideBar from "./components/SideBar";
import classsName from "classnames";
import "./App.scss";

type AppState = {
  showNav: boolean;
};

const App = () => {
  const [state, setState] = useState<AppState>({
    showNav: true,
  });

  const handleSideBarNav = () => {
    setState((prev) => ({
      ...prev,
      showNav: !prev.showNav,
    }));
  };

  const marginPage = classsName("main", { "!ml-64 ": state.showNav });

  return (
    <div>
      <SideBar handleSideBarNav={handleSideBarNav} showNav={state.showNav} />
      <div className={marginPage}>Pageaaaaaaaaaaaaaaaaaaaaaa</div>
    </div>
  );
};

export default App;
