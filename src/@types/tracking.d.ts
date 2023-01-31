declare namespace Tracking {
  export interface TrackerResponse {
    conhecimentos: Conhecimentos[];
    totalNf: number;
    fluxoAtendimento: any;
  }

  export interface Conhecimentos {
    statusEntrega: any;
    numero: string;
    origem: string;
    destino: string;
    emissao: string;
    remetente: string;
    destinatario: string;
    tipoFrete: string;
    volumes: number;
    valorMercantil: number;
    peso: number;
    totalFrete: number;
    previsaoEntrega: string;
    dataEntrega: any;
    status: string;
    cidade: string;
    uf: string;
    cidadeColeta: string;
    ufColeta: string;
    dataOcorrencia: string;
    ultimaOcorrencia: string;
    notasFiscais: NotasFiscais[];
    timeLine: TimeLine[];
  }

  export interface NotasFiscais {
    serie: string;
    numero: string;
    emissao: string;
  }

  export interface TimeLine {
    descricao: string;
    data: string;
  }

  export interface CreateQuotationResponse {
    id: string;
    prazo: string;
    totalFrete: string;
  }

  export interface CreateQuotationError {
    statusCode: string;
    message: string;
   dateTime: string;
   errorList: string[];
  }
}
