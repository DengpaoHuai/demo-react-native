import { Specie } from "@/types/species.types";
import { Fragment, useEffect, useState } from "react";
import { View, Text, Button, Platform } from "react-native";

type SpecieResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Specie[];
};

export default function HomeScreen() {
  const [species, setSpecies] = useState<SpecieResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

  /*  const updateCount = (count: number) => {
    setSpecies({ ...species, count : count });
  }*/

  const getData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setSpecies(data);
  };

  useEffect(() => {
    getData("https://swapi.dev/api/species/");
  }, []);

  return (
    <>
      {species.results.map((specie) => {
        return (
          <Fragment key={specie.url}>
            <Text>{specie.name}</Text>
            <Text>{specie.language}</Text>
          </Fragment>
        );
      })}
      <Button
        title="previous"
        disabled={!species.previous}
        onPress={() => getData(species.previous!)}
      ></Button>
      <Button
        title="next"
        disabled={!species.next}
        onPress={() => species.next && getData(species.next)}
      ></Button>
    </>
  );
}
