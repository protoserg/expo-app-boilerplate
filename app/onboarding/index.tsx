import { StyleSheet, View, Image } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function WelcomeScreen() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/onboarding/problem");
  };

  return (
    <ThemedView style={styles.container}>
      <StatusBar style="dark" />
      {/* Grain texture will be added manually later */}
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.main}>
            <View style={styles.logoContainer}>
              <MaterialCommunityIcons
                name="feather"
                size={42}
                color="#F97316"
              />
            </View>
            <ThemedText type="title" style={styles.title}>
              slow
            </ThemedText>
            <View style={styles.subtitleContainer}>
              <ThemedText style={styles.subtitle}>
                mindful journaling for intentional living
              </ThemedText>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              Begin
            </ThemedText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFECD9", // Warmer peachy background
  },
  grainTexture: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.15, // Subtle grain texture
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    paddingVertical: 30,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingBottom: 20,
  },
  logoContainer: {
    height: 64,
    width: 64,
    borderRadius: 20,
    backgroundColor: "rgba(249, 115, 22, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 56,
    fontWeight: "300",
    textAlign: "center",
    letterSpacing: -1.5,
    color: "#27272A",
    marginBottom: 5,
  },
  subtitleContainer: {
    paddingHorizontal: 24,
    width: "100%",
  },
  subtitle: {
    fontSize: 17,
    opacity: 0.8,
    textAlign: "center",
    lineHeight: 26,
    color: "#525258",
    fontWeight: "300",
    letterSpacing: 0.3,
  },
  button: {
    backgroundColor: "#F97316",
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    letterSpacing: 0.5,
  },
});
