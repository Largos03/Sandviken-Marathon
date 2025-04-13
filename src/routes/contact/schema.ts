import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, { message: "nameMinLength" }),
  email: z.string().email({ message: "emailInvalid" }),
  subject: z.string().min(5, { message: "subjectMinLength" }),
  message: z.string().min(10, { message: "messageMinLength" })
});

export type ContactSchema = typeof contactSchema; 