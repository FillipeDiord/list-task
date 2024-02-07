import { Pressable, Image  } from 'react-native';

import { styles } from './styles';

export function Button() {
  return (
    <Pressable 
      style={styles.button}
    >
      <Image source={require('@assets/add.png')} />
    </Pressable>
  );
}
