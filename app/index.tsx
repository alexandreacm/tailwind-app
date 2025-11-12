import { useTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';

export default function LoadingScreen() {
  const theme = useTheme();
  return (
    <View
      className={`flex-1 items-center justify-center px-4 py-2 ${theme.colors.background}`}
    >
      <Text
        className={`text-lg font-bold leading-5 ${theme.dark ? 'text-telus-white' : 'text-telus-black'}`}
      >
        Animation...
      </Text>
    </View>
  );
}
