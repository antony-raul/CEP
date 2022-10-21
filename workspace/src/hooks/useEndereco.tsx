import { useEffect, useMemo, useState } from 'react';
import { RetornoCep } from '../api';
import { httpApi } from '../api/api';
import { CepService } from '../api/services/cep.service';

interface UseEnderecoProps {
  cep: string;
}
export const useEndereco = ({ cep }: UseEnderecoProps) => {
  const cepService = useMemo(() => new CepService(httpApi), []);
  const [endereco, setEndereco] = useState<RetornoCep>();
  useEffect(() => {
    cepService
      .endereco(cep)
      .then((response) => {
        setEndereco(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cep]);
  return endereco;
};
