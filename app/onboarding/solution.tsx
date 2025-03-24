import { StyleSheet, View, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function SolutionScreen() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/onboarding/features");
  };

  return (
    <ThemedView style={styles.container}>
      <StatusBar style="dark" />
      {/* Grain texture will be added manually
      <Image
        source={require("@/assets/images/grain-texture.png")}
        style={styles.grainTexture}
        resizeMode="cover"
      />
      */}
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <ThemedText type="title" style={styles.title}>
              Reflect.
            </ThemedText>
          </View>

          <View style={styles.mainFeature}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="notebook-outline"
                size={28}
                color="#F97316"
              />
            </View>
            <ThemedText type="defaultSemiBold" style={styles.mainTitle}>
              Intentional Journaling
            </ThemedText>
            <ThemedText style={styles.mainDescription}>
              slow helps you create space for reflection through mindful
              journaling, reminders, and a thoughtfully designed experience.
            </ThemedText>
          </View>

          <View style={styles.benefits}>
            <View style={styles.benefit}>
              <View style={styles.checkContainer}>
                <MaterialCommunityIcons
                  name="check"
                  size={18}
                  color="#F97316"
                />
              </View>
              <ThemedText style={styles.benefitText}>
                Develop a consistent journaling practice
              </ThemedText>
            </View>
            <View style={styles.benefit}>
              <View style={styles.checkContainer}>
                <MaterialCommunityIcons
                  name="check"
                  size={18}
                  color="#F97316"
                />
              </View>
              <ThemedText style={styles.benefitText}>
                Gain clarity and purpose in daily life
              </ThemedText>
            </View>
            <View style={styles.benefit}>
              <View style={styles.checkContainer}>
                <MaterialCommunityIcons
                  name="check"
                  size={18}
                  color="#F97316"
                />
              </View>
              <ThemedText style={styles.benefitText}>
                Create intentional moments of calm
              </ThemedText>
            </View>
          </View>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              Continue
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
    backgroundColor: "#FFECD9",
  },
  grainTexture: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.15,
  },
  safeArea: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 10,
    gap: 30,
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 38,
    fontWeight: "300",
    textAlign: "center",
    letterSpacing: -0.5,
    color: "#27272A",
  },
  mainFeature: {
    backgroundColor: "rgba(249, 115, 22, 0.05)",
    padding: 24,
    borderRadius: 20,
    gap: 12,
    alignItems: "center",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(249, 115, 22, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },
  mainTitle: {
    fontSize: 22,
    textAlign: "center",
    color: "#27272A",
    letterSpacing: 0.2,
  },
  mainDescription: {
    fontSize: 16,
    opacity: 0.8,
    textAlign: "center",
    lineHeight: 24,
    color: "#525258",
    fontWeight: "300",
    letterSpacing: 0.2,
    paddingHorizontal: 4,
  },
  benefits: {
    gap: 10,
  },
  benefit: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 2,
  },
  checkContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "rgba(249, 115, 22, 0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  benefitText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    color: "#525258",
    fontWeight: "400",
    letterSpacing: 0.2,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: "center",
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
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    letterSpacing: 0.5,
  },
});
