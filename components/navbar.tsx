import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="bg-neutral-900 top-5 text-white flex justify-between items-center px-5 md:px-25 h-[8vh]">
        <div className="logo">
          <h2 className="font-bold text-2xl">
            <Link href={"/"}>🐝 BadFly</Link>
          </h2>
        </div>
        <div className="links">
            <div className="flex gap-10">
              <ul className="flex gap-10">
                <li className="hover:translate-y-[-2px] duration-100">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="hover:translate-y-[-2px] duration-100">
                  <Link href={"/about"}>About</Link>
                </li>
              </ul>
            </div>
        </div>
      </nav>
  )
}
