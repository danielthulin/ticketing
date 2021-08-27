import { Subjects, Publisher, ExpirationCompleteEvent } from '@danielthulintickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
