import { useState } from "react";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface PropsType extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

const Avatar: React.FC<PropsType> = ({ src, alt, className, ...props }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <div
      {...props}
      className={twMerge(
        "w-[30px] h-[30px] rounded-full overflow-hidden flex items-center justify-center bg-orange-500",
        className
      )}
    >
      {imageLoaded ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImageLoaded(false)}
        />
      ) : (
        <span className="text-white text-base font-[500]">
          {alt.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
};

export default Avatar;
