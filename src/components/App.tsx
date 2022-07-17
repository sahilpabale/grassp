import { Box, Text } from "ink";
import useStdoutDimensions from 'ink-use-stdout-dimensions';
import React = require("react");


export function App({ args, flags }) {
  const [columns, rows] = useStdoutDimensions();
  
  return(
      <Box
        flexDirection="column"
        height={rows}
        width={columns}
        justifyContent="center"
        alignItems="center"
        borderStyle="classic"
      >
      <Box width="50%" minWidth={30} flexDirection="column">
        <Text bold color="redBright">Thanks for entering {args.name} Developer Mode </Text>
      </Box>
      </Box>
  );
};