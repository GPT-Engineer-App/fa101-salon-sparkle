import React, { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, useToast, Image } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    // In a real application, you would handle authentication here.
    toast({
      title: "Login Attempted",
      description: "This is a mock login. In a real app, you'd be authenticated.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Image src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWxvbnxlbnwwfHx8fDE3MDk3MDE3NTd8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" borderRadius="full" alt="FA101 Salon and Spa Logo" mb={8} />
        <Heading as="h1" mb={6}>
          FA101 Salon and Spa
        </Heading>
        <Box w="100%" p={8} borderWidth="1px" borderRadius="lg" boxShadow="lg">
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
            </FormControl>
            <Button leftIcon={<FaSignInAlt />} colorScheme="teal" variant="solid" onClick={handleLogin} isFullWidth>
              Login
            </Button>
          </Stack>
        </Box>
        <Text mt={6}>Don't have an account? Contact us to get set up.</Text>
      </Flex>
    </Container>
  );
};

export default Index;
