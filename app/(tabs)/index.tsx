import { Specie } from "@/types/species.types";
import { Fragment, useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen() {
  const [species, setSpecies] = useState<Specie[]>([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/species")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSpecies(data.results);
      });
  }, []);

  return (
    <>
      {species.map((specie) => {
        return (
          <Fragment key={specie.url}>
            <Text>{specie.name}</Text>
            <Text>{specie.language}</Text>
          </Fragment>
        );
      })}
      <Button title="previous"></Button>
      <Button title="next"></Button>
    </>
  );
}
