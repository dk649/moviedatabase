import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div>
      <image
        className="flex justify-center"
        src="/spinner.svg"
        width={0}
        height={0}
        size="100vw"
        alt="Picture of the author"
      ></image>
    </div>
  );
};

export default Loading;
