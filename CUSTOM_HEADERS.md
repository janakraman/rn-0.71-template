# Custom Header Components Guide

## ProfileScreen Header Components

The ProfileScreen demonstrates custom header left and right components with the following features:

### Header Left Component
- **Custom Back Button**: Arrow (←) button that calls `navigation.goBack()`
- **Styling**: Semi-transparent background with white text
- **Functionality**: Navigates back to the previous screen

### Header Right Component  
- **Edit Button**: Pencil (✏️) icon for editing profile
- **Settings Button**: Gear (⚙️) icon for profile settings
- **Layout**: Horizontal container with two buttons

### Implementation Details

```tsx
export const profileScreenOptions = (
  navigation?: NativeStackScreenProps<RootStackParamList, 'Profile'>['navigation'],
  route?: NativeStackScreenProps<RootStackParamList, 'Profile'>['route'],
): NativeStackNavigationOptions => {
  return {
    title: 'Profile',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerLeft: () => (
      <TouchableOpacity
        style={styles.headerButton}
        onPress={() => navigation?.goBack()}>
        <Text style={styles.headerButtonText}>←</Text>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <View style={styles.headerRightContainer}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => Alert.alert('Edit', 'Edit profile pressed!')}>
          <Text style={styles.headerButtonText}>✏️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.headerButton, {marginLeft: 15}]}
          onPress={() => Alert.alert('Settings', 'Profile settings pressed!')}>
          <Text style={styles.headerButtonText}>⚙️</Text>
        </TouchableOpacity>
      </View>
    ),
  };
};
```

### Key Features
1. **Type Safety**: Proper TypeScript types for navigation and route
2. **Reusable Styles**: Consistent styling across header components
3. **Flexible Layout**: Multiple buttons in header right container
4. **Interactive**: Each button has touch feedback and actions
5. **Customizable**: Easy to modify icons, colors, and actions

### Styling
```tsx
headerButton: {
  padding: 8,
  borderRadius: 6,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
},
headerButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
},
headerRightContainer: {
  flexDirection: 'row',
  alignItems: 'center',
},
```

### Usage in Navigator
```tsx
<Stack.Screen
  name="Profile"
  component={ProfileScreen}
  options={({navigation, route}) =>
    profileScreenOptions(navigation, route)
  }
/>
```

This pattern can be applied to any screen that needs custom header components!
