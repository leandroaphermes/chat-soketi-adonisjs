import React, { useId } from "react";

import { useFormContext, UseFormRegister } from "react-hook-form";
import FormError from "./FormError";

export type FormItemProps = {
  label: string;
  name: string;
  children: React.ReactElement;
  required?: boolean;
};

export default function FormItem<T>({
  label,
  name,
  children,
  required,
}: FormItemProps) {
  const uid = useId();
  const contextForm = useFormContext();

  const uidLabel = `form-item-${uid}`;

  const inputRegister = contextForm.register(name);

  const errors = contextForm.formState.errors;

  const hasError = !!errors[name];

  return (
    <div>
      <label className="text-slate-300 text-sm" htmlFor={uidLabel}>
        {required && "* "}
        {label}
      </label>
      {React.cloneElement(children, {
        id: uidLabel,
        ...inputRegister,
        "aria-invalid": hasError ? "true" : "false",
      })}
      <FormError
        hasError={hasError}
        message={(errors[name]?.message as string) || ""}
      />
    </div>
  );
}
