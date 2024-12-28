# Prerequisites

    1. Node.js: Ensure you have Node.js installed.
    2. React Native CLI: Install React Native CLI if you haven't already.
    3. Firebase: We'll use Firebase for authentication, real-time database, and push notifications. Create a Firebase project and configure it.

# Step 1: Set Up the React Native Project
    npx react-native init WhatsAppClone
    cd WhatsAppClone

# Step 2: Install Necessary Libraries
    npm install @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/firestore @react-native-firebase/messaging

# Step 3: Firebase Configuration
Create a `firebase-config.js` file in the root of your project:

# Step 4: Navigation Setup
Create a navigation directory and add `AppNavigator.js`

# Step 5: Screens Implementation
Create required screens 
`ChatScreen.js`
`HomeScreen.js`
`LoginScreen.js`
`ProfileScreen.js`
`SignUpScreen.js`

# Step 7: Firebase Cloud Messaging Setup

Configure Firebase Cloud Messaging for push notifications. Follow the official React Native [Firebase documentation](https://rnfirebase.io/messaging/usage) for detailed steps.

