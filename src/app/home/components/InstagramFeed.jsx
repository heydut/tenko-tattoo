import getInstagramPosts from "@/hooks/getInstagramPosts";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

// ✨ //////////////////////////////

export default async function InstagramFeed() {
  const instagram = await getInstagramPosts();
  return (
    <div className="flex">
      {instagram.data.slice(0, 4).map((post) => (
        <Link
          href={post.permalink}
          key={post.id}
          target="_blank"
          className="relative group overflow-hidden"
        >
          <div className="absolute z-20 h-full w-full flex items-center justify-center opacity-0 group-hover:opacity-100 my-transition bg-neutral-800/70">
            <FaInstagram className="h-20 w-auto text-neutral-300" />
          </div>
          <div>
            {(post.media_type === "IMAGE" ||
              (post.media_type === "CAROUSEL_ALBUM" && post.media_url)) && (
              <Image
                src={post.media_url}
                alt={post.caption}
                width={500}
                height={500}
                className="group-hover:blur-[2px] my-transition aspect-square object-cover"
              />
            )}

            {post.media_type === "VIDEO" && (
              <video
                controls
                width={500}
                height={500}
                className="aspect-square object-cover"
              >
                <source src={post.media_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
