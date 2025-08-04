import Navbar from "@/components/navbar";
import URLShorteningContainer from "@/components/url-shortening-container";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="bg-neutral-950 min-h-[92vh]">
        <div className="text-center space-y-5 py-10">
          <h2 className="font-bold text-white text-5xl">🐝BadFly</h2>
          <p className="text-gray-200">Your go-to link shortening app</p>
        </div>
        <div className="flex justify-center">
          <URLShorteningContainer />
        </div>
      </main>
    </>
  );
}
