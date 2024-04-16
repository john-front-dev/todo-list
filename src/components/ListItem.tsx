import React from "react";
import { Task } from "../types/Types";

interface ListItemProps {
  task: Task;
  onToggleComplete: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ task, onToggleComplete }) => {
  return (
    <div className={`flex items-center gap-x-2 w-full px-4 py-3 rounded-lg border border-[#B6B5B5] mt-3 ${task.completed ? 'line-through text-[#C1C1C1]' : ''}`}>
      <input type="checkbox" checked={task.completed} onChange={onToggleComplete} />
      {task.text}
    </div>
  );
};

export default ListItem;
