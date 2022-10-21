import { Container } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BuscaCep } from '../busca-cep';
import { Home } from '../home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'cep',
    element: <BuscaCep />,
  },
]);

export const Entrypoint: React.FC = () => {
  return (
    <Container maxW="container.xl" pt={3}>
      <RouterProvider router={router} />
    </Container>
  );
};
