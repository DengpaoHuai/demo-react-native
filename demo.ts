try {
  const getDemo = () => {
    throw new Error("This is a demo error");
  };
} catch (error: unknown) {
  //narrowing
  if (error instanceof Error) {
    console.log(error.message);
  } else if (typeof error === "string") {
    console.log(error);
  } else {
    console.log("An unknown error occured");
  }
}
