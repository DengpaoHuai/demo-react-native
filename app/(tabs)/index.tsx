import useFetch from "@/hooks/useFetch";
import { Specie } from "@/types/species.types";
import { Fragment } from "react";
import { ActivityIndicator, Text } from "react-native";

type SpecieResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Specie[];
};

export default function HomeScreen() {
  const { data, isLoading, error } = useFetch<SpecieResponse>(
    "https://swapi.dev/api/species/"
  );

  return (
    <>
      {isLoading && <ActivityIndicator size="large"></ActivityIndicator>}
      {error && <Text>{error}</Text>}
      {data?.results.map((specie) => {
        return (
          <Fragment key={specie.url}>
            <Text>{specie.name}</Text>
            <Text>{specie.language}</Text>
          </Fragment>
        );
      })}
    </>
  );
}
