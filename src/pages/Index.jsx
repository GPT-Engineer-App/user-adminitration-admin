import React, { useState } from "react";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Select, Table, Tbody, Td, Text, Th, Thead, Tr, VStack, Image } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaEdit, FaChartBar } from "react-icons/fa";

const Index = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [service, setService] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [editingUser, setEditingUser] = useState(null);

  const handleInviteUser = () => {
    if (email && name && role && service) {
      const newUser = {
        id: Date.now(),
        email,
        name,
        roles: [{ role, service }],
        profilePicture,
      };
      setUsers([...users, newUser]);
      setEmail("");
      setName("");
      setRole("");
      setService("");
    }
  };

  const handleRecoverAccount = (userId) => {
    // Trigger account recovery process for the user with the given userId
    console.log(`Recovering account for user with ID: ${userId}`);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setEmail(user.email);
    setName(user.name);
    setRole(user.roles[0].role);
    setService(user.roles[0].service);
    setProfilePicture(user.profilePicture);
  };

  const handleUpdateUser = () => {
    if (editingUser) {
      const updatedUsers = users.map((user) => {
        if (user.id === editingUser.id) {
          return {
            ...user,
            email,
            name,
            roles: [{ role, service }],
            profilePicture,
          };
        }
        return user;
      });
      setUsers(updatedUsers);
      setEditingUser(null);
      setEmail("");
      setName("");
      setRole("");
      setService("");
    }
  };

  return (
    <Box p={8}>
      <Heading as="h1" mb={8}>
        User Administration
      </Heading>

      <Flex mb={8}>
        <VStack mr={8} spacing={4}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Role</FormLabel>
            <Select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Service</FormLabel>
            <Select value={service} onChange={(e) => setService(e.target.value)}>
              <option value="">Select Service</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Profile Picture</FormLabel>
            <Input type="file" accept="image/*" onChange={(e) => setProfilePicture(e.target.files[0])} />
          </FormControl>
          {editingUser ? (
            <Button leftIcon={<FaEdit />} onClick={handleUpdateUser}>
              Update User
            </Button>
          ) : (
            <Button leftIcon={<FaPlus />} onClick={handleInviteUser}>
              Invite User
            </Button>
          )}
        </VStack>

        <Box flex={1}>
          <Table>
            <Thead>
              <Tr>
                <Th>Profile Picture</Th>
                <Th>Email</Th>
                <Th>Name</Th>
                <Th>Roles</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user.id}>
                  <Td>
                    {user.profilePicture && (
                      <Image src={URL.createObjectURL(user.profilePicture)} alt="Profile Picture" boxSize="50px" objectFit="cover" borderRadius="full" />
                    )}
                  </Td>
                  <Td>{user.email}</Td>
                  <Td>{user.name}</Td>
                  <Td>
                    {user.roles.map((roleService) => (
                      <Text key={roleService.role}>
                        {roleService.role} - {roleService.service}
                      </Text>
                    ))}
                  </Td>
                  <Td>
                    <Button size="sm" mr={2} onClick={() => handleRecoverAccount(user.id)}>
                      Recover
                    </Button>
                    <Button size="sm" mr={2} onClick={() => handleEditUser(user)}>
                      Edit
                    </Button>
                    <Button size="sm" onClick={() => handleDeleteUser(user.id)}>
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>

      <Box>
        <Heading as="h2" mb={4}>
          Usage Statistics
        </Heading>
        {/* Add usage statistics graphs here */}
        <Flex justify="center" align="center" height="200px">
          <FaChartBar size="4em" />
          <Text ml={4}>Usage statistics graphs coming soon!</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
