// Jest setup file
// Note: @testing-library/react-native v12.4+ includes Jest matchers by default

// Mock Expo's installGlobal to prevent runtime errors
if (typeof global !== 'undefined') {
  global.__ExpoImportMetaRegistry = new Map();
  // Mock structuredClone for Expo runtime
  if (!global.structuredClone) {
    global.structuredClone = obj => JSON.parse(JSON.stringify(obj));
  }
}

// Mock expo modules that might cause issues in tests
jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
  usePathname: () => '/',
  useSegments: () => [],
  Link: 'Link',
  Stack: {
    Screen: 'Screen',
  },
}));

jest.mock('expo-font', () => ({
  useFonts: jest.fn(() => [true, null]),
}));

jest.mock('expo-splash-screen', () => ({
  preventAutoHideAsync: jest.fn(),
  hideAsync: jest.fn(),
}));

// Mock NativeWind/className support
jest.mock('nativewind', () => ({
  styled: Component => Component,
}));

// Mock expo to prevent runtime import errors
jest.mock('expo', () => ({
  __esModule: true,
  default: {},
}));
