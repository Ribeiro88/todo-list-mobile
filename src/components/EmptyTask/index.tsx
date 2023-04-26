import { Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from "./styles";

export function EmptyTask() {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="clipboard-list" size={56} color="#808080" />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}