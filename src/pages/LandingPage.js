import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Avatar from "react-avatar";

import { Link as ReachLink } from "react-router-dom";
import { useState } from "react";
const goTo = (tag) => {
  document.getElementById(tag).scrollIntoView({
    behavior: "smooth",
  });
};
const NavLink = ({ children, tag }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    onClick={() => goTo(tag)}
  >
    {children}
  </Link>
);
export default function LandingPage({ Links }) {
  const { isOpen, onToggle } = useDisclosure();
  const [isLogged, setLogged] = useState(true);
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1 }}
          alignItems="center"
          justify={{ base: "center", md: "start" }}
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            color={useColorModeValue("#5E5542", "white")}
          >
            بناء
          </Text>

          <HStack as={"nav"} spacing={4} mr={4}>
            {Links.map((link) => (
              <NavLink key={link.id} tag={link.tag}>
                {link.text}
              </NavLink>
            ))}
          </HStack>
        </Flex>

        {!isLogged ? (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"/login"}
            >
              تسجيل الدخول
            </Button>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              borderRadius={"1px"}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"#5E5542"}
              href={"/sginup"}
              _hover={{
                bg: "#5E5542",
              }}
            >
              انشاء حساب
            </Button>
          </Stack>
        ) : (
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar name="Anhar" color="#5E5542" size="40" round={true} />
              </MenuButton>
              <MenuList>
                <MenuItem as={ReachLink} to="/profile">
                  بياناتي
                </MenuItem>
                <MenuItem 
                  as={"a"}
                  href={'/my-appointment'}
                >
                  موعيدي
                </MenuItem>
                {/* ما يحتاج نحط زر حجز  خدمة هنا  */}
                {/* <MenuItem>حجز خدمة</MenuItem>
                <MenuDivider />
                <MenuDivider /> */}
                <MenuItem>تسجيل خروج</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};