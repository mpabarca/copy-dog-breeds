jest.setTimeout(30000);
jest.mock('next/config', () => ({
  __esModule: true,
  default: () => ({
    publicRuntimeConfig: {
      URL_DOG_API: 'https://dog.ceo/api',
    },
  }),
}));
