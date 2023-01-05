import { useEffect, useState } from "react";

export const useDadJoke = (): UseDadJokeReturnType => {
  const [joke, setJoke] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadJoke = () => {
    setIsLoading(true);
    fetch(origin, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response: Response) => response.json())
      .then((jokeResponse: JokeResponseDTO) => {
        setIsLoading(false);
        if (jokeResponse.status !== 200) {
          throw "Error occured while loading Dad joke.";
        }
        setJoke(jokeResponse.joke);
      });
  };

  useEffect(() => {
    loadJoke();
  }, []);

  const reload = () => loadJoke();

  return { joke, reload, isLoading };
};

const origin = "https://icanhazdadjoke.com/";

type UseDadJokeReturnType = {
  joke: string | undefined;
  reload: () => void;
  isLoading: boolean;
};

type JokeResponseDTO = {
  status: number;
  joke: string;
};
