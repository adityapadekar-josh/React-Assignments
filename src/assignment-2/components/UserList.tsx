import { useEffect, useMemo, useState } from "react";
import { User } from "src/assignment-2/types/user";
import { fetchUsers } from "src/assignment-2/services/user";
import SearchBar from "src/assignment-2/components/SearchBar";
import UserItem from "src/assignment-2/components/UserItem";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Error fetching users");
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [users, searchTerm]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="w-full flex flex-col gap-4">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      {filteredUsers.length === 0 ? (
        <div className="text-center">No users found</div>
      ) : (
        filteredUsers.map((user) => <UserItem user={user} key={user.id} />)
      )}
    </div>
  );
};

export default UserList;
