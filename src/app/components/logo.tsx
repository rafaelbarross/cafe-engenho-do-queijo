import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        width={40}
        height={40}
        alt="logo engenho do queijo"
        src="/logo.png"
      />
      <div className="flex flex-col justify-center">
        <span className="text-xs font-bold uppercase text-yellow-600 leading-[1.5] drop-shadow-2xl">
          COFFEE SHOP{" "}
        </span>
        <span className="text-xl font-bold uppercase text-red-700 leading-3 border-orange-600 drop-shadow-2xl">
          Engenho do Queijo
        </span>
      </div>
    </Link>
  );
}
