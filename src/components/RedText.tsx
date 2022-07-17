import { Text } from "ink";
import React = require("react");

export default function RedText({ text }) {
  return(
    <Text bold color="redBright">{text}</Text>
  );
};