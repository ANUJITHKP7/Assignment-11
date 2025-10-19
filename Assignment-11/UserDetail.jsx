import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Sam Wilson", email: "sam@example.com" },
];

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <p className="text-center text-red-500 mt-10">User not found!</p>;
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-3">{user.name}</h2>
      <p className="mb-2">Email: {user.email}</p>
      <button
        onClick={() => navigate("/users")}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetail;

