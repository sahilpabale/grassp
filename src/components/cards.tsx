import chalk from "chalk";
import { Box, Newline, Text } from "ink";
import React = require("react");

const Cards = ({ cards }) => {
  const compare = (a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  };

  const sortedCards = cards.sort(compare);

  return (
    <Box width="100%" padding={1} flexDirection="column">
      {sortedCards.map(({ title, content, order, link }) => (
        <Box
          key={order}
          padding={1}
          borderColor="blue"
          borderStyle="round"
          flexDirection="column"
        >
          <Text color="cyan" bold>
            {order}. {title}
          </Text>
          <Newline />
          <Text>{content}</Text>
          <Newline />
          <Text>
            {chalk.green(`Read more at ${chalk.blue.underline(link)}`)}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default Cards;
