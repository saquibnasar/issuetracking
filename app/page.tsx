import Link from "next/link";
import ProductCard from "./components/ProductCard";
import UserPage from "./users/page";

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      <Link href="/users">user</Link>
      <ProductCard />
    </main>
  );
}
