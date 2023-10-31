// ✨ //////////////////////////////

export default function PageHeader({ title, text, sided, title1, title2 }) {
  return (
    <div
      className={`relative z-20 margin-x margin-y flex flex-col ${
        sided ? "" : "items-center"
      } gap-10`}
    >
      <div
        data-aos="zoom-in"
        className={`mt-4 flex flex-col ${
          sided ? "" : "items-center text-center"
        }`}
      >
        {title ? (
          <h1>{title}</h1>
        ) : (
          <h1>
            {title1}
            <br />
            {title2}
          </h1>
        )}
        <div className="h-1 w-20 mt-4 bg-[#ed028c] rounded-full" />
      </div>
      <p
        data-aos="zoom-in-up"
        className={`w-1/2 max-lg:w-2/3 max-md:w-full ${
          sided ? "" : "text-center"
        }`}
      >
        {text}
      </p>
    </div>
  );
}
