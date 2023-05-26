import { Entity } from './Entity';
import { NetworkParticipant } from './NetworkParticipant';
import { SubscriberContext } from './SubscriberContext';
export declare class Subscribe {
    context: {
        operation: SubscriberContext;
    };
    message: {
        request_id: string;
        timestamp: Date;
        entity: Entity;
        network_participant: NetworkParticipant;
    };
    constructor(context: {
        operation: SubscriberContext;
    }, message: {
        request_id: string;
        timestamp: Date;
        entity: Entity;
        network_participant: NetworkParticipant;
    });
}
