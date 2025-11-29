import { beritalist } from "@/data/berita";
import Link from "next/link";

export default function Berita() {
  return (
    <div className="px-30 py-16 space-y-10">
      <h2 className="text-5xl font-bold ">Top Destination</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {beritalist.map((berita) => (
          <Link key={berita.id} href={`/berita/${berita.id}`}>
            <div className="bg-white rounded-3xl shadow-md overflow-hidden cursor-pointer hover:scale-105 transition">


              <div
                className="h-90 gap-2 bg-cover bg-center"
                style={{ backgroundImage: `url(${berita.image})` }}
              ></div>

              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-2xl">{berita.title}</h3>
                <p className="text-gray-600 text-sm">{berita.deskripsi}</p>
                <p className="text-gray-400 text-xs">{berita.tanggal}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
