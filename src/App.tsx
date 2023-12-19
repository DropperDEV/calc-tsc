import styled from "styled-components";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cacaca;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.main`
  width: 50%;
  min-height: 350px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const App: React.FC = () => {
  const [currentNumber, setCurrentNumber] = useState<string>("0");
  const [firstNumber, setFirstNumber] = useState<string>("0");
  const [operation, setOperation] = useState<string>("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (num: string) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const difference = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(difference));
      setOperation("");
    }
  };

  const handleMultNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation("");
    }
  };

  const handleDivideNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const divide = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divide));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "*":
          handleMultNumbers();
          break;
        case "/":
          handleDivideNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <ButtonWrapper>
          <Button name="x" action={handleMultNumbers} />
          <Button name="/" action={handleDivideNumbers} />
          <Button name="c" action={handleOnClear} />
          <Button name="." action={() => setOperation("")} />
          <Button name="7" action={() => handleAddNumber("7")} />
          <Button name="8" action={() => handleAddNumber("8")} />
          <Button name="9" action={() => handleAddNumber("9")} />
          <Button name="-" action={handleMinusNumbers} />
          <Button name="4" action={() => handleAddNumber("4")} />
          <Button name="5" action={() => handleAddNumber("5")} />
          <Button name="6" action={() => handleAddNumber("6")} />
          <Button name="+" action={handleSumNumbers} />
          <Button name="1" action={() => handleAddNumber("1")} />
          <Button name="2" action={() => handleAddNumber("2")} />
          <Button name="3" action={() => handleAddNumber("3")} />
          <Button name="=" action={handleEquals} />
        </ButtonWrapper>
      </Content>
    </Container>
  );
};

export default App;
