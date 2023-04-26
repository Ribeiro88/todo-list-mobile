import { View, Text } from "react-native";
import { styles } from "./styles";

interface FilterProps {
  type: 'criadas' | 'concluidas';
  created?: number;
  completed?: number;
}

export function Filter({ type, created, completed }: FilterProps) {
  return (
    <View style={styles.filter}>
      <Text style={type === 'criadas' ? styles.criadas : styles.concluidas}>{type}</Text>
      <View style={styles.counterBox}>
        {type === 'criadas' ? 
          <Text style={styles.counter}>{created}</Text> : completed === 0 ? <Text style={styles.counter}>0</Text> :
          <Text style={styles.counter}>{completed}</Text>}
      </View>
    </View>
  );
}