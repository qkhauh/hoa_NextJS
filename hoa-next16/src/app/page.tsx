import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/facebook">facebook</Link>
        </li>
        <li>
          <Link href="/youtube">Youtube</Link>
        </li>
        <li>
          <Link href="/instagram">Instagram</Link>
        </li>
      </ul>
    </div>
  );
}

