import * as z from "zod";

export const publishFormSchema = z.object({
  name: z.string().nonempty("Please enter your name."),
  tentative: z.string().nonempty("Please enter your tentative."),
  bringingThings: z
    .array(z.string())
    .nonempty("Please select at least one thing to bring."),
  gender: z.string().nonempty("Please select your gender"),
  theme: z.string().nonempty("Please select a theme"),
});

export type PublishFormValues = z.infer<typeof publishFormSchema>;
