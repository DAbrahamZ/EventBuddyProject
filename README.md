Papaya Event Buddy Mobile App
Overview
Papaya Event Buddy is a cross-platform mobile application built with React Native that offers a seamless event management and social experience. The app integrates Firebase for authentication and real-time database functionalities, providing secure user login, profile management, and event participation tracking. It emphasizes persistent user sessions with secure token storage and intuitive UI components.

Features
User Authentication
Secure login and signup flows powered by Firebase Authentication. Persistent login sessions are managed through secure storage of authentication tokens, ensuring users do not have to log in repeatedly.

Profile Management
Users can view and edit their profile information, including their name and birthday. The birthday is selected using a native cross-platform date picker.

Event Interaction
Displays the count of user favorites and participations, allowing users to track their engagement with events.

Secure Token Storage
Uses expo-secure-store to securely save Firebase ID tokens, enhancing security and enabling seamless user experiences across app launches.

Navigation
Implements React Navigation with conditional rendering of authentication stacks or main app tabs based on the user's authentication state.

Custom UI Elements
Branded login screen with logo integration, styled inputs, buttons, and error handling for form validation.

Technical Stack
Technology	Purpose
React Native	Cross-platform mobile app development
Firebase	Authentication and Firestore database
Expo	Development environment and secure storage
React Navigation	Navigation management (stack and tabs)
@react-native-community/datetimepicker	Native date picker for birthday selection
Repository Structure
App.js
Entry point of the app that manages navigation and authentication context.

context/AuthContext.js
Manages authentication state, listens to Firebase auth changes, and securely stores authentication tokens.

screens/ProfileScreen.js
User profile interface allowing editing of name and birthday, displaying user stats, and handling logout.

screens/Login.js, Signup.js, Recovery.js
Authentication screens for login, signup, and password recovery.

navegation/TabNavigator.js
Defines the main tab-based navigation for authenticated users.

firebaseConfig.js
Initializes Firebase services and exports configured instances for authentication and database access.

styles/style.js
Centralized styling definitions for consistent UI appearance.

assets/
Contains app logos, background images, default avatars, and other media assets.

Installation and Setup
Clone the repository

Install dependencies

bash
npm install
Configure Firebase

Create a Firebase project.

Obtain your Firebase config object.

Replace the placeholder values in firebaseConfig.js with your Firebase project credentials.

Run the app

For Expo managed workflow:

bash
expo start
For bare React Native workflow:

bash
npx react-native run-android
npx react-native run-ios
Usage
Authentication
Users can sign up, log in, and recover passwords via dedicated screens.

Profile Management
Users can update their name and birthday on the profile screen. Birthday selection uses a native calendar picker.

Persistent Login
The app securely stores Firebase authentication tokens to maintain user sessions across app restarts.

Event Tracking
Users can view counts of their favorite events and participations on their profile.

Logout
Users can log out, which clears their authentication state and secure tokens.

Security Considerations
Authentication tokens are stored securely using expo-secure-store, leveraging device-native encrypted storage.

Firebase Authentication handles user identity and session management.

Sensitive data is never stored in plain text or insecure storage.

Contributions
Contributions are welcome! Please fork the repository and submit pull requests for improvements or bug fixes.

*Main Screen*

<img src="./assets/Screenshot_20250714-203240.Expo Go.png" alt="Main Screen" width="320"/>

*Sign Up*

<img src="./assets/Screenshot_20250714-203244.Expo Go.png" alt="Sign Up" width="320"/>

*Account Created*

<img src="./assets/Screenshot_20250714-203319.Expo Go.png" alt="Account Created" width="320"/>

*Events List*

<img src="./assets/Screenshot_20250714-203322.Expo Go.png" alt="Events List" width="320"/>

*Event Details*

<img src="./assets/Screenshot_20250714-203334.Expo Go.png" alt="Events Details" width="320"/>

*Participating*

<img src="./assets/Screenshot_20250714-203338.Expo Go.png" alt="Participating" width="320"/>

*Added to Favorites*

<img src="./assets/Screenshot_20250714-203343.Expo Go.png" alt="Favorites" width="320"/>

*Profile*

<img src="./assets/Screenshot_20250714-203354.Expo Go.png" alt="Profile" width="320"/>

*Birthday*

<img src="./assets/Screenshot_20250714-203401.Expo Go.png" alt="Birthday" width="320"/>

*Updated*

<img src="./assets/Screenshot_20250714-203414.Expo Go.png" alt="Updated" width="320"/>

*Icon*

<img src="./assets/Screenshot_20250714-203420.Expo Go.png" alt="Icon" width="320"/>

Licenses:
MIT License.

Contact
For questions or support, please open an issue on the repository or contact the maintainer.

This README provides a comprehensive overview of the Papaya Event Buddy mobile app, its architecture, features, and setup instructions, serving as a guide for developers and contributors.
