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
  { label: "About", pageType: HISTORY },
  { label: "Services", pageType: SERVICES },
  {
    label: "Projects",
    pageType: PROJECTS,
  },

  { label: "Contact", pageType: CONTACT },
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
