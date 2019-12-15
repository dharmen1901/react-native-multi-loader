/**
 * @format
 * @flow
 */

import React from 'react';
import { View, Modal } from 'react-native';
import PropTypes from 'prop-types';

import DefaultLoader from './src/defaultSpinner';
import DefaultText from './src/defaultText';
import LinesLoader from './src/barsLoader';
import DotsLoader from './src/dotsLoader';
import BlinkWithSizeText from './src/blinkWithSizeText';
import BlinkText from './src/blinkText';
import TextSequence from './src/textSequence';

class Spinner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        animationType={this.props.modalAnimation}
        transparent={true}
        visible={this.props.visible}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: this.props.backgroundColor,
          }}
        >
          {Boolean(this.props.loaderType) &&
            this.props.loaderType === 'default' && (
              <DefaultLoader {...this.props} />
            )}
          {Boolean(this.props.loaderType) &&
            this.props.loaderType === 'bars' && <LinesLoader {...this.props} />}
          {Boolean(this.props.loaderType) &&
            this.props.loaderType === 'dots' && <DotsLoader {...this.props} />}
          {Boolean(this.props.textType) &&
            this.props.textType === 'blinkGrow' && (
              <BlinkWithSizeText {...this.props} />
            )}
          {Boolean(this.props.textType) &&
            this.props.textType === 'characterGrow' && (
              <TextSequence {...this.props} />
            )}
          {Boolean(this.props.textType) && this.props.textType === 'blink' && (
            <BlinkText {...this.props} />
          )}
          {Boolean(this.props.textType) &&
            this.props.textType === 'default' && (
              <DefaultText {...this.props} />
            )}
          {this.props.children}
        </View>
      </Modal>
    );
  }
}

Spinner.defaultProps = {
  colorLoader: 'grey',
  colorText: '#1c1c1c',
  modalAnimation: 'none',
  sizeLoader: 'large',
  sizeText: 30,
  textLoader: 'LOADING',
  visible: false,
  loaderType: 'default',
  textType: 'default',
  backgroundColor: '#ffffff00',
};

Spinner.propTypes = {
  colorLoader: PropTypes.string,
  colorText: PropTypes.string,
  modalAnimation: PropTypes.string,
  sizeLoader: PropTypes.string,
  sizeText: PropTypes.number,
  visible: PropTypes.bool,
  textLoader: PropTypes.string,
  children: PropTypes.element,
  loaderType: PropTypes.string,
  textType: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Spinner;
