// ✨ //////////////////////////////

export default function HomeVideo() {
  return (
    <main className="relative z-20 bg-neutral-900 margin-y">
      <iframe
        data-aos="zoom-in-up"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/DxR9eauTK1I?autoplay=1&loop=1&showinfo=0&controls=0&autohid=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-[100vh] w-full opacity-50"
      ></iframe>
    </main>
  );
}
