import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen: React.FC<Props> = ({navigation, route}) => {
  const {itemId, title} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Details Screen</Text>
        <Text style={styles.subtitle}>Item Information</Text>
        
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Item ID:</Text>
            <Text style={styles.value}>{itemId}</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Text style={styles.label}>Title:</Text>
            <Text style={styles.value}>{title}</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Text style={styles.label}>Description:</Text>
            <Text style={styles.value}>
              This is a detailed description of the item. It contains various
              information about the product or service that the user might find
              useful. This screen demonstrates how to pass parameters between
              screens using React Navigation.
            </Text>
          </View>
          
          <View style={styles.detailItem}>
            <Text style={styles.label}>Category:</Text>
            <Text style={styles.value}>Sample Category</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Text style={styles.label}>Price:</Text>
            <Text style={styles.price}>$99.99</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Text style={styles.label}>Rating:</Text>
            <Text style={styles.rating}>⭐⭐⭐⭐⭐ (4.8)</Text>
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => {
              // Simulate an action
              console.log('Action performed for item:', itemId);
            }}>
            <Text style={styles.primaryButtonText}>Perform Action</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.secondaryButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
    marginBottom: 30,
    textAlign: 'center',
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  rating: {
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    gap: 15,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DetailsScreen;
