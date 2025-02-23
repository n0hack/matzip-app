import { useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';

export function useAppState() {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [isComeback, setIsComeback] = useState(false);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
        setIsComeback(true);
      }

      if (appState.current.match(/active/) && nextAppState === 'background') {
        setIsComeback(false);
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  console.log('isComeback', isComeback);

  return {
    appStateVisible,
    isComeback,
  };
}
