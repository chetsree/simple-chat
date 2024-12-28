import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { firebase } from '../firebase-config';

const HomeScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const snapshot = await firebase.firestore().collection('users').get();
      setContacts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchContacts();
  }, []);

  const handleLogout = async () => {
    await firebase.auth().signOut();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Chat', { userId: item.id })}>
            <Text style={styles.contact}>{item.displayName}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contact: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default HomeScreen;
