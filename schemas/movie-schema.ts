import { z } from "zod";

export const MovieSchema = z.object({
  title: z
    .string()
    .min(3, "Le titre doit contenir au moins 3 caractères")
    .max(10, "Le titre doit contenir au plus 10 caractères"),
  director: z
    .string()
    .min(3, "Le réalisateur doit contenir au moins 3 caractères"),
  genre: z.string().min(3),
});

/*MovieSchema.parse({
    title: "test",
    director: "test",
    genre: "test",
  });*/

export type Movie = z.infer<typeof MovieSchema>;
