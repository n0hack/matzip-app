import { AuthStackNavigator } from '../stack/auth-stack-navigator';
import { MainDrawerNavigator } from '../drawer/main-drawer-navigator';
import { useAuth } from '../../hooks/queries/useAuth';

type RootNavigatorProps = {};

export function RootNavigator({}: RootNavigatorProps) {
  const { isLogin } = useAuth();

  return isLogin ? <MainDrawerNavigator /> : <AuthStackNavigator />;
}
