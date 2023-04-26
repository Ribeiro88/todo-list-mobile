import { useState } from "react";
import { Alert, FlatList, StatusBar, View } from "react-native";

import { Header } from "../../components/Header";
import { Filter } from "../../components/Filter";
import { TaskCard } from "../../components/TaskCard";
import { EmptyTask } from "../../components/EmptyTask";

import { styles } from './styles';

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function Home(){

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const totalTasksCreated = tasks.length;
  
  const completedTasks = tasks.reduce((previousValue, currentValue) => previousValue + Number(currentValue.isComplete), 0,);

  function handleCreateNewTask() {
    const newTask = { id: Math.random() * 100, title: newTaskTitle,  isComplete: false };

    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  }

  function handleCheckTask(id: number){
    const changedTaks = tasks.map((task) => task.id === id ? { ...task, isComplete: !task.isComplete } : task)

    setTasks(changedTaks);
  }

  function handleDeleteTask(title: string){

    Alert.alert("Remover", `Remover a task ${title}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task.title !== title))
      }, 
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" translucent />
      <Header newTask={handleCreateNewTask} taskTitle={newTaskTitle} newTaskTitle={setNewTaskTitle} />
      <View style={styles.container}>
        <View style={styles.filterContent}>
          <Filter type="criadas" created={totalTasksCreated} />
          <Filter type="concluidas" created={totalTasksCreated} completed={completedTasks} />
        </View>
  
        <FlatList 
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <EmptyTask />
          )}
          data={tasks}
          renderItem={({ item }) => (
            <TaskCard key={item.id} title={item.title} onCheckTask={() => handleCheckTask(item.id)} onRemoveTask={() => handleDeleteTask(item.title)} />
          )}
        />
      </View>
    </>
  );
}