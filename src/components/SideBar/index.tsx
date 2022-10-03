import classNames from "classnames";
import { useCallback, useState } from "react";
import { FaBars } from "react-icons/fa";
import NavList from "./NavList";
import "./styles.scss";
import { Props, State } from "./types";

const SideBar: React.FC<Props> = ({ showNav, handleSideBarNav }) => {
  const [state, setState] = useState<State>({
    currentNavRoute: "",
    selectedNav: "",
  });

  const sidebarClassname: string = classNames("side-bar", {
    "hide-navbar": !showNav,
  });

  const selectNav = useCallback((route: string, selected: string) => {
    setState((prev: State) => ({
      ...prev,
      currentNavRoute: prev.currentNavRoute === route ? "" : route,
      selectedNav: selected || "",
    }));
  }, []);

  return (
    <div className={sidebarClassname}>
      <div className="relative h-12 bg-gk-yellow flex">
        <FaBars
          size={25}
          className="cursor-pointer absolute right-3 top-3"
          onClick={() => handleSideBarNav()}
        />
        <span className="ml-5 my-auto font-bold text-2xl">GK Dashboard</span>
      </div>
      <NavList selectNav={selectNav} currentNavRoute={state.currentNavRoute} />
    </div>
  );
};

export default SideBar;
