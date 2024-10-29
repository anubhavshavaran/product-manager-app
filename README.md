# My Expo React Native App

This is a mobile application built using [React Native](https://reactnative.dev/) and [Expo](https://expo.dev/). The app was developed as part of an internship assignment and includes features like [mention key features briefly, e.g., authentication, fetching data from an API, etc.].

## Table of Contents

- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
- [Features](#features)
- [Technologies Used](#technologies-used)
---

## Requirements

Make sure you have the following installed on your machine:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **Expo CLI** - Install globally with `npm install -g expo-cli`
- **Git** - [Download](https://git-scm.com/)

If you're using a physical device for testing, download the **Expo Go** app from the [Apple App Store](https://apps.apple.com/app/expo-go/id982107779) or [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).

## Setup Instructions

Follow these steps to set up and run the app on your local environment:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Expo Server**

   ```bash
   npm start
   ```

4. **Update the Environment Variable**

- Go to the ./constants/ENV.ts file in the root directory.
- Update the BASE_URL

   ```bash
   export const BASE_URL = "http://your_system_ip:backend_port";
   ```

5. **Run the App**

- **On Emulator/Simulator:** Choose Run on Android device/emulator or Run on iOS simulator from the Expo Developer Tools.

## Technologies used

1. **Core Technologies**
   - **Expo** (`expo`): A framework and platform for universal React applications.
   - **React Native** (`react-native`): A framework for building native apps using React.
   - **React** (`react`): JavaScript library for building user interfaces.

2. **Navigation**
   - **Expo Router** (`expo-router`): A file-based routing solution optimized for Expo projects.

3. **Data Handling & State Management**
   - **React Query** (`@tanstack/react-query`): Manages server-state data (fetching, caching, synchronizing).
   - **Axios** (`axios`): A promise-based HTTP client for making API requests.
   - **React Hook Form** (`react-hook-form`): A library for managing forms in React with a focus on performance.

4. **Styling & UI Components**
   - **Tailwind CSS** (`tailwindcss`): A utility-first CSS framework for rapid UI development.
   - **NativeWind** (`nativewind`): Tailwind CSS for React Native, enabling a similar development experience in mobile apps.
   - **Expo Vector Icons** (`@expo/vector-icons`): Provides customizable icons commonly used in mobile apps.
