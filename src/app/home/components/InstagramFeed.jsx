import Instagrampost from "@/components/UI/InstagramPost";
import getInstagramPosts from "@/hooks/getInstagramPosts";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

// ✨ //////////////////////////////

export default async function InstagramFeed() {
  const instagram = await getInstagramPosts();
  return (
    <div className="flex items-center">
      {instagram.data.slice(0, 4).map((post, i) => (
        <Instagrampost post={post} key={i} />
      ))}
    </div>
  );
}
