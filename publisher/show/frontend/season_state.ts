import { EnumDescriptor } from '@selfage/message/descriptor';

export enum SeasonState {
  DRAFT = 1,
  PUBLISHED = 2,
  ARCHIVED = 3,
}

export let SEASON_STATE: EnumDescriptor<SeasonState> = {
  name: 'SeasonState',
  values: [{
    name: 'DRAFT',
    value: 1,
  }, {
    name: 'PUBLISHED',
    value: 2,
  }, {
    name: 'ARCHIVED',
    value: 3,
  }]
}
