import { View, Text, Image } from 'react-native';
import { CheckBox } from '@components/Checkbox';

import { styles } from './styles';

export type Task = {
  descriptionTask: string;
}

export function Task({ descriptionTask }: Task) {
  return (
    <View style={styles.container}>
      <CheckBox />
      <Text style={styles.description}>
        {descriptionTask}
      </Text>
      <Image source={require('@assets/trash.png')} />
    </View>
  )
}