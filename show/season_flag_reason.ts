import { EnumDescriptor } from '@selfage/message/descriptor';

export enum SeasonFlagReason {
  PRIVACY_VIOLATION = 1,
  HARASSMENT = 2,
  SEXUAL_CONTENT = 3,
  SPAM = 4,
  CHILD_ABUSE = 5,
  COPYRIGHT_OR_TRADEMARK_INFRINGEMENT = 6,
}

export let SEASON_FLAG_REASON: EnumDescriptor<SeasonFlagReason> = {
  name: 'SeasonFlagReason',
  values: [{
    name: 'PRIVACY_VIOLATION',
    value: 1,
  }, {
    name: 'HARASSMENT',
    value: 2,
  }, {
    name: 'SEXUAL_CONTENT',
    value: 3,
  }, {
    name: 'SPAM',
    value: 4,
  }, {
    name: 'CHILD_ABUSE',
    value: 5,
  }, {
    name: 'COPYRIGHT_OR_TRADEMARK_INFRINGEMENT',
    value: 6,
  }]
}
