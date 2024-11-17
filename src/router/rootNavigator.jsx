import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ADDTASKS, TASKDETAIL, TASKS } from "../utils/routes";
import Home from "../screens/home";
import AddTask from "../screens/addTask";
import TaskDetail from "../screens/taskDetail";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#D8A7B1",
            shadowColor: "#D8A7B1",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 3,
          },
          contentStyle: {
            backgroundColor: "#F5F5F5",
          },
        }}
        name={TASKS}
        component={Home}
      />
      <Stack.Screen name={ADDTASKS} component={AddTask} />
      <Stack.Screen name={TASKDETAIL} component={TaskDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
