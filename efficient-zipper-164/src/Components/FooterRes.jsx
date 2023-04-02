import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Img,
  Flex,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
// import AppStoreBadge from "@/components/AppStoreBadge";
// import PlayStoreBadge from "@/components/PlayStoreBadge";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const FooterRes = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader> ONLINE SHOPPING</ListHeader>

            <Link to="/men">
              {" "}
              <Text fontSize="md">Men</Text>
            </Link>
            <Text fontSize="md">Women</Text>
            <Text fontSize="md">Kids</Text>
            <Text fontSize="md">Home & Living</Text>
            <Text fontSize="md">Gift Cards</Text>
            <Text fontSize="md">Myntra Insider</Text>

            <Text fontSize="lg" as="b">
              USEFUL LINKS
            </Text>
            <Text fontSize="md">Blog</Text>
            <Text fontSize="md">Careers</Text>
            <Text fontSize="md">Site Map</Text>
            <Text fontSize="md">Corporate Information</Text>
            <Link to="/admin">
              <Text fontSize="md">Admin</Text>
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>CUSTOMER POLICIES</ListHeader>

            <Text fontSize="md">Contact us</Text>
            <Text fontSize="md">FAQ</Text>
            <Text fontSize="md">T&C</Text>
            <Text fontSize="md">Terms of Use</Text>
            <Text fontSize="md">Shipping</Text>
            <Text fontSize="md">Cancellation</Text>
            <Text fontSize="md">Returns</Text>
            <Text fontSize="md">Privacy policy</Text>
            <Text fontSize="md">Grievance Officer</Text>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Install App</ListHeader>
            <Img
              src="https://p.kindpng.com/picc/s/790-7908713_download-from-app-store-icons-png-transparent-png.png"
              alt="myntra"
            />
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Qualtiy</ListHeader>
            <Flex>
              {" "}
              <Img
                src="https://t3.ftcdn.net/jpg/01/04/61/26/360_F_104612683_PmSA33T0neVJW2npTpNXY0cS1Fg1bYzq.jpg"
                width="100px"
                borderRadius="50%"
                alt="myntra"
              />
              <Text fontSize="lg" as="b">
                {" "}
                100% ORIGINAL guarantee for all products at myntra.com
              </Text>{" "}
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>
            © 2023 Designed and Develop by Sushant Shekhar. All rights reserved
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
export default FooterRes;
