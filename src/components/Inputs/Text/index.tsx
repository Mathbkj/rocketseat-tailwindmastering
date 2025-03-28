import type { ComponentProps, ElementType, FC } from "react";
import * as Input from "./TextItem";

interface BaseProps
  extends Pick<
    ComponentProps<"input">,
    "id" | "defaultValue" | "placeholder" | "type"
  > {}

interface WithPrefixProps extends BaseProps {
  hasPrefix: true;
  icon: ElementType;
}

interface WithoutPrefixProps extends BaseProps {
  hasPrefix?: false;
  icon?: never;
}

type TextInputProps = WithPrefixProps | WithoutPrefixProps;

export const TextInput: FC<TextInputProps> = ({
  hasPrefix,
  icon: Icon,
  ...rest
}) => {
  return (
    <Input.Root>
      {hasPrefix && (
        <Input.Prefix>
          <Icon className="h-5 w-5 text-zinc-500"/>
        </Input.Prefix>
      )}
      <Input.Control
      type={rest.type}
        placeholder={rest.placeholder}
        id={rest.id}
        defaultValue={rest.defaultValue}
      />
    </Input.Root>
  );
};
