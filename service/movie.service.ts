import { httpClient } from "./http-client";

//passez en param le nécessaire
const postData = () => {
  httpClient.post("/movies", {});
};
