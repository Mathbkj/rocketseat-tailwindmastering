import type {
  FC,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from "react";
import { Button } from "../Buttons/Button";
import type { LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

interface TabHeaderProps extends Pick<IconProps, "icon"> {
  title: string;
  subtitle: string;
  hasButton?: boolean;
  btnText?: string | ReactNode;
  hasSubTab?: boolean;
}

const Icon: FC<IconProps> = ({ icon: Icon, ...props }) => {
  return <Icon {...props} size={20} className={props.className ?? ""} />;
};

export const TabHeader: FC<TabHeaderProps> = ({
  title,
  subtitle: subT,
  hasButton = false,
  btnText,
  hasSubTab,
  icon,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-4 lg:justify-between ${!hasSubTab ? "border-b" : "border-0"} border-zinc-200 dark:border-zinc-700 pb-5`}
    >
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="text-lg flex items-center gap-2 font-medium text-zinc-900 dark:text-zinc-100">
          {title}
          <Icon icon={icon} />
        </h2>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">{subT}</span>
      </div>
      <div className="flex justify-center lg:justify-start items-center gap-2">
        {hasButton && <Button type="submit">{btnText}</Button>}
      </div>
    </div>
  );
};
