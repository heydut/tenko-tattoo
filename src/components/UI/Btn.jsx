// ✨ //////////////////////////////

export default function Btn({ href, text, target, outline }) {
  return (
    <a
      href={href}
      target={target}
      className={`relative cursor-pointer inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all group
      ${
        outline
          ? "border border-neutral-100"
          : "border border-transparent bg-[#ed028c] hover:bg-neutral-100"
      }
      `}
    >
      <span
        className={`absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all ${
          outline ? "border-neutral-100/30" : "border-neutral-100"
        }`}
      ></span>
      <span
        className={`relative w-full text-left text-neutral-100 transition-colors duration-200 ease-in-out ${
          outline ? "" : "group-hover:text-[#ed028c]"
        }`}
      >
        {text}
      </span>
    </a>
  );
}
