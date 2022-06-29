import { Flex, HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export default function NotificationsNav() {
  return (
    <Flex ml="auto" align="center">
      <HStack
        spacing="8"
        mx="8"
        pr="8"
        py="1"
        color="gray.300"
        borderRightWidth={1}
        borderRightColor="gray.700"
      >
        <Icon as={RiNotificationLine} fontSize={20} />
        <Icon as={RiUserAddLine} fontSize={20} />
      </HStack>
    </Flex>
  );
}
