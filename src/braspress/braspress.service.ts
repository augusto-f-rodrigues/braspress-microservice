import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, lastValueFrom } from 'rxjs';
import { CreateBraspressDto } from './dto/create-braspress.dto';

@Injectable()
export class BraspressService {
  constructor(private httpService: HttpService) {}
  private readonly logger = new Logger(BraspressService.name);

  http: string = process.env.BP_BASE_URL;
  cnpj: string = process.env.BP_CNPJ;
  auth: string = process.env.BP_AUTH;

  async createQuotation(createBraspressDto: CreateBraspressDto): Promise<Tracking.CreateQuotationResponse> {
    const { data } = await lastValueFrom<{ data: Tracking.CreateQuotationResponse }>(
      this.httpService.post(`${process.env.BP_QUOTATION_URL}`, createBraspressDto, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${this.auth}`
        }
      }).pipe(
        catchError((err: AxiosError) => {
          throw new HttpException(err.response.data, err.response.status);
        }),
      ),
    );
    this.logger.log('Info', data);
    return data;
  }

  async getOrderByNf(id: number): Promise<Tracking.TrackerResponse> {
    const { data } = await lastValueFrom<{ data: Tracking.TrackerResponse }>(
      this.httpService.get(`${this.http}/byNf/${this.cnpj}/${id}/json`, {
        headers:{
          'Authorization': `Basic ${this.auth}`
        }
      }).pipe(
        catchError((err: AxiosError) => {
          throw new HttpException(err.response.data, err.response.status);
        }),
      ),
      
    );
    this.logger.log('Info', data);
    return data;
  }

  async getOrderByNum(id: number): Promise<Tracking.TrackerResponse> {
    const { data } = await lastValueFrom<{ data: Tracking.TrackerResponse }>(
      this.httpService
        .get(`${this.http}/byNumPedido/${this.cnpj}/${id}/json`,
        {
          headers:{
            'Authorization': `Basic ${this.auth}`
          }
        })
        .pipe(
          catchError((err: AxiosError) => {
            throw new HttpException(err.response.data, err.response.status);
          }),
        ),
    );
    this.logger.log('Info', data);
    return data;
  }
}
