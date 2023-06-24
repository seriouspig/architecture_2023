import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import millionaires_img from "./assets/images/projects/wwtbam.png";
import grooooaar_img from "./assets/images/projects/grooooaar.gif";
import they_keep_coming_img from "./assets/images/projects/theykeepcoming.gif";
import idefender_img from "./assets/images/projects/idefender.gif";
import threejs from "./assets/images/projects/threejs.gif";
import ward_img from "./assets/images/projects/theward.png";
import dungeon_master from "./assets/images/projects/dungeonmaster.png";
export const pageLinks = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/portfolio",
    text: "contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    url: "https://facebook.com/579628308",
    icon: <FaFacebook />,
  },
  {
    id: 3,
    url: "https://linkedin.com/in/piotr-gryko-85a10077",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://github.com/seriouspig",
    icon: <FaGithub />,
  },
];

export const projects = [
  {
    id: 1,
    url: "https://seriouspig.itch.io/id-efencder",
    image: "https://picsum.photos/id/1018/1000/600/",
    title: "Id-efender",
    info: "A solo project developed as part of my Game Development Course at Edinburgh College. A spin on the 1981 Atari’s classic “Defender”.",
    category: "Games",
  },
  {
    id: 2,
    url: "https://millionaires-c4191.web.app",
    image: "https://picsum.photos/id/1015/1000/600/",
    title: "Millionaires",
    info: "Group project developed during the CodeClan boot camp course. Based on the TV show – 'Who wants to be a millionaire'.",
    category: "Software",
  },
  {
    id: 4,
    url: "https://madbatgames.itch.io/grooooarr",
    image: "https://picsum.photos/id/1019/1000/600/",
    title: "GROOOOARR",
    info: "Another entry for the itch.io Nokia 3310 game jam. Interesting enemy AI. A full-res version for mobile devces is in the works",
    category: "Games",
  },
  {
    id: 5,
    url: "https://seriouspig.itch.io/they-keep-coming",
    image: they_keep_coming_img,
    title: "THEY KEEP COMING",
    info: "A simple game developed for the itch.io Nokia 3310 game jam. The game achieved 10th place out of almost 400 entries. ",
    category: "Games",
  },
  {
    id: 6,
    url: "https://github.com/seriouspig/Dungeon-Master",
    image: dungeon_master,
    title: "DUNGEON MASTER 2D",
    info: "A simple remake of the old DOS classic - Dungeon Master. All done in Vanilla Javascript. A full 3d version using Three.js is in the works",
    category: "Games",
  },
  {
    id: 3,
    url: "https://the-ward-c50f7.web.app/",
    image: ward_img,
    title: "THE WARD",
    info: "Final group project at CodeClan, developed using React.js and Java SpringBoot. Inspired by Bullfrog’s 1997 hit Theme Hospital",
    category: "Games",
  },
  {
    id: 7,
    url: "https://dungeon-crawler-piotr.netlify.app",
    image: threejs,
    title: "DUNGEON MASTER 3D",
    info: "A horror spin on the dungeon crawler genre. Full 3D using Three.js framework",
    category: "Games",
  },
  {
    id: 8,
    url: "https://seriouspig.itch.io/id-efencder",
    image: idefender_img,
    title: "Id-efender",
    info: "A solo project developed as part of my Game Development Course at Edinburgh College. A spin on the 1981 Atari’s classic “Defender”.",
    category: "Games",
  },
  {
    id: 9,
    url: "https://millionaires-c4191.web.app",
    image: millionaires_img,
    title: "Millionaires",
    info: "Group project developed during the CodeClan boot camp course. Based on the TV show – 'Who wants to be a millionaire'.",
    category: "Software",
  },
  {
    id: 10,
    url: "https://madbatgames.itch.io/grooooarr",
    image: grooooaar_img,
    title: "GROOOOARR",
    info: "Another entry for the itch.io Nokia 3310 game jam. Interesting enemy AI. A full-res version for mobile devces is in the works",
    category: "Games",
  },
  {
    id: 11,
    url: "https://seriouspig.itch.io/they-keep-coming",
    image: they_keep_coming_img,
    title: "THEY KEEP COMING",
    info: "A simple game developed for the itch.io Nokia 3310 game jam. The game achieved 10th place out of almost 400 entries. ",
    category: "Games",
  },
  {
    id: 12,
    url: "https://github.com/seriouspig/Dungeon-Master",
    image: dungeon_master,
    title: "DUNGEON MASTER 2D",
    info: "A simple remake of the old DOS classic - Dungeon Master. All done in Vanilla Javascript. A full 3d version using Three.js is in the works",
    category: "Games",
  },
  {
    id: 13,
    url: "https://the-ward-c50f7.web.app/",
    image: ward_img,
    title: "THE WARD",
    info: "Final group project at CodeClan, developed using React.js and Java SpringBoot. Inspired by Bullfrog’s 1997 hit Theme Hospital",
    category: "Games",
  },
  {
    id: 14,
    url: "https://dungeon-crawler-piotr.netlify.app",
    image: threejs,
    title: "DUNGEON MASTER 3D",
    info: "A horror spin on the dungeon crawler genre. Full 3D using Three.js framework",
    category: "Games",
  },
];
