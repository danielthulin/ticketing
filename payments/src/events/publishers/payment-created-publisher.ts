import { Subjects, Publisher, PaymentCreatedEvent } from '@danielthulintickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
