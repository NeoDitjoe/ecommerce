import Image from "next/image";
import { DummyProducts } from "@/lib/data";
import ProductItem from "@/components/productItem/productItem";

export default function Home() {
  return (
      <main>
        <h2>Latest Products</h2>

        <div>
          {
            DummyProducts.map((product) => (
              <ProductItem
                product = {product}
              />
            ))
          }
        </div>
      </main>
  );
}
