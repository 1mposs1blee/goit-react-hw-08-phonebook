import styled from '@emotion/styled';

export const ToastText = styled.span`
  font-weight: 600;
`;

export const LogForm = styled.form`
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  border: 2px solid black;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-weight: 600;
  display: flex;

  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  font-weight: 600;
  width: 500px;
  height: 25px;
`;

export const Button = styled.button`
  font-weight: 600;
  width: 100px;
  height: 30px;
  border-radius: 4px;
  background-color: rgb(63, 81, 181);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: rgb(0, 170, 255);
  }
`;
