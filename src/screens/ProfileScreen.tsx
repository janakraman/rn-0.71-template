import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import type {NativeStackNavigationOptions, NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={{...styles.container, backgroundColor: 'white'}}>
      <View style={styles.content}>
        <Text style={styles.title}>Profile Screen</Text>
        <Text style={styles.subtitle}>User Profile Information</Text>

        <View style={styles.profileInfo}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>John Doe</Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>john.doe@example.com</Text>

          <Text style={styles.label}>Member Since:</Text>
          <Text style={styles.value}>January 2024</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push('Profile')}>
          <Text style={styles.buttonText}>Push Navigate to Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export const profileScreenOptions = (
  navigation?: NativeStackScreenProps<
    RootStackParamList,
    'Profile'
  >['navigation'],
  route?: NativeStackScreenProps<RootStackParamList, 'Profile'>['route'],
): NativeStackNavigationOptions => {
  return {
    title: 'Profile',
    headerStyle: {
      backgroundColor: 'blue',
    },
    headerTintColor: '#fff',
    headerLeft: () => (
      <TouchableOpacity
        style={styles.headerButton}
        onPress={() => {
          if (navigation) {
            navigation.goBack();
          } else {
            Alert.alert('Back', 'Navigate back pressed!');
          }
        }}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  profileInfo: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 15,
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  // Header component styles
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
});

export default ProfileScreen;
