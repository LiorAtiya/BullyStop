import { Blog } from "@/types/blog";

const parentData: Blog[] = [
  {
    id: 1,
    title: "מעקב תלמיד",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/graph.jpeg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/graph.jpeg",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "כלים",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/tools.jpeg",
    author: {
      name: "Musharof Chy",
      image: "/images/tools.jpeg",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "חומר קריאה",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/read.jpeg",
    author: {
      name: "Lethium Deo",
      image: "/images/read.jpeg",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default parentData;
