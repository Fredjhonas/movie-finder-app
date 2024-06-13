import 'react-native';

import { expect, test } from '@jest/globals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react-native';

import { useCustomHook } from '../src/hooks/useCustomHook';

const queryClient = new QueryClient();
export const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const { result } = renderHook(() => useCustomHook(), { wrapper });

test('useCustomHook', async () => {
  await waitFor(() => {
    expect(result.current.data).toBe('Hello');
  });
});
