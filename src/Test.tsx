import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TestProps {
  children: ReactNode;
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

function Test({ children }: TestProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test</Text>
      {children}
    </View>
  );
}

export default Test;
