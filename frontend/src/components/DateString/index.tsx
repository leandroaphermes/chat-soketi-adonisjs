import { DateTime } from "luxon";

export type DateStringProps = {
  date: string | null;
};

export default function DateString({ date }: DateStringProps) {
  const dateInstace = DateTime.fromSQL(date || "");
  const relative = date ? dateInstace.toRelative() : "";
  const displayTitle = date ? dateInstace.toString() : "";
  const displayTitleLocal = date ? dateInstace.toLocaleString() : "";

  return (
    <time
      title={displayTitleLocal}
      dateTime={displayTitle}
      className="text-neutral-500 text-xs align-bottom self-end whitespace-nowrap"
    >
      {relative}
    </time>
  );
}
