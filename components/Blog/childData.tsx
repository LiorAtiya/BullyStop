import { Blog } from "@/types/blog";

const childData: Blog[] = [
  {
    id: 1,
    title: "שאלונים",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/graph.jpeg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "משחקים",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/tools.jpeg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
];
export default childData;
