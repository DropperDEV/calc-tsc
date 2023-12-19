import styled from "styled-components";

const InputStyle = styled.input`
  height: 40px;
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  font-size: 24px;
  font-family: "Roboto", sans-serif;

  background-color: #a87bf5;
  border: 0;
  color: #fff;
`;

interface IInput{
  value: string
}

export default function Input({value}: IInput) {
  return <InputStyle placeholder={value}/>;
}
