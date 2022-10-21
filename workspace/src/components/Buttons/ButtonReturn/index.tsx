import { Button } from '@chakra-ui/react';
import { FaAngleDoubleLeft } from 'react-icons/fa';

export const ButtonReturn: React.FC = () => {
  return (
    <a href="/">
      <Button
        leftIcon={<FaAngleDoubleLeft />}
        colorScheme="teal"
        variant="outline"
      >
        Voltar
      </Button>
    </a>
  );
};
