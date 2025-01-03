import { Metadata } from "next";

type ProductProps = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: ProductProps): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Sawant Sites - ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product  ${title}`,
  };
};

export default function ProductDetails({ params }: ProductProps) {
  return <h1>Details about product {params.productId}</h1>;
}
