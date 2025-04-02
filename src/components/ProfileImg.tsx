import type { ComponentProps, FC } from "react";

interface ProfileProps extends Pick<ComponentProps<"div">,"className">{
  url?:string;
}

export const ProfileImg: FC<ProfileProps> = ({url="https://github.com/Mathbkj.png",...rest}) => {
  return (
    <img
      alt=""
      className={`flex max-lg:self-center h-16 w-16 rounded-full object-cover ${rest.className || ""}`}
      src={url}
    />
  );
};
