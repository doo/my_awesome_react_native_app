# My Awesome React Native App

A simple React Native demo app based on the tutorial in the blog post 
["React Native app tutorial: How to integrate our scanning functionalities"](https://scanbot.io/blog/react-native-app-tutorial-how-to-integrate-our-scanning-functionalities).

For a **full** example project which demonstrates **all** API methods of the Scanbot SDK for React Native
see the repo [scanbot-sdk-example-react-native](https://github.com/doo/scanbot-sdk-example-react-native).

## How to run this app

Install the latest versions of [Node.js](https://nodejs.org) and [CocoaPods](https://cocoapods.org).
Fetch this repository and navigate to the project directory.

```
cd my_awesome_react_native_app/
```

Install node modules:

```
npm install
```

Connect a device via USB and run the app.

**Android:**

```
npx react-native run-android
```

**iOS:**

```
npx react-native run-ios
```

Or open `my_awesome_react_native_app/ios/my_awesome_react_native_app.xcworkspace` in Xcode and adjust the 
**"Signing & Capabilities"** settings by selecting your Apple developer account. 
Then select your target device and hit the "Run" button.
