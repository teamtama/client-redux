import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const TEST = publicRuntimeConfig.TEST;
