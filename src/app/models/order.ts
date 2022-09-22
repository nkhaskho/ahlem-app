import { Product } from 'src/app/models/product';
export class Order {
    id: number = 0;
    client: string = "";
    createdAt: Date = new Date();
    products: Product[] = [];
    status: string = "";
}
