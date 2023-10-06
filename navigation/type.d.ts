import type * as nativeStack from "@react-navigation/native-stack";

export type ScreenNavigatorParamList={
   Dashboard: undefined;
   ManageCategoriesScreen: undefined;

}

export type ScreenNavigationProp = NativeStackScreenProps<ScreenNavigatorParamList,Dashboard,ManageCategoriesScreen>