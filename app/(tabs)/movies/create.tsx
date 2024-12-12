import CustomTextInput from "@/components/ui/CustomTextInput";
import { useForm } from "react-hook-form";
import { Button, Text, View } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { Movie, MovieSchema } from "@/schemas/movie-schema";
import { createMovie } from "@/service/movie.service";
import { router } from "expo-router";
import { useState } from "react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: Movie) => {
    setIsSubmitting(true);
    createMovie(data)
      .then((response) => {
        console.log(response);
        router.back();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
      <Button
        disabled={isSubmitting}
        onPress={handleSubmit(onSubmit)}
        title="Créer"
      ></Button>
    </View>
  );
};

export default CreateMovie;
