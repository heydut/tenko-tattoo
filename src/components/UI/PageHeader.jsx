// ✨ //////////////////////////////

export default function PageHeader({ title, text }) {
  return (
    <div className="relative z-20 margin-x margin-y flex flex-col items-center gap-10">
      <div
        data-aos="zoom-in"
        className="mt-4 flex flex-col items-center text-center"
      >
        <h1>{title}</h1>
        <div className="h-1 w-20 mt-4 bg-[#ed028c] rounded-full" />
      </div>
      <p
        data-aos="zoom-in-up"
        className="w-1/2 max-lg:w-2/3 max-md:w-full text-center"
      >
        {text}
      </p>
    </div>
  );
}
