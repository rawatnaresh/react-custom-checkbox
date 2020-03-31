import React from "react";
import styled from "styled-components";

const Icon = styled.svg`
  fill: none;
  stroke: #ffffff;
  stroke-width: 2px;
  width: 16px;
  height: 16px;
  opacity: 0;
`;

const Mark = styled.span`
  border: 1px solid #747474;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  margin-right: 5px;
  vertical-align: middle;
  transition: all 150ms;
`;

const Input = styled.input`
  display: none;
  &:checked + ${Mark} ${Icon} {
    opacity: 1;
  }
  &:checked + ${Mark} {
    background-color: #007ccf;
    border: 1px solid #007ccf;
  }
`;

const Label = styled.label`
  display: flex;
  cursor: pointer;
  padding: 5px 10px 5px 0;
  align-items: center;
`;

const Checkbox = ({ name, value, children }) => (
  <Label>
    <Input name={name} value={value} type="checkbox" />
    <Mark>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </Mark>
    {children}
  </Label>
);

export default Checkbox;
