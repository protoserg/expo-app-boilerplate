import { StyleSheet, View, ScrollView, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSuperwall } from "@/hooks/useSuperwall";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { SUPERWALL_TRIGGERS } from "@/config/superwall";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { MaterialCommunityIcons as IconType } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function FinalScreen() {
  const { showPaywall } = useSuperwall();
  const { setIsOnboarded } = useOnboarding();

  const handleGetStarted = async () => {
    try {
      await showPaywall(SUPERWALL_TRIGGERS.ONBOARDING);
      setIsOnboarded(true);
    } catch (error) {
      console.error("Failed to show paywall:", error);
    }
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
        >
          <View style={styles.header}>
            <ThemedText type="title" style={styles.title}>
              Begin.
            </ThemedText>
            <ThemedText style={styles.description}>
              Your journey to mindful journaling starts now
            </ThemedText>
          </View>

          <View style={styles.benefits}>
            <View style={styles.quote}>
              <ThemedText style={styles.quoteText}>
                "Writing is thinking. To write well is to think clearly. That's
                why it's so hard."
              </ThemedText>
              <ThemedText style={styles.quoteAuthor}>
                — David McCullough
              </ThemedText>
            </View>

            <Benefit
              icon="notebook-outline"
              text="Create your first journal entry"
            />
            <Benefit
              icon="clock-time-five-outline"
              text="Set aside time for daily reflection"
            />
            <Benefit
              icon="text-box-outline"
              text="Develop clarity through regular writing"
            />
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <ThemedText type="defaultSemiBold" style={styles.buttonText}>
            Start Writing
          </ThemedText>
        </TouchableOpacity>
      </SafeAreaView>
    </ThemedView>
  );
}

function Benefit({
  icon,
  text,
}: {
  icon: keyof typeof IconType.glyphMap;
  text: string;
}) {
  return (
    <View style={styles.benefitContainer}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name={icon} size={20} color="#F97316" />
      </View>
      <ThemedText style={styles.benefitText}>{text}</ThemedText>
    </View>
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
    paddingBottom: 20,
    gap: 30,
  },
  header: {
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 38,
    fontWeight: "300",
    textAlign: "center",
    letterSpacing: -0.5,
    color: "#27272A",
  },
  description: {
    textAlign: "center",
    fontSize: 17,
    lineHeight: 24,
    opacity: 0.8,
    color: "#525258",
    fontWeight: "300",
    letterSpacing: 0.3,
  },
  benefits: {
    gap: 12,
    paddingBottom: 16,
  },
  quote: {
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 12,
    backgroundColor: "rgba(249, 115, 22, 0.05)",
    borderRadius: 16,
    marginBottom: 10,
  },
  quoteText: {
    fontSize: 17,
    fontStyle: "italic",
    lineHeight: 26,
    textAlign: "center",
    color: "#27272A",
    letterSpacing: 0.2,
  },
  quoteAuthor: {
    fontSize: 16,
    color: "#525258",
    fontWeight: "300",
  },
  benefitContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 2,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(249, 115, 22, 0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  benefitText: {
    fontSize: 17,
    color: "#525258",
    lineHeight: 24,
    letterSpacing: 0.2,
  },
  button: {
    backgroundColor: "#F97316",
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 30,
    alignItems: "center",
    marginHorizontal: 24,
    marginBottom: 20,
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
