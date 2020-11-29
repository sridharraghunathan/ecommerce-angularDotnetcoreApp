import { Iproduct } from './Product';

export interface Ipagination{
    pageIndex: number;
    pageSize: number;
    count: number;
    data: Iproduct[];
}
