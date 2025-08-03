import URLShorteningContainer from "@/components/url-shortening-container";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="bg-gray-800 top-5 text-white flex justify-between items-center px-5 md:px-25 h-[70px]">
        <div className="logo">
          <h2 className="font-bold text-2xl">
            <Link href={"/"}>BadFly</Link>
          </h2>
        </div>
        <div className="links">
          <ul className="flex gap-10">
            <li className="hover:translate-y-[-2px] duration-100">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:translate-y-[-2px] duration-100">
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <div className="text-center space-y-5 my-20">
          <h2 className="font-bold text-5xl">🐝BadFly</h2>
          <p className="text-gray-500">Your go-to link shortening app</p>
        </div>
        <div className="flex justify-center">
        <URLShorteningContainer/>

        </div>
      </main>
    </>
  );
}
