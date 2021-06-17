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
export const pinnedList = [
  // { icon: "access_time", label: "Recent" },
  // { icon: "store", label: "Sellers", pageType: VENDORS },
  // { icon: "local_mall", label: "Markets", pageType: MARKETS },
  // { icon: "loyalty", label: "Products", pageType: PRODUCTS },
  // { icon: "access_time", label: "Recent" },
  { name: "Cam Bleck", type: "account", username: "cambleck" },
  {
    name: "Lake Bluff Farmers Market",
    type: "account",
    username: "lbfmarket",
  },
  {
    name: "Walnut Bench",
    type: "product",
    username: "3KA2IONALSOI4",
  },
];
