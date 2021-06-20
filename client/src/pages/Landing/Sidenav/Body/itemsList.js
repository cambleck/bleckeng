import {
  HOME,
  BIDDING,
  CONTACT,
  HISTORY,
  PEOPLE,
  PROJECTS,
  RECENT,
  SERVICES,
} from "../../../pageTypes";

import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const menuList = [
  { icon: "home", label: "Home", pageType: HOME },
  { icon: "explore", label: "History", pageType: HISTORY },
  { icon: "mail", label: "Services", pageType: SERVICES },
  {
    icon: "notifications",
    label: "Projects",
    pageType: PROJECTS,
  },
  {
    icon: "dehaze",
    label: "Recent",
    pageType: RECENT,
  },
  { icon: "person", label: "People", pageType: PEOPLE },
  { icon: "more_horiz", label: "Contact", pageType: CONTACT },
  { icon: "more_horiz", label: "Bidding", pageType: BIDDING },
];

export const socialList = [
  { icon: <FaInstagram size={20} />, label: "@bleckengineering", href: "" },
  { icon: <FaTwitter size={20} />, label: "@BleckEngineer", href: "" },
  {
    icon: <FaLinkedin size={20} />,
    label: "@bleck-engineering-co-inc",
    href: "",
  },
];
