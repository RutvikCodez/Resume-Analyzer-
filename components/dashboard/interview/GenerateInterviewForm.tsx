"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generateInterviewFields, generateInterviewFormFormSchema, interviewLevels } from "@/constants";

type FormFields = z.infer<typeof generateInterviewFormFormSchema>;

const GenerateInterviewForm = () => {
  const form = useForm<z.infer<typeof generateInterviewFormFormSchema>>({
    resolver: zodResolver(generateInterviewFormFormSchema),
    defaultValues: {
      title: "",
      location: "",
      company: "",
      level: "",
      description: "",
    },
  });

  function onSubmit(data: z.infer<typeof generateInterviewFormFormSchema>) {
    console.log(data);
  }

  return (
    <Card>
      <CardContent>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <FieldGroup className="grid grid-cols-1 lg:grid-cols-2">
            {generateInterviewFields.map((item) => (
              <Controller
                key={item.name}
                name={item.name as keyof FormFields}
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>{item.label}</FieldLabel>
                    <Input
                      {...field}
                      placeholder={item.placeholder}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            ))}

            <Controller
              name="level"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Interview Level</FieldLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger aria-invalid={fieldState.invalid}>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Please Select Level</SelectItem>
                      <SelectSeparator />
                      {interviewLevels.map((lvl) => (
                        <SelectItem key={lvl.value} value={lvl.value}>
                          {lvl.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />

            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className="lg:col-span-2" data-invalid={fieldState.invalid}>
                  <FieldLabel>Job Description</FieldLabel>
                  <Textarea
                    {...field}
                    rows={10}
                    placeholder="Describe the job role..."
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <Field className="flex justify-center">
            <Button type="submit" className="w-1/2">
              Submit
            </Button>
          </Field>
        </form>
      </CardContent>
    </Card>
  );
};

export default GenerateInterviewForm;
