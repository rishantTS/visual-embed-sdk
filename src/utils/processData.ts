import { initSession } from '../auth';
import { EmbedEvent, OperationType } from '../types';
import { getAnswerServiceInstance } from './answerService';

export function processCustomAction(e: any, thoughtSpotHost: string) {
    if (
        [
            OperationType.GetChartWithData,
            OperationType.GetTableWithHeadlineData,
        ].includes(e.data?.operation)
    ) {
        const { session, query, operation } = e.data;
        const answerService = getAnswerServiceInstance(
            session,
            query,
            operation,
            thoughtSpotHost,
        );
        return {
            ...e,
            answerService,
        };
    }
    return e;
}

function processAuthInit(e: any) {
    // Store user session details sent by app.
    initSession(e.data);

    // Expose only allowed details (eg: userGUID) back to SDK users.
    return {
        ...e,
        data: {
            userGUID: e.data.userGUID,
        },
    };
}

export function getProcessData(
    type: EmbedEvent,
    e: any,
    thoughtSpotHost: string,
) {
    switch (type) {
        case EmbedEvent.CustomAction:
            return processCustomAction(e, thoughtSpotHost);
        case EmbedEvent.AuthInit:
            return processAuthInit(e);
        default:
    }
    return e;
}