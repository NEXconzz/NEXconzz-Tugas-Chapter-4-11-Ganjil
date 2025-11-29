import Sidebar from "@/components/sidebar";
import Link from "next/link";

export default function home() {
  return (
    <Sidebar title="Home">

      <div className="p-5">
        <div className="bg-[url('/image/12.jpg')] flex flex-col bg-cover bg-center h-[500px] md:h-[700px] w-full rounded-3xl">

          <div className="flex flex-col h-full w-full px-6 md:px-24 py-20 md:py-40 gap-5">
            <h1 className="text-3xl md:text-6xl text-white font-semibold max-w-[320px] md:max-w-[800px]">
              Finds Most Beautiful Places in the World
            </h1>

            <h3 className="text-sm md:text-xl text-gray-200 max-w-[300px] md:max-w-[600px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolores
              ipsa soluta obcaecati, facere modi nobis.
            </h3>
          </div>

        </div>
      </div>


      <div className="px-10 pt-20">
        <h1 className="text-4xl font-bold mb-18">Popular Tours</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:scale-102 transition">
            <div
              className="h-90 bg-[url('/image/Switzerland.jpg')] bg-cover bg-center relative">
            </div>

            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold  text-2xl">Switzerland Tour</h3>
              <p className="text-gray-500">
                Nikmati perjalanan menelusuri lembah hijau, pegunungan Alpen yang megah,serta danau-danau jernih khas Swiss.
                Tour ini menawarkan pengalaman penuh ketenangan sekaligus petualangan ringan di alam terbuka.
                Cocok untuk kamu yang ingin relaks namun tetap menikmati keindahan alam Eropa yang ikonik.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:scale-102 transition">
            <div
              className="h-90 bg-[url('/image/iceland.jpg')] bg-cover bg-center relative">
            </div>

            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-2xl">Iceland Tour</h3>
              <p className="text-gray-500">
                Petualangan ke Islandia menghadirkan lanskap dramatis dari air terjun besar, gua es, hingga hamparan padang lava yang unik.
                Kamu juga bisa menikmati pemandangan aurora borealis di musim tertentu.
                Tour ini sangat cocok bagi pecinta alam dan eksplorasi destinasi yang tidak biasa.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:scale-102 transition">
            <div
              className="h-90 bg-[url('/image/Russia.jpg')] bg-cover bg-center relative">
            </div>

            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-2xl">Russia tour</h3>
              <p className="text-gray-500">
                Rasakan keindahan Rusia melalui perpaduan budaya, arsitektur klasik, dan suasana kota yang megah.
                Kamu akan menjelajahi tempat bersejarah, alun-alun cantik, serta panorama alam yang luas dan memukau.
                Cocok bagi kamu yang ingin merasakan pengalaman budaya yang kaya dan berbeda.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:scale-102 transition">
            <div
              className="h-90 bg-[url('/image/Canadian.jpg')] bg-cover bg-center relative">
            </div>

            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-2xl">Canadian Tour</h3>
              <p className="text-gray-500">
                Kanada menawarkan pemandangan alam luar biasa, mulai dari pegunungan hingga danau biru jernih yang tenang.
                Kamu bisa menikmati udara segar, hutan luas, dan suasana kota yang modern namun tetap natural.
                Sangat pas untuk kamu yang mencari petualangan sekaligus ketenangan alam.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/berita">
            <button 
            className="mt-20 bg-white text-gray-500 px-12 py-4 rounded-full border-3 border-gray-500 hover:bg-gray-100 transition duration-300 text-lg font-semibold cursor-pointer">
              Load More
            </button>
          </Link>
        </div>

      </div>

    </Sidebar>
  );
}