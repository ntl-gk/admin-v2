import classNames from "classnames";
import { useCallback } from "react";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { NavItem, navList } from "../../../constants/nav";
import "./styles.scss";
import { Props } from "./types";

const NavList: React.FC<Props> = ({ currentNavRoute, selectNav }) => {
  const activeClassname = useCallback(
    (classname: string, key: string, isSub: boolean): string => {
      const checkActive = currentNavRoute.split("/").includes(key);
      return classNames(classname, {
        "active-arrow": checkActive,
        "text-[#f87339]": checkActive,
        "!bg-white": isSub,
      });
    },
    [currentNavRoute]
  );

  const activeChildClassname = useCallback(
    (classname: string, key: string): string => {
      const checkActive = currentNavRoute.split("/").includes(key);
      return classNames(classname, {
        '!flex': checkActive,
      });
    },
    [currentNavRoute]
  );

  const renderNavItem = (
    item: NavItem,
    path: string,
    classname = "ml-1",
    isSub = false
  ): React.ReactElement => {
    const { label, icon, childNav, key } = item;
    return (
      <div key={key} className="cursor-pointer nav-item">
        <div
          className={activeClassname(
            "flex flex-row h-13 p-2 items-center rounded-sm hover:!bg-[#f7dc54] group",
            key,
            isSub
          )}
          onClick={() => selectNav(path || key, key)}
        >
          {!isSub ? (
            icon
          ) : (
            <FaCircle
              className="dot-icon absolute left-7 text-[#f87339] invisible group-hover:visible"
              size={7}
            />
          )}
          <span className={`ml-1 font-semibold text-lg ${classname}`}>
            {label}
          </span>
          {!isSub && (
            <IoIosArrowBack className="ml-auto nav-arrow text-black" />
          )}
        </div>
        <div className={activeChildClassname("flex-col hidden", key)}>
          {childNav.map((e) =>
            renderNavItem(e, `${path}/${e.key}`, "ml-9", true)
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="py-1">{navList.map((e) => renderNavItem(e, e.key))}</div>
  );
};

export default NavList;
