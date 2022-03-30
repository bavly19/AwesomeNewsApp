import React from 'react';
import {ActivityIndicator, StyleSheet, ViewStyle} from 'react-native';

interface Props {
  style?: ViewStyle;
  color?: string;
}

const Loading: React.FC<Props> = ({style, ...props}) => {
  return (
    <ActivityIndicator
      style={[styles.containerStyle]}
      color="black"
      size={30}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Loading;
