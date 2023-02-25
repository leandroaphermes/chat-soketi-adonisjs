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

const sizePhotoModes: SizeModeType = {
  small: "w-8 h-8",
  large: "w-15 h-15",
  default: "w-10 h-10",
};

export default function UserLabel({
  isOnline,
  name,
  size = "default",
}: UserLabelProps) {
  const sizeText = sizeTextModes[size];
  const sizePhoto = sizePhotoModes[size];

  return (
    <div className="flex flex-nowrap gap-2 items-center">
      <img
        className={`${sizePhoto} rounded-full`}
        src="https://via.placeholder.com/60"
        alt="Image Perfio"
      />
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
