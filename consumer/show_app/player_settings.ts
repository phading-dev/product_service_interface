import { MessageDescriptor, PrimitiveType, EnumDescriptor } from '@selfage/message/descriptor';

export interface VideoSettings {
/* 0 to 1 */
  volume?: number,
  muted?: boolean,
/* .25x to 4x */
  playbackSpeed?: number,
}

export let VIDEO_SETTINGS: MessageDescriptor<VideoSettings> = {
  name: 'VideoSettings',
  fields: [
    {
      name: 'volume',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'muted',
      primitiveType: PrimitiveType.BOOLEAN,
    },
    {
      name: 'playbackSpeed',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export enum DistributionStyle {
  RANDOM = 1,
  TOP_DOWN = 2,
}

export let DISTRIBUTION_STYLE: EnumDescriptor<DistributionStyle> = {
  name: 'DistributionStyle',
  values: [
    {
      name: 'RANDOM',
      value: 1,
    },
    {
      name: 'TOP_DOWN',
      value: 2,
    },
  ]
}

export interface DanmakuSettings {
  enable?: boolean,
  speed?: number,
/* 0 to 1 */
  opacity?: number,
  fontSize?: number,
/* Ratio 0 to 1. For every 100 pixels, the number of pixels should be occupied. */
  density?: number,
/* Ratio 0 to 1 */
  topMargin?: number,
/* Ratio 0 to 1 */
  bottomMargin?: number,
  fontFamily?: string,
  distributionStyle?: DistributionStyle,
}

export let DANMAKU_SETTINGS: MessageDescriptor<DanmakuSettings> = {
  name: 'DanmakuSettings',
  fields: [
    {
      name: 'enable',
      primitiveType: PrimitiveType.BOOLEAN,
    },
    {
      name: 'speed',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'opacity',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'fontSize',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'density',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'topMargin',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'bottomMargin',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'fontFamily',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'distributionStyle',
      enumType: DISTRIBUTION_STYLE,
    },
  ]
};

export interface PlayerSettings {
  videoSettings?: VideoSettings,
  danmakuSettings?: DanmakuSettings,
}

export let PLAYER_SETTINGS: MessageDescriptor<PlayerSettings> = {
  name: 'PlayerSettings',
  fields: [
    {
      name: 'videoSettings',
      messageType: VIDEO_SETTINGS,
    },
    {
      name: 'danmakuSettings',
      messageType: DANMAKU_SETTINGS,
    },
  ]
};
