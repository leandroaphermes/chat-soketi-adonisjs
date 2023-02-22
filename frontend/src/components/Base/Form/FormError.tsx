import React from "react";

export type FormErrorProps = {
  hasError: boolean;
  message: string;
};

export default function FormError({ hasError, message }: FormErrorProps) {
  return (
    <div className="w-full">
      {hasError && (
        <small className="text-sm text-red-600 mt-1">{message}</small>
      )}
    </div>
  );
}
