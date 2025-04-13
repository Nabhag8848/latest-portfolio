# Modern React Template with Vite

A modern, minimal React template built with Vite, featuring TypeScript, React Router, Emotion, and system-aware theming. This template provides a solid foundation for building modern web applications with best practices and excellent developer experience.

## Features

- ⚡️ **Vite** - Lightning fast build tool with instant HMR
- 🎨 **Emotion** - Powerful CSS-in-JS with theme support
- 🌓 **Dark/Light Mode** - System-aware theming with smooth transitions
- 🛣️ **React Router** - Declarative routing with the latest React Router
- 📝 **TypeScript** - Type safety and better developer experience
- 🎯 **ESLint** - Strict TypeScript and React specific linting rules
- 📦 **Modern Package Management** - Using pnpm for efficient dependency management
- 🏗️ **Default Layout** - Clean and maintainable layout structure
- 🎭 **Motion Support** - Built-in animation capabilities
- 🚀 **Production Ready** - Optimized build setup for production

## Code Examples

### Theme Setup and Usage

This project uses Emotion for theming with a light/dark mode system. Here's how it's implemented:

#### 1. Theme Provider Setup

```tsx
// AppRouterProviders.tsx
import { ThemeProvider } from "@emotion/react";
import { THEME_DARK } from "@ui/theme/dark";
import { THEME_LIGHT } from "@ui/theme/light";
import { useSystemColorScheme } from "@ui/theme/hooks/useSystemColorScheme";

export const AppRouterProviders = () => {
  // Automatically detect system color scheme
  const preferredColorScheme = useSystemColorScheme();
  const isDarkMode = preferredColorScheme === "dark";
  const theme = isDarkMode ? THEME_DARK : THEME_LIGHT;

  // Set HTML class for dark/light mode
  document.documentElement.className = isDarkMode ? "dark" : "light";

  return (
    <ThemeProvider theme={theme}>
      <StrictMode>
        <PageTitle />
        <Outlet />
      </StrictMode>
    </ThemeProvider>
  );
};
```

#### 2. Global Styles Setup

```tsx
// DefaultLayout.tsx
import { Global, useTheme } from "@emotion/react";
import { globalStyles } from "@ui/styles/global";

export const DefaultLayout = () => {
  const theme = useTheme();
  const styles = globalStyles(theme);

  return (
    <>
      <Global styles={styles} />
      <Outlet />
    </>
  );
};
```

#### 3. Using Theme in Components

```tsx
// Example component using theme
import { useTheme } from "@emotion/react";
import styled from "styled-components";

const StyledComponent = styled.div`
  background-color: ${(props) => props.theme.background.primary};

  //...OtherStyles
`;

const MyComponent = () => {
  const theme = useTheme();

  return (
    <StyledComponent>
      <h1 style={{ color: theme.text.secondary }}>Hello World</h1>
    </StyledComponent>
  );
};
```

#### Key Features:

- Automatic dark/light mode detection based on system preferences
- Theme values accessible throughout the application
- Global styles that respond to theme changes

#### Theme Structure:

```typescript
interface Theme {
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
  spacing: {
    sm: string;
    md: string;
    lg: string;
  };
  // ... other theme properties
}
```

### Routing Setup

```tsx
// Basic route configuration
<Route element={<DefaultLayout />}>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Route>
```

## Quick Start

### Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Navigate to project directory
cd [your-project-name]

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

The development server will start at http://localhost:3001

### Build

```bash
# Create production build
pnpm build
```

## Project Structure

```
src/
├── app/          # Application-specific components and logic
├── ui/           # Reusable UI components and theme
│   ├── layout/   # Layout components
│   ├── theme/    # Theme configuration
│   └── styles/   # Global styles
├── utils/        # Utility functions
└── main.tsx      # Application entry point
```

## Theme Configuration

The template includes a system-aware theme that automatically switches between light and dark mode based on system preferences. Theme configuration can be found in:

- `src/ui/theme/light.ts`
- `src/ui/theme/dark.ts`

## ESLint Configuration

The project includes a comprehensive ESLint setup with:

- TypeScript-aware linting
- React-specific rules
- React Hooks linting
- Strict type checking

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
