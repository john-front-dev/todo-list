import "./index.css";
import { useState } from "react";
import Input from "./components/CustomInput";
import ListItem from "./components/ListItem";
import FilterButton from "./components/FilterButton";
import { Task } from "./types/Types";

const App: React.FC = () => {
  const [isDone, setIsDone] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string>("All");
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn Redux", completed: false },
    { id: 3, text: "Learn Next.js", completed: false },
  ]);

  const handleEnterPress = (value: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      text: value,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id: number) => {
    setIsDone(false);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
    setIsDone(true);
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeButton === "Active") {
      return !task.completed;
    } else if (activeButton === "Completed") {
      return task.completed;
    } else {
      return true;
    }
  });

  return (
    <div className="flex justify-center items-center pt-10">
      <div className="flex flex-col justify-evenly items-center bg-white w-full max-w-[600px] min-w-[230px]  rounded-[30px] p-[42px]">
        <h2 className="text-[52px] font-semibold">todos</h2>
        <div className="flex flex-col justify-between border border-[#8b8b8b] p-5 w-[90%] min-h-[400px] rounded-[20px] mt-6">
          <div>
            <Input
              onEnterPress={handleEnterPress}
              placeholder="What needs to be done?"
            />
            <div className="mt-4">
              {filteredTasks.map((task) => (
                <ListItem
                  key={task.id}
                  task={task}
                  onToggleComplete={() => toggleComplete(task.id)}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-around mt-10">
              <FilterButton
                onClick={() => setActiveButton("All")}
                isActive={activeButton === "All"}
              >
                All
              </FilterButton>
              <FilterButton
                onClick={() => setActiveButton("Active")}
                isActive={activeButton === "Active"}
              >
                Active
              </FilterButton>
              <FilterButton
                onClick={() => setActiveButton("Completed")}
                isActive={activeButton === "Completed"}
              >
                Completed
              </FilterButton>
            </div>
            <div className="flex justify-center items-center mt-4 gap-x-8">
              {tasks.filter((task) => !task.completed).length} items left
              <button onClick={clearCompleted} className="text-red-500">
                Clear completed
              </button>
              {isDone ? <span className="text-green-500">Done!</span> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
