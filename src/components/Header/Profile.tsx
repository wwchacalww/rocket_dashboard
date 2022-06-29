import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Hakuna Matata</Text>
          <Text color="gray.300" fontSize="small">
            hakuna@matata.com
          </Text>
        </Box>

        <Avatar
          size="md"
          name="Hakuna Matata"
          src="https://github.com/wwchacalww.png"
        />
      </Flex>
  );
}