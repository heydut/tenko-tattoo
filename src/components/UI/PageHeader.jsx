// ✨ //////////////////////////////

export default function PageHeader({
  title,
  text,
  sided,
  title1,
  title2,
  small,
  noMargin,
}) {
  return (
    <div
      className={`relative z-20  flex flex-col
      ${noMargin ? "" : "margin-x margin-y"}
       ${sided ? "" : "items-center"} gap-10`}
    >
      <div
        data-aos="zoom-in"
        className={`mt-4 flex flex-col ${
          sided ? "" : "items-center text-center"
        }`}
      >
        {small ? (
          <h2 className="font-bold max-md:text-center">{title}</h2>
        ) : (
          <>
            {" "}
            {title ? (
              <h1>{title}</h1>
            ) : (
              <h1>
                {title1}
                <br />
                {title2}
              </h1>
            )}
          </>
        )}

        <div className="h-1 w-20 mt-4 bg-[#ed028c]" />
      </div>
      {text && (
        <p
          data-aos="zoom-in-up"
          className={`w-1/2 max-lg:w-2/3 max-md:w-full ${
            sided ? "" : "text-center"
          }
        
        `}
        >
          {text}
        </p>
      )}
    </div>
  );
}
