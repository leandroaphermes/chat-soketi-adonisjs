import React from "react";
import { FieldValues, useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { pt } from "yup-locale-pt";

yup.setLocale(pt);

export const validatorRules = yup;

export type FormProps<T extends FieldValues> = {
  onSubmit: (values: T) => void;
  children: React.ReactNode;
  rules?: yup.AnyObject;
};

export default function Form<T extends FieldValues>({
  onSubmit,
  rules,
  children,
}: FormProps<T>) {
  const methods = useForm<T>({
    resolver: yupResolver(rules),
    shouldUseNativeValidation: false,
  });

  function handleOnSubmit(valuesSuccess: FieldValues) {
    console.log({ valuesSuccess });
    onSubmit(valuesSuccess as T);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleOnSubmit)} noValidate>
        {children}
      </form>
    </FormProvider>
  );
}
