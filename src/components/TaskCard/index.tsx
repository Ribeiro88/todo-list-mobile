import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import Checkbox from 'expo-checkbox';

import { styles } from "./styles";

interface TaskProps {
  title: string;
  onCheckTask: () => void;
  onRemoveTask: () => void;
}


export function TaskCard({ title, onCheckTask, onRemoveTask }: TaskProps){
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={isChecked ? styles.formActive : styles.form}>
      <Checkbox 
        style={isChecked ? styles.checked : styles.unchecked} 
        color={isChecked ? '#5E60CE' : undefined}
        value={isChecked} 
        onValueChange={setChecked}
        onTouchStart={onCheckTask}  
        
      />
      <Text style={isChecked ? styles.complete : styles.text}>{title}</Text>
      <TouchableOpacity onPress={onRemoveTask}>
        <Feather name="trash-2" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}