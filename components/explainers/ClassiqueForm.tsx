import { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const CreateMovie = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const [isAlreadySubmitted, setIsAlreadySubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const customRules = () => {
    if (title === "") {
      setErrors({ title: "Le titre est obligatoire" });
      return false;
    }

    if (title.length < 3) {
      setErrors({ title: "Le titre doit contenir au moins 3 caractères" });
      return false;
    }

    if (director === "") {
      alert("Le réalisateur est obligatoire");
      return false;
    }

    if (director.length < 3) {
      alert("Le réalisateur doit contenir au moins 3 caractères");
      return false;
    }

    if (genre === "") {
      alert("Le genre est obligatoire");
      return false;
    }

    if (genre.length < 3) {
      alert("Le genre doit contenir au moins 3 caractères");
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    if (!isAlreadySubmitted) {
      setIsAlreadySubmitted(true);
    }
    if (!customRules()) {
      return;
    }
    console.log({ title, director, genre });
  };

  useEffect(() => {
    if (isAlreadySubmitted) {
      customRules();
    }
  }, [title, director, genre]);

  return (
    <View>
      <Text>Créer un film</Text>

      <TextInput
        placeholder="Titre"
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <TextInput
        placeholder="Réalisateur"
        onChangeText={(text) => setDirector(text)}
        value={director}
      />

      <TextInput
        placeholder="Genre"
        onChangeText={(text) => setGenre(text)}
        value={genre}
      />

      <Button onPress={onSubmit} title="Créer"></Button>
      {isAlreadySubmitted && errors.title && <Text>{errors.title}</Text>}
    </View>
  );
};

export default CreateMovie;
