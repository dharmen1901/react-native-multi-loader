import React from 'react';
import { View, Text, Button } from 'react-native';
import Loader from 'react-native-multi-loader';

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loader: false };
  }

  render() {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}
      >
        <Loader
          visible={this.state.loader}
          loaderType="bars"
          colorLoader="white"
          colorText="white"
          textType="characterGrow"
          sizeLoader="large"
          sizeText={30}
          backgroundColor="#00000088"
        />
        <View style={{ margin: 20 }}>
          <Text style={{ marginBottom: 20, fontSize: 30, textAlign: 'center' }}>
            React Native Multi Loader..!!
          </Text>
          <Text style={{ marginBottom: 20, fontSize: 30, textAlign: 'center' }}>
            Bars Loader with Character grow Text
          </Text>
          <Button
            title="Press me"
            onPress={() => this.setState({ loader: true })}
          />
        </View>
      </View>
    );
  }
}

export default Spinner;
