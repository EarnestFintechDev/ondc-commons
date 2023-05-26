import { Documentation } from '@smoke-trees/postgres-backend';
import { Entity } from './Entity';
import { NetworkParticipant } from './NetworkParticipant';
import { SubscriberContext } from './SubscriberContext';

export class Subscribe {
  context: {
    operation: SubscriberContext;
  };
  message: {
    request_id: string;
    timestamp: Date;
    entity: Entity;
    network_participant: NetworkParticipant;
  };

  constructor(
    context: {
      operation: SubscriberContext;
    },
    message: {
      request_id: string;
      timestamp: Date;
      entity: Entity;
      network_participant: NetworkParticipant;
    }
  ) {
    this.context = context;
    this.message = message;
  }
}
