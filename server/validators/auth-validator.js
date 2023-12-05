const { z } = require("zod");

const signUpSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Name must be atleast of 3 characters" })
    .max(255, { message: "Username must not be more then 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email Address"})
    .min(3, { message: "email must be atleast of 3 characters" })
    .max(255, { message: "email must not be more then 255 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone number must be atleast of 10 characters" })
    .max(255, { message: "phone must not be more then 255 characters" }),
  password: z
    .string({ required_error: "password is required" })
    .min(7, { message: "password must be atleast of 7 characters" })
    .max(1024, { message: "password must not be more then 1024 characters" }),
});

module.exports = signUpSchema;
