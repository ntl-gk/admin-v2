import { AiOutlineDatabase } from "react-icons/ai";
import { GiSmartphone } from "react-icons/gi";

export type NavItem = {
  label: string;
  key: string;
  icon: React.ReactElement | null;
  childNav: NavItem[];
};

export const navList: NavItem[] = [
  {
    label: "Sản phẩm",
    key: "product",
    icon: <GiSmartphone size={25} />,
    childNav: [
      {
        label: "Danh mục",
        key: "test",
        icon: null,
        childNav: [],
      },
    ],
  },
  {
    label: "Thông số kỹ thuật",
    key: "productSpec",
    icon: <AiOutlineDatabase size={25} />,
    childNav: [
      {
        label: "Danh mục",
        key: "specCate",
        icon: null,
        childNav: [],
      },
      {
        label: "Thông số",
        key: "spec",
        icon: null,
        childNav: [],
      },
      {
        label: "Thông tin thông số",
        key: "specValue",
        icon: null,
        childNav: [],
      },
    ],
  },
];
