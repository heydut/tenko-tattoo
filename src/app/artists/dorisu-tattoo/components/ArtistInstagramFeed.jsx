import Instagrampost from "@/components/UI/InstagramPost";

// ✨ //////////////////////////////

export default async function ArtistInstagramFeed() {
  const instagram = await getInstagramPosts();
  return (
    <div className="flex max-md:flex-col gap-4">
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        <div className="col-span-2 row-span-2">
          <Instagrampost post={instagram.data[0]} />
        </div>
        <div className="col-start-3">
          <Instagrampost post={instagram.data[1]} />
        </div>
        <div className="col-start-3 row-start-2">
          <Instagrampost post={instagram.data[2]} />
        </div>
        <div className="row-start-3">
          <Instagrampost post={instagram.data[3]} />
        </div>
        <div className="row-start-3">
          <Instagrampost post={instagram.data[4]} />
        </div>
        <div className="row-start-3">
          <Instagrampost post={instagram.data[5]} />
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        <div>
          <Instagrampost post={instagram.data[6]} />
        </div>
        <div>
          <Instagrampost post={instagram.data[7]} />
        </div>
        <div>
          <Instagrampost post={instagram.data[8]} />
        </div>
        <div className="col-span-2 row-span-2">
          <Instagrampost post={instagram.data[9]} />
        </div>
        <div className="col-start-3">
          <Instagrampost post={instagram.data[10]} />
        </div>
        <div className="col-start-3 row-start-3">
          <Instagrampost post={instagram.data[11]} />
        </div>
      </div>
    </div>
  );
}
