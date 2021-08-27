import { Publisher, OrderCreatedEvent, Subjects } from '@danielthulintickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
