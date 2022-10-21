import { AxiosInstance, AxiosResponse } from 'axios';
import { RetornoCep } from '../models';

export class CepService {
  constructor(private apiCliente: AxiosInstance) {}

  public async endereco(cep: string): Promise<AxiosResponse<RetornoCep>> {
    try {
      const response = await this.apiCliente.get<RetornoCep>(
        `/buscar/endereco/${cep}`
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
