import { NavigationParams, StackActions, NavigationScreenProp, NavigationActions } from "react-navigation";

type ReplaceScreenProps = {
  navigation: NavigationScreenProp<{}, NavigationParams>
  routeName: string
  params?: NavigationParams
  key?: string
  newKey?: string
}
export const replace = ({navigation, routeName, params, key, newKey}: ReplaceScreenProps): void => {
  const replaceAction = StackActions.replace({
    key,
    newKey,
    routeName,
    params

  });
  navigation.dispatch(replaceAction);
}


type PopScreenProps = {
  navigation: NavigationScreenProp<{}, NavigationParams>
  number?: number
}
export const pop = ({navigation, number}: PopScreenProps): void => {
  const popAction = StackActions.pop({
    n: number || 1,
  });
  
  navigation.dispatch(popAction);
}
export const popToRoot = ({navigation}: PopScreenProps) : void => {
  navigation.dispatch(StackActions.popToTop())
}


type ResetScreenProps = {
  navigation: NavigationScreenProp<{}, NavigationParams>
  routeName: string
}
export const reset = ({ navigation, routeName }: ResetScreenProps): void => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })],
  });
  navigation.dispatch(resetAction);
}