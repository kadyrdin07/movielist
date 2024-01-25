import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 300px;
  height: 30px;
  margin-left: 150px;
  border-radius: 20px;
  background-color: red;
  box-shadow: 0 0 30px 0 white;
`;

const StyledInput1 = styled.input`
  width: 300px;
  height: 30px;
  margin-left: 150px;
  border-radius: 20px;
  background-color: red;
  box-shadow: 0 0 30px 0 white;
`;

const StyledInput2 = styled.input`
  width: 300px;
  height: 30px;
  margin-left: 150px;
  border-radius: 20px;
  background-color: red;
  box-shadow: 0 0 30px 0 white;
`;

const SyledButton = styled.button`
  width: 200px;
  height: 30px;
  margin-left: 600px;
  margin-top: 50px;
  background-color: blue;
  box-shadow: 0 0 30px 0 white;
`;

const TodoAdd = ({ user, setUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [img, setImg] = useState("");

  const handleAdd = () => {
    const newUser = {
      id: Math.random(),
      name: name,
      age: age,
      img: img,
    };

    setUser([...user, newUser]);
    setName("");
    setAge("");
    setImg("");
  };

  return (
    <div>
      <StyledInput
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <StyledInput1
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <StyledInput2
        type="text"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <SyledButton onClick={handleAdd}>Add User</SyledButton>
    </div>
  );
};

export default TodoAdd;
