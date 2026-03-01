import z from "zod";

const FormContact = z.object({
  fullName: z
    .string()
    .min(5, {
      message: "Numele necesita minim 5 caractere",
    })
    .max(100, {
      message: "Numele nu poate fi mai lung de 5 caractere",
    }),
  willCome: z.boolean(),
  willBeChildren: z.boolean(),
  personsNumber: z.coerce.number(),
  comment: z
    .string()
    .max(500, {
      message: "Comentariul nu poate fi mai lung de 500 caractere",
    })
    .optional(),
});

export { FormContact };
