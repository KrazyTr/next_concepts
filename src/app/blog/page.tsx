import { Metadata } from "next";

const titleName = "Saurabh";
export const metadata: Metadata = {
  title: {
    absolute: `${titleName}`,
  },
};

export default function Blog() {
  return <h1>My blog</h1>;
}
