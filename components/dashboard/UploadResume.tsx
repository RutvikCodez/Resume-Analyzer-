"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import pdfToText from "react-pdftotext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { analyzeResume } from "@/lib/resume.actions";
import { uploadToImageKit } from "@/lib/imagekit";

const formSchema = z.object({
  resume: z
    .instanceof(File, { message: "Please upload a PDF file" })
    .refine((file) => file.type === "application/pdf", {
      message: "Only PDF files are allowed",
    }),
});

const UploadResume = ({ userId }: { userId: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    await toast.promise(
      (async () => {
        const fileUrl = await uploadToImageKit(data.resume);
        const fileText = await pdfToText(data.resume);
        return await analyzeResume(
          userId,
          fileText,
          fileUrl,
          data.resume.name,
        );
      })(),
      {
        loading: "Analyzing your resume...",
        success: "Resume submitted successfully!",
        error: "Failed to submit resume. Please try again.",
      },
    );
  }

  return (
    <div className=" flex w-full h-screen justify-center items-center">
      <Card className="w-full sm:max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Upload Resume</CardTitle>
          <CardDescription>Upload your resume in PDF format</CardDescription>
        </CardHeader>

        <CardContent>
          <form id="upload-resume-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="resume"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Resume (PDF only)</FieldLabel>
                    <Input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>

        <CardFooter>
          <Button type="submit" form="upload-resume-form">
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UploadResume;
