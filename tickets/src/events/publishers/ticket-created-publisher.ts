import { Publisher, Subjects, TicketCreatedEvent } from '@danielthulintickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
