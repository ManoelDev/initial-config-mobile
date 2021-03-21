import { ReactNode } from 'react';

import { View, Text, StyleSheet } from 'react-native';

interface Test2Props {
  children: ReactNode;
}

function Test2({ children }: Test2Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test2</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default Test2;
