import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigations/root/root-navigator';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/api/query-client';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
