import { View, Text, Image, KeyboardAvoidingView } from 'react-native';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Task } from '@components/Task';

import { styles } from './styles';

export function Home() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={styles.header}>
            <Image source={require('@assets/logo.png')} />
          </View>
          <View style={styles.containerAddTask}>
            <Input />
            <Button />
          </View>
        </View>
        <View style={styles.containerTaskList}>
          <View style={styles.containerInfoTask}>
            <View style={styles.boxCreatedTask}>
              <Text style={styles.textCreatedTask}>Criadas</Text>
              <View style={styles.boxNumberTask}>
                <Text style={styles.infoCreatedTask}>
                  2
                </Text>
              </View>
            </View>
            <View style={styles.boxDoneTask}>
              <Text style={styles.textDoneTask}>Concluídas</Text>
              <View style={styles.boxNumberDoneTask}>
                <Text style={styles.infoCreatedTask}>
                  4
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.containerEmptyTask}>
            <View style={styles.lineEmptyTask} />
            <Image style={styles.deleteTaskImage} source={require('@assets/clipboard.png')} />
            <Text style={styles.messageEmptyTask}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.messageTipTask}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
          <Task
            descriptionTask={'afafasfadfadasadasdasdasdasdadasddadasdadads'}
          />
        </View>
      </View>
    </>
  )
}