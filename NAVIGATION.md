# Navigation Structure

This app uses React Navigation 6 with Native Stack Navigator and optimized performance.

## Important Notes

- ✅ Uses `@react-navigation/native-stack` for native performance
- ✅ Includes `react-native-screens@^3.20.0` for native screen optimizations
- ✅ Compatible with iOS 14.0 deployment target
- ✅ Uses `react-native-gesture-handler` for smooth animations
- ✅ Explicitly enables screens with `enableScreens()` for best performance

## Screens

### HomeScreen (`/`)
- The main landing screen
- Contains navigation buttons to other screens
- Shows welcome message and app title

### ProfileScreen (`/profile`)
- Displays user profile information
- Mock user data (name, email, member since)
- Has a "Go Back" button

### SettingsScreen (`/settings`)
- App settings and preferences
- Toggle switches for notifications and dark mode
- Mock setting options (Clear Cache, Privacy Policy, Terms of Service)
- Has a "Go Back" button

### DetailsScreen (`/details`)
- Shows detailed information about an item
- Receives parameters: `itemId` and `title`
- Displays item details, price, rating
- Has action buttons and "Go Back" option

## Navigation Flow

```
HomeScreen
├── ProfileScreen
├── SettingsScreen
└── DetailsScreen (with params: itemId, title)
```

## File Structure

```
src/
├── navigation/
│   ├── AppNavigator.tsx    # Main navigation setup
│   ├── types.ts           # Navigation type definitions
│   └── index.ts           # Export barrel
└── screens/
    ├── HomeScreen.tsx
    ├── ProfileScreen.tsx
    ├── SettingsScreen.tsx
    ├── DetailsScreen.tsx
    └── index.ts           # Export barrel
```

## Features Demonstrated

1. **Native Screen Navigation**: Uses native iOS/Android screen components for optimal performance
2. **Parameter Passing**: Pass data between screens (Details screen)
3. **Header Customization**: Custom header styling and titles
4. **Type Safety**: Full TypeScript support with proper typing
5. **Back Navigation**: Native back gestures and button functionality
6. **Dynamic Headers**: Header title changes based on route params
7. **Performance Optimized**: Uses react-native-screens for native performance

## Key Dependencies

- `@react-navigation/native@^6.1.18` - Core navigation
- `@react-navigation/native-stack@^6.11.0` - Native stack navigator
- `react-native-screens@^3.20.0` - Native screen optimizations (compatible with iOS 14.0+)
- `react-native-safe-area-context@4.9.0` - Safe area handling
- `react-native-gesture-handler` - Gesture support for smooth animations

## Usage

The navigation is set up in `App.tsx` and all screens are accessible from the Home screen through navigation buttons.
