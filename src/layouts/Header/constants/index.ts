import {
  HiOutlineEmojiHappy,
  HiOutlineHome,
  HiOutlineMail,
  HiOutlinePuzzle,
} from "react-icons/hi";

import { pagesPath } from "@/libs/$path";

export const NAVIGATION = [
  {
    name: "HOME",
    href: pagesPath.$url(),
    icon: HiOutlineHome,
  },
  {
    name: "ABOUT",
    href: pagesPath.about.$url(),
    icon: HiOutlineEmojiHappy,
  },
  {
    name: "WORKS",
    href: pagesPath.works.$url(),
    icon: HiOutlinePuzzle,
  },
  {
    name: "CONTACT",
    href: pagesPath.contact.$url(),
    icon: HiOutlineMail,
  },
];
