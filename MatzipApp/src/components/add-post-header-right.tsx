import { HeaderButton } from './header-button';

export function AddPostHeaderRight(onSubmit: () => void) {
  return <HeaderButton labelText="등록" onPress={onSubmit} />;
}
