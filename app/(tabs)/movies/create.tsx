import CustomTextInput from "@/components/ui/CustomTextInput/CustomTextInput";
import { useForm } from "react-hook-form";
import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { Movie, MovieSchema } from "@/schemas/movie-schema";
import { createMovie } from "@/service/movie.service";
import { router } from "expo-router";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { setMovie } from "@/store/actions/movie-action";

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
  } = useForm<Omit<Movie, "_id">>({
    resolver: zodResolver(MovieSchema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const data = useSafeAreaInsets();
  const dispatch = useDispatch();

  const onSubmit = (data: Omit<Movie, "_id">) => {
    setIsSubmitting(true);
    createMovie(data)
      .then((response) => {
        console.log(response);
        dispatch(setMovie(response));
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
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View
        style={[
          styles.container,
          {
            minHeight: "100%",
          },
        ]}
      >
        <Text>Créer un film</Text>
        <View style={styles.inputContainer}>
          <CustomTextInput
            control={control}
            name="title"
            placeholder="Titre"
          ></CustomTextInput>
          {errors.title && <Text>{errors.title.message}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <CustomTextInput
            control={control}
            name="director"
            placeholder="Réalisateur"
          ></CustomTextInput>
          {errors.director && <Text>{errors.director.message}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <CustomTextInput
            control={control}
            name="genre"
            placeholder="Genre"
          ></CustomTextInput>
          {errors.genre && <Text>{errors.genre.message}</Text>}
        </View>

        <TouchableOpacity
          disabled={isSubmitting}
          onPress={handleSubmit(onSubmit)}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Créer un film</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreateMovie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    marginVertical: 10,
    width: "100%",
  },
  button: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 10,
    width: "50%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
