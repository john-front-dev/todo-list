interface FilterButtonProps {
  isActive: boolean;
  children: string;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  children,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`px-3 py-[6px] border-2 rounded-md ${
        isActive ? "border-green-600" : "border-gray-400"
      }`}
      onClick={onClick}
    >
      <span className={isActive ? "text-green-600" : "text-gray-700"}>
        {children}
      </span>
    </button>
  );
};

export default FilterButton;