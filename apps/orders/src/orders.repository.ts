import { AbstractRepository } from '@app/common';
import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Order } from './schemas/order.schema';
import { Model, Connection } from 'mongoose';

@Injectable()
export class OrdersRepository extends AbstractRepository<Order> {
  protected readonly logger = new Logger(Order.name);

  constructor(
    @InjectModel(Order.name) orderModel: Model<Order>,
    @InjectConnection() connection: Connection,
  ) {
    super(orderModel, connection);
  }
}
