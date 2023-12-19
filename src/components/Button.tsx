import styled from "styled-components";

const ButtonStyle = styled.button`
  padding: 20px;
  border: 1px solid #cdcdcd;
  background-color: #00aaf0;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  flex: 1;

  &:hover {
    opacity: 0.8;
  }
`;

interface IButton {
  name: string;
  action: () => void;
}
export default function Button({ name, action }: IButton) {
  return <ButtonStyle onClick={action}>{name}</ButtonStyle>;
}
