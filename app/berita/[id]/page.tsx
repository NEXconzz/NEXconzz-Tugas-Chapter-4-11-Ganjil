import { beritalist } from '@/data/berita';
import Link from 'next/link';
type Props = Promise<{
  id: string;
}>;
export default async function BeritaDetailPage({ params }: { params: Props }) {
  const { id } = await params;
  const berita = beritalist.find((b) => b.id === id);
  return (
    <div className="px-40 py-20">

      <h1 className="text-4xl font-bold">{berita?.title}</h1>

      <img
        src={berita?.image}
        alt={berita?.title}
        className="mt-4 rounded-xl"
      />
      <div className="p-4 flex flex-col gap-2">
        <p className="text-gray-800 font-semibold text-m max-w-[300px] md:max-w-[700px]">{berita?.isi}</p>
        <p className="text-gray-400 text-xs">{berita?.tanggal}</p>
      </div>

      <Link href="/berita" className="text-blue-500 hover:underline">
      <button className="mt-6 px-5 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition cursor-pointer">
        &larr; Back
      </button>
      </Link>
    </div>
  );
}