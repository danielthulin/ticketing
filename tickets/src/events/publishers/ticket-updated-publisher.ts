import { Publisher, Subjects, TicketUpdatedEvent } from '@danielthulintickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
