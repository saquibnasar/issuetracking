import AddToCart from "./AddToCart";
import style from "./productCad.module.css";
export default function ProductCard() {
  return (
    <div className={style.cardContainer}>
      ProductCard
      <AddToCart />
    </div>
  );
}
