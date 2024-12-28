import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { firebase } from '../firebase-config';

const ProfileScreen = ({ navigation }) => {
  const [displayName, setDisplayName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const handleSave = async () => {
    const user = firebase.auth().currentUser;
    await firebase.firestore().collection('users').doc(user.uid).set({
      displayName,
      profilePicture,
    });
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Display Name"
        value={displayName}
        onChangeText={setDisplayName}
      />
      <TextInput
        style={styles.input}
        placeholder="Profile Picture URL"
        value={profilePicture}
        onChangeText={setProfilePicture}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default ProfileScreen;
