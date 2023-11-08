// ✨ //////////////////////////////

export default function HomeVideo() {
  return (
    <main className="relative z-20 bg-neutral-900 pt-24 max-sm:pt-16">
      <iframe
        data-aos="zoom-in-up"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/DxR9eauTK1I?autoplay=1&loop=1&showinfo=0&controls=0&autohid=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreenreen
        className="h-[100vh] w-full opacity-50"
      ></iframe>
    </main>
  );
}
