import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SPARTAN_GREEN = '#18453B';
const SPARTAN_GOLD = '#F3C625';
const WHITE = '#FFFFFF';

export default function HomeScreen() {
  const [isGreenBackground, setIsGreenBackground] = useState(false);

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isGreenBackground ? SPARTAN_GREEN : WHITE },
      ]}>
      <View style={styles.content}>
        <View style={styles.brandMark} />
        <Text
          accessibilityRole="header"
          style={[
            styles.title,
            { color: isGreenBackground ? WHITE : SPARTAN_GREEN },
          ]}>
          Spartan Success
        </Text>
        <Text
          style={[
            styles.subtitle,
            { color: isGreenBackground ? WHITE : SPARTAN_GREEN },
          ]}>
          GO GREEN. GO WHITE.
        </Text>
        <Pressable
          accessibilityRole="button"
          onPress={() => setIsGreenBackground((current) => !current)}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: isGreenBackground ? WHITE : SPARTAN_GREEN,
              borderColor: SPARTAN_GOLD,
            },
            pressed && styles.buttonPressed,
          ]}>
          <Text
            style={[
              styles.buttonText,
              { color: isGreenBackground ? SPARTAN_GREEN : WHITE },
            ]}>
            {isGreenBackground ? 'Go Green!' : 'Go White!'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  brandMark: {
    width: 56,
    height: 6,
    borderRadius: 3,
    backgroundColor: SPARTAN_GOLD,
    marginBottom: 28,
  },
  title: {
    fontSize: 44,
    lineHeight: 52,
    fontWeight: '800',
    letterSpacing: -1.5,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 12,
    marginBottom: 36,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 3,
    textAlign: 'center',
  },
  button: {
    minWidth: 180,
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    borderWidth: 2,
    borderRadius: 28,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
});
