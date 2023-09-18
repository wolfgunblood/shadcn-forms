import { z } from "zod";

export const registerSchema = z.object({
    email: z.string().email(),
    name: z
        .string()
        .min(1, { message: "Name is required" })
        .max(100, { message: "Name is too long" }),
    studentId: z
        .string()
        .min(7)
        .max(7)
        .refine((val) => !isNaN(val as unknown as number), { message: "Student ID must be a number" }),
    year: z.string().min(1, { message: "Year is required" }).max(10),
    password: z
        .string()
        .min(8)
        .max(100, { message: "Password is too long" }),
    confirmPassword: z
        .string()
        .min(8)
        .max(100, { message: "Password is too long" }),
})

