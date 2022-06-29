import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}
export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Hakuna Matata</Text>
          <Text color="gray.300" fontSize="small">
            hakuna@matata.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Hakuna Matata"
        src="https://github.com/wwchacalww.png"
      />
    </Flex>
  );
}
