import { useState, useEffect, Dispatch, SetStateAction } from "react";

/*
 * Isto serve para tirar o type: any deste código:
 * const [theme, setTheme] = usePersistedState("theme", light);
 * o theme e o setTheme estavam declarados como any, com este código se add tipagem
 */
type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedSatate<T>(key: string, initialState: any): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedSatate;
