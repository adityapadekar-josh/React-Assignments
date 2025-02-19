interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <input
      type="text"
      placeholder="Search users by name"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="w-full p-3 text-base border-2 border-gray-300 rounded-lg outline-none"
    />
  );
};

export default SearchBar;
