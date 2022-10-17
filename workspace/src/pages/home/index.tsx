import { Box, Button, Container, Heading } from '@chakra-ui/react';

export const Home: React.FC = () => {
  return (
    <Container maxW="container.xl" pt={3}>
      <Heading as="h2" size="sm">
        Se você está precisando sabre mais informações sobre um CEP ou um
        endereço escolha uma das opções
      </Heading>
      <Box mt={10}>
        <Button colorScheme="teal" mr={5}>
          Busque por um CEP
        </Button>
        <Button colorScheme="teal">Busque por um endereço</Button>
      </Box>
    </Container>
  );
};