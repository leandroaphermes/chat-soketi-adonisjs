type SizeType = "small" | "large" | "default";

export type UserLabelProps = {
  name: string;
  isOnline: boolean;
  size?: SizeType;
  showOnline?: boolean;
};

type SizeModeType = Record<SizeType, string>;

const sizeTextModes: SizeModeType = {
  small: "text-sm",
  large: "text-lg",
  default: "text-md",
};

const sizeIconModes: SizeModeType = {
  small: "w-3 h-3",
  large: "w-5 h-5",
  default: "w-4 h-4",
};

export default function UserLabel({
  isOnline,
  name,
  size = "default",
  showOnline = true,
}: UserLabelProps) {
  const sizeText = sizeTextModes[size];
  const sizeIcon = sizeIconModes[size];

  return (
    <div className="flex flex-nowrap gap-2 items-baseline">
      {showOnline && (
        <span
          className={`${
            isOnline ? "bg-yellow-500" : "bg-neutral-500"
          } rounded-full ${sizeIcon}`}
          title={isOnline ? "Online" : "Offline"}
        />
      )}
      <span
        className={`text-lg font-normal ${
          isOnline ? "" : "opacity-40"
        } ${sizeText}`}
      >
        {name}
      </span>
    </div>
  );
}
