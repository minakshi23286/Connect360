import { z } from "zod";

export const leadSchema = z.object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    companyName: z.string().optional(),
    serviceInterest: z.string().min(1, "Please select a service"),
    country: z.string().min(1, "Country is required"),
    message: z.string().min(10, "Please provide more details about your requirements"),
    budgetRange: z.string().optional(),
    timeline: z.string().optional(),
    consent: z.boolean().refine((val) => val === true, {
        message: "You must agree to be contacted",
    }),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
