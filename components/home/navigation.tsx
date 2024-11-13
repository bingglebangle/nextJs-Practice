import "../../style/home/navigation.css";
import Link from "next/link";

export default function navigation() {
  return (
    <div className="container">
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/movie">
          <li>Movie</li>
        </Link>
        <Link href="/AboutUs">
          <li>About us</li>
        </Link>
      </ul>
    </div>
  );
}
