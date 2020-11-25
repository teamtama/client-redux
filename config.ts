import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const TEST = publicRuntimeConfig.TEST;
export const BASE_URL = publicRuntimeConfig.BASE_URL;
