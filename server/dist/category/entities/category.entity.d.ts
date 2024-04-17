import { User } from "src/user/entities/user.entity";
import { Transaction } from "src/transaction/entities/transaction.entity";
export declare class Category {
    id: number;
    title: string;
    user: User;
    transactions: Transaction[];
    createdAt: Date;
    updatedAt: Date;
}
