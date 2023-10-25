// ✨ //////////////////////////////

export default function Gradient({ left, right, sm, md, lg, xl }) {
  return (
    <div
      className={`absolute z-10 top-0 from-[#333132] via-[#333132]/90 to-[#333132]/0 h-full w-40
      ${
        xl
          ? "w-[100%]"
          : lg
          ? "w-[50%]"
          : md
          ? "w-[25%]"
          : sm
          ? "w-[10%]"
          : "w-20"
      }
      ${
        left
          ? "left-0 bg-gradient-to-r"
          : right
          ? "right-0 bg-gradient-to-l"
          : ""
      }
      `}
    ></div>
  );
}
