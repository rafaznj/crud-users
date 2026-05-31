export const createUser = (req, res) => {
  res.status(200).json({ message: "User created successfully" });
};

export const getUser = (req, res) => {
  res.status(200).json({ message: "User retrieved successfully" });
};

export const updateUser = (req, res) => {
  res.status(200).json({ message: "User updated successfully" });
};

export const deleteUser = (req, res) => {
  res.status(200).json({ message: "User deleted successfully" });
};
