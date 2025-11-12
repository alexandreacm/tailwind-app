# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Linting and Formatting

This project uses ESLint and Prettier for code quality and formatting.

### ESLint

- **Check for linting errors:**

  ```bash
  npm run lint
  ```

- **Fix auto-fixable linting errors:**
  ```bash
  npm run lint:fix
  ```

### Prettier

- **Format all files:**

  ```bash
  npm run format
  ```

  or

  ```bash
  npm run format:write
  ```

- **Check if files are formatted correctly:**
  ```bash
  npm run format:check
  ```

### Integrated Setup

ESLint is configured to work with Prettier, so running `npm run lint` will also check Prettier formatting. The Prettier configuration uses:

- Single quotes for strings
- Semicolons
- 2-space indentation
- Tailwind CSS plugin for class sorting

## Testing

This project uses Jest and React Native Testing Library for unit testing.

### Running Tests

- **Run all tests:**

  ```bash
  npm test
  ```

- **Run tests in watch mode:**

  ```bash
  npm run test:watch
  ```

- **Run tests with coverage:**
  ```bash
  npm run test:coverage
  ```

### Writing Tests

Test files should be placed next to the components they test with the `.test.tsx` or `.test.ts` extension, or in a `__tests__` directory.

Example test file (`app/index.test.tsx`):

```typescript
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { ThemeProvider } from '@react-navigation/native';
import LoadingScreen from './index';

const mockTheme = {
  dark: false,
  colors: {
    primary: '#007AFF',
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#000000',
    border: '#E5E5E5',
    notification: '#FF3B30',
  },
};

describe('LoadingScreen', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider value={mockTheme}>
        <LoadingScreen />
      </ThemeProvider>
    );
    expect(screen.getByText('Animation...')).toBeTruthy();
  });
});
```

## Commit Messages

This project uses [Commitizen](https://github.com/commitizen/cz-cli) with [Conventional Commits](https://www.conventionalcommits.org/) for standardized commit messages.

### Making Commits

Instead of using `git commit`, use one of these commands:

**With npm:**

```bash
npm run commit
# or
npm run cz
# or
npx cz
```

**With yarn:**

```bash
yarn commit
# or
yarn cz
```

All of these commands will launch an interactive prompt that guides you through creating a conventional commit message.

### Commit Types

The conventional commit format includes:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools
- **ci**: Changes to CI configuration files and scripts

### Example

```bash
npm run commit
# Follow the prompts to create a commit like:
# feat: add login form component
# fix: resolve navigation issue on Android
# docs: update README with setup instructions
```

### Direct Git Commit (Not Recommended)

If you need to commit directly with git, make sure your commit messages follow the conventional format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

## CI/CD

This project uses GitHub Actions for continuous integration. The **CI Mobile** workflow runs automatically on pull requests and pushes to main branches.

### Workflow Jobs

The CI pipeline includes three jobs:

1. **Setup** - Verifies that the project setup is correct:
   - Checks Node.js and npm versions
   - Installs dependencies using `npm ci`
   - Verifies dependency installation

2. **Lint** - Runs code quality checks:
   - ESLint linting (`npm run lint`)
   - Prettier format checking (`npm run format:check`)

3. **Tests** - Runs the test suite:
   - Executes all Jest tests (`npm test`)
   - Optionally uploads coverage reports to Codecov

### Workflow File

The CI configuration is located at `.github/workflows/ci-mobile.yml`.

### Running CI Locally

You can simulate the CI pipeline locally by running:

```bash
# Setup check
npm ci

# Lint check
npm run lint
npm run format:check

# Run tests
npm test
```

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
