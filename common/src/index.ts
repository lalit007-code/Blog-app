import { z } from "zod";

export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string(),
});

//type inference in zod

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

//type inference in zod

//blog  validation

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export const updateBlogInput = z.object({
  id: z.string(),
  title: z.string().optional(),
  content: z.string().optional(),
});

//profileUpdateSchema
const updateProfilePassword = z.object({
  oldPassword: z.string().min(6).max(8),
  newPassword: z.string().min(6).max(8),
});

export type SignupInput = z.infer<typeof signupInput>;

export type SigninInput = z.infer<typeof signinInput>;

export type CreateBlogInput = z.infer<typeof createBlogInput>;

export type UpdateBlogInput = z.infer<typeof updateBlogInput>;

export type UpdateProfilePass = z.infer<typeof updateProfilePassword>;
