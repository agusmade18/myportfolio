import {
  FcFactory,
  FcBusinessman,
  FcTimeline,
  FcPhoneAndroid,
} from "react-icons/fc";

const menus = [
  { name: "Home", icon: <FcFactory />, link: "home" },
  { name: "Profile", icon: <FcBusinessman />, link: "profile" },
  { name: "Portfolio", icon: <FcTimeline />, link: "portfolio" },
  { name: "Contact", icon: <FcPhoneAndroid />, link: "contact" },
];

export default menus;
