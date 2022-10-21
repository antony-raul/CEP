import { Box, Flex, IconButton, Skeleton, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { RetornoCep } from '../../api';
import { ButtonReturn, InputCep } from '../../components';
import { useEndereco } from '../../hooks';

export const BuscaCep: React.FC = () => {
  const [cep, setCep] = useState<string>();
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const [retornoCep, setRetornoCep] = useState<RetornoCep>();
  const endereco = useEndereco({ cep: '63050250' });
  return (
    <>
      <ButtonReturn />
      <Box mt={5} borderWidth={1} borderRadius={8} p={5}>
        <Flex gap={5}>
          <InputCep
            width={200}
            placeholder={'Busque por um CEP'}
            changeValue={(cep, isInvalid) => {
              setCep(cep);
              setIsInvalid(isInvalid);
            }}
          />
          <IconButton
            icon={<FaSearch />}
            isRound
            aria-label="Buscar CEP"
            alignSelf="flex-end"
            disabled={isInvalid}
          />
        </Flex>
        <Box mt={5} borderWidth={1} borderRadius={8} p={5}>
          {retornoCep ? (
            <Stack>
              <Skeleton height="20px" isLoaded={true}>
                <Text fontSize="lg">
                  Logradouro: {retornoCep.logradouro || '---'}
                </Text>
              </Skeleton>
              <Skeleton height="20px" isLoaded={true}>
                <Text fontSize="lg">
                  Complemento: {retornoCep.complemento || '---'}
                </Text>
              </Skeleton>
              <Skeleton height="20px" isLoaded={true}>
                <Text fontSize="lg">Bairro: {retornoCep.bairro || '---'}</Text>
              </Skeleton>
              <Skeleton height="20px" isLoaded={true}>
                <Text fontSize="lg">
                  Localidade: {retornoCep.localidade || '---'}
                </Text>
              </Skeleton>
              <Skeleton height="20px" isLoaded={true}>
                <Text fontSize="lg">UF: {retornoCep.uf || '---'}</Text>
              </Skeleton>
            </Stack>
          ) : (
            <Flex align="center" justifyContent="center">
              <Text fontSize="lg">Os dados apareceram aqui</Text>
              <p>{endereco?.bairro || ''}</p>
            </Flex>
          )}
        </Box>
      </Box>
    </>
  );
};
