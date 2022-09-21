import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
import { Assets } from '@react-navigation/elements';
import { Asset } from 'expo-asset';
import AppLogin from './app.routes';

Asset.loadAsync(Assets);
registerRootComponent(AppLogin);

