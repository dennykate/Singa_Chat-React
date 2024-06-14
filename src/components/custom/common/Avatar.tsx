import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface PropsType extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

const Avatar: React.FC<PropsType> = ({ src, alt, className, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge(
        "w-[30px] h-[30px] rounded-full object-cover overflow-hidden",
        className
      )}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default Avatar;
