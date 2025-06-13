import Image from "next/image";

export default function MediaSidebar() {
  return (
    <div className="fixed left-4 top-20 transform -translate-y-1/2 z-10 hidden lg:block">
      <Image
        src="/images/media.svg"
        alt="Social media links"
        width={32}
        height={311}
        className="opacity-80 hover:opacity-100 transition-opacity"
      />
    </div>
  );
}
