import { Container, Flex, Heading, Spacer } from '@chakra-ui/react';
import { ToggleTheme } from '../ToggleTheme';

export const Menu: React.FC = () => {
  return (
    <Container maxW="container.xl" pt={3}>
      <Flex>
        <Heading>Localiza CEP</Heading>
        <Spacer />
        <ToggleTheme />
      </Flex>
    </Container>
  );
};
