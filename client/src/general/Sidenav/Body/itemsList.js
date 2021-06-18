import {
  HOME,
  EXPLORE,
  PROFILE,
  NOTIFICATIONS,
  SETTINGS,
  INBOX,
  ORDERS,
} from "../../../pages/pageTypes";

export const menuList = [
  { icon: "home", label: "Home", pageType: HOME },
  { icon: "explore", label: "Explore", pageType: EXPLORE },
  { icon: "mail", label: "Inbox (3)", pageType: INBOX },
  {
    icon: "notifications",
    label: "Notifications (4)",
    pageType: NOTIFICATIONS,
  },
  {
    icon: "dehaze",
    label: "Orders",
    pageType: ORDERS,
  },
  { icon: "person", label: "Profile", pageType: PROFILE },
  { icon: "more_horiz", label: "More", pageType: "more" },
];
