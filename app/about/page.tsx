import Navbar from "@/components/navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar/>
      <main className="bg-neutral-950 min-h-[92vh]">
        <div className="text-center space-y-5 py-20">
          <h2 className="font-bold text-white text-5xl">🐝BadFly</h2>
          <p className="text-gray-200">Your go-to link shortening app</p>
        </div>
        <div className="text-white text-base md:text-xl text-justify flex flex-col space-y-5 md:space-y-20 leading-10 max-w-[80%] lg:max-w-[40%] mx-auto">
            <p><strong>🐝BadFly</strong> is a my attempt & tribute to the O.G Adf.ly, built as a personal side project to explore and learn key features of Next.js—such as server actions, dynamic routing, and pagination—while integrating MongoDB for data management. It’s a simple URL shortener app designed not just for functionality but as a hands-on learning experience in full-stack development with modern tools.</p>
            <hr className="border border-gray-600 w-[50%] mx-auto"/>
            <p className="text-center">~ Maaz</p>
        </div>
      </main>
    </>
  );
}
