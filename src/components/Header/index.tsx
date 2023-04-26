import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import LogoSvg from '../../assets/logo.svg';

import { styles } from './styles';

interface HeaderProps {
  newTask: () => void;
  taskTitle: string;
  newTaskTitle: React.Dispatch<React.SetStateAction<string>>;
}

export function Header({ newTask, taskTitle, newTaskTitle }: HeaderProps){
  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <LogoSvg width={110} height={32} />

        <View style={styles.form}>
          <TextInput 
            style={styles.input} 
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            autoCorrect={false}
            onChangeText={newTaskTitle}
            value={taskTitle}
          />

          <TouchableOpacity style={styles.button} onPress={newTask}>
            <AntDesign name="pluscircle" size={16} color="#fff" />
          </TouchableOpacity>
        </View>

      </View>
      
    </View>
  );
}