import React from 'react';
import {SafeAreaView, View, Button, Image} from 'react-native';
import ScanbotSDK, {
  DocumentScannerConfiguration,
  InitializationOptions,
} from 'react-native-scanbot-sdk';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.imageFileUri = null;
    this.initScanbotSDK();
  }

  async initScanbotSDK() {
    const options: InitializationOptions = {
      licenseKey: '',
      loggingEnabled: true,
    };
    let result = await ScanbotSDK.initializeSDK(options);
    console.log(result.result);
  }

  async scanDocument() {
    const config: DocumentScannerConfiguration = {
      multiPageEnabled: false,
      ignoreBadAspectRatio: true,
    };
    const result = await ScanbotSDK.UI.startDocumentScanner(config);
    if (result.status === 'OK') {
      this.imageFileUri = result.pages[0].documentPreviewImageFileUri;
      this.forceUpdate();
    }
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{padding: 30}}>
          <Button 
            title={'Scan Document'}
            onPress={() => {this.scanDocument();}}
          />
          <Image 
            source={{ uri: this.imageFileUri }}
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
