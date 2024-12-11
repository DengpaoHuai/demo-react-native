import { Specie } from "@/types/species.types";
import { Fragment, useEffect, useState } from "react";
import { View, Text, Button, Platform } from "react-native";

export default function HomeScreen() {
  const [species, setSpecies] = useState<Specie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch("https://swapi.dev/api/species?page=" + page)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSpecies(data.results);
        setTotalPages(Math.ceil(data.count / data.results.length));
      });
  }, [page]);

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
      <Button
        title="previous"
        disabled={page <= 1}
        onPress={() => {
          setPage(page - 1);
        }}
      ></Button>
      <Button
        title="next"
        disabled={page >= totalPages}
        onPress={() => {
          setPage(page + 1);
        }}
      ></Button>
    </>
  );
}
