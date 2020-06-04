import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { AsyncStorage } from 'react-native';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];

async function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(async () => {
    const storageValue = await AsyncStorage.getItem(key)

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;