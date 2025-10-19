import React from "react";
import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Sam Wilson", email: "sam@example.com" },
];

const Users = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Users List</h2>
      <ul className="space-y-3 max-w-md mx-auto">
        {users.map((user) => (
          <li key={user.id} className="border p-3 rounded shadow hover:bg-gray-100">
            <Link to={`/users/${user.id}`} className="text-blue-600 font-medium">
              {user.name}
            </Link>
            <p className="text-gray-600 text-sm">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
