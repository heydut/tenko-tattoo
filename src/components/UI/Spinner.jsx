import { Spinner } from "@nextui-org/react";

// ✨ //////////////////////////////

export default function LoadingSpinner({ text }) {
  return (
    <Spinner
      label={text}
      color="default"
      labelColor="foreground"
      className="dark"
    />
  );
}
