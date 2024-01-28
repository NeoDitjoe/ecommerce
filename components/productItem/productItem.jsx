import Image from "next/image";
import Link from "next/link";


export default function ProductItem(props){

  const { image, name, slug, brand, price } = props.product
  return(
    <div>
      <figure>
        <Link href={`/product/${slug}`}>
          <Image
            src={image}
            alt={name}
            width={'100px'}
            height={'100px'}
          />
        </Link>
      </figure>

      <div>
        <Link href={`/product/${slug}`}>
          {name}
        </Link>
        <p>{brand}</p>
        <div>
          <span>R{price}</span>
        </div>
      </div>
    </div>
  )
}