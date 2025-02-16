import {AuthStackNavigator} from '../stack/auth-stack-navigator';
import {MainDrawerNavigator} from '../drawer/main-drawer-navigator';

type RootNavigatorProps = {};

export function RootNavigator({}: RootNavigatorProps) {
  const isLoggedIn = true;

  return isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />;
}
