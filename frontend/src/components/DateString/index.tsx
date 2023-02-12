import React from "react";
import { DateTime } from "luxon";

export type DateStringProps = {
  date: string | null;
};

export default function DateString({ date }: DateStringProps) {
  const dateInstace = DateTime.fromSQL(date || "");
  const relative = date ? dateInstace.toRelative() : "";
  const displayTitle = date ? dateInstace.toString() : "";

  console.log(dateInstace, date);

  return (
    <time
      dateTime={displayTitle}
      className="text-slate-400 text-xs align-bottom"
    >
      {relative}
    </time>
  );
}
