import { SeasonSummary, SEASON_SUMMARY, Episode, EPISODE } from '../public/info';
import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface ContinueSeason {
  season?: SeasonSummary,
  episode?: Episode,
  continueTimeMs?: number,
}

export let CONTINUE_SEASON: MessageDescriptor<ContinueSeason> = {
  name: 'ContinueSeason',
  fields: [{
    name: 'season',
    index: 1,
    messageType: SEASON_SUMMARY,
  }, {
    name: 'episode',
    index: 2,
    messageType: EPISODE,
  }, {
    name: 'continueTimeMs',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
