import CustomTextInput from "@/components/ui/CustomTextInput";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Text, TextInput, View } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const MovieSchema = z.object({
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

type Movie = z.infer<typeof MovieSchema>;
/*
Scénario par défault de validation
Soumission sans validation PUI, une fois la première soumission réalisée, les champs sont validés à chaque modification
react hook form = gestion du formulaire
zod : gestion de la validation


*/
const CreateMovie = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Movie>({
    resolver: zodResolver(MovieSchema),
  });

  const onSubmit = (data: Movie) => {
    console.log(data);
  };

  return (
    <View>
      <Text>Créer un film</Text>
      <CustomTextInput
        control={control}
        name="title"
        placeholder="Titre"
      ></CustomTextInput>
      {errors.title && <Text>{errors.title.message}</Text>}
      <CustomTextInput
        control={control}
        name="director"
        placeholder="Réalisateur"
      ></CustomTextInput>
      {errors.director && <Text>{errors.director.message}</Text>}
      <CustomTextInput
        control={control}
        name="genre"
        placeholder="Genre"
      ></CustomTextInput>
      {errors.genre && <Text>{errors.genre.message}</Text>}
      <Button onPress={handleSubmit(onSubmit)} title="Créer"></Button>
    </View>
  );
};

export default CreateMovie;
