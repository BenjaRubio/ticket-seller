import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control } from "react-hook-form";
import React from "react";

interface Props {
  formControl: Control<any>;
  name: string;
  label: string;
  description?: string;
  children: React.ReactNode;
}

export const FormInputField = (props: Props) => {
  const {
    formControl,
    name,
    label,
    description,
    children,
  } = props;

  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {React.cloneElement(children as React.ReactElement, { ...field })}
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
