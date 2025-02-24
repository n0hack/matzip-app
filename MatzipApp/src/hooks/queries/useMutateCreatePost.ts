import { createPost } from '@/api';
import { UseMutationCustomOptions } from '@/types/common';
import { useMutation } from '@tanstack/react-query';

export function useMutateCreatePost(
  mutationOptions?: UseMutationCustomOptions,
) {
  return useMutation({
    mutationFn: createPost,
    ...mutationOptions,
  });
}
