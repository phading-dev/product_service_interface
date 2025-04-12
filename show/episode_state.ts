import { EnumDescriptor } from '@selfage/message/descriptor';

export enum EpisodeState {
  DRAFT = 1,
  PUBLISHED = 2,
}

export let EPISODE_STATE: EnumDescriptor<EpisodeState> = {
  name: 'EpisodeState',
  values: [{
    name: 'DRAFT',
    value: 1,
  }, {
    name: 'PUBLISHED',
    value: 2,
  }]
}
