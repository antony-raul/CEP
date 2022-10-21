import { Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface InputCepProps {
  width: number;
  placeholder: string;
  changeValue: (cep: string, isInvalid: boolean) => void;
}

export const InputCep: React.FC<InputCepProps> = ({
  width,
  placeholder,
  changeValue,
}: InputCepProps) => {
  const [cep, setCep] = useState<string>('');
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const formataCep = (value: string) => {
    const cepFormatado = value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
    setCep(cepFormatado);
  };
  const validaInput = (value: string) => {
    return value.length < 9 ? true : false;
  };

  useEffect(() => {
    setIsInvalid(validaInput(cep));
    changeValue(cep, validaInput(cep));
  }, [cep]);
  return (
    <Input
      variant="outline"
      placeholder={placeholder}
      type="text"
      width={width}
      onChange={({ target }) => {
        formataCep(target.value);
      }}
      value={cep || ''}
      isInvalid={isInvalid}
      autoFocus
    />
  );
};
