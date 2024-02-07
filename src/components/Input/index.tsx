import { TextInput } from 'react-native';

import { styles } from './styles';

export function Input() {
  return (
    <TextInput
      placeholder='Adicione uma nova Tarefa'
      placeholderTextColor='#808080'
      style={styles.input}
    />
  )
}