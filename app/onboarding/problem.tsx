import { StyleSheet, View, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function ProblemScreen() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/onboarding/solution");
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
              Pause.
            </ThemedText>
            <ThemedText style={styles.description}>
              In today's fast-paced world, we rarely take time to reflect and be
              present.
            </ThemedText>
          </View>

          <View style={styles.content}>
            <View style={styles.quote}>
              <ThemedText style={styles.quoteText}>
                "The unexamined life is not worth living."
              </ThemedText>
              <ThemedText style={styles.quoteAuthor}>— Socrates</ThemedText>
            </View>

            <View style={styles.points}>
              <View style={styles.point}>
                <View style={styles.pointIconContainer}>
                  <MaterialCommunityIcons
                    name="close"
                    size={20}
                    color="#E11D48"
                  />
                </View>
                <ThemedText style={styles.pointText}>
                  Our minds are constantly scattered with distractions
                </ThemedText>
              </View>
              <View style={styles.point}>
                <View style={styles.pointIconContainer}>
                  <MaterialCommunityIcons
                    name="close"
                    size={20}
                    color="#E11D48"
                  />
                </View>
                <ThemedText style={styles.pointText}>
                  We struggle to maintain consistent reflection habits
                </ThemedText>
              </View>
              <View style={styles.point}>
                <View style={styles.pointIconContainer}>
                  <MaterialCommunityIcons
                    name="close"
                    size={20}
                    color="#E11D48"
                  />
                </View>
                <ThemedText style={styles.pointText}>
                  Finding the right tools and environment is challenging
                </ThemedText>
              </View>
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
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 10,
  },
  header: {
    gap: 16,
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "300",
    textAlign: "center",
    letterSpacing: -0.5,
    color: "#27272A",
  },
  description: {
    fontSize: 17,
    opacity: 0.8,
    textAlign: "center",
    lineHeight: 26,
    color: "#525258",
    fontWeight: "300",
    letterSpacing: 0.3,
    paddingHorizontal: 20,
  },
  content: {
    gap: 30,
  },
  quote: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
    gap: 16,
    backgroundColor: "rgba(249, 115, 22, 0.05)",
    borderRadius: 16,
  },
  quoteText: {
    fontSize: 19,
    fontStyle: "italic",
    lineHeight: 28,
    textAlign: "center",
    color: "#27272A",
    letterSpacing: 0.2,
  },
  quoteAuthor: {
    fontSize: 16,
    color: "#525258",
    fontWeight: "300",
  },
  points: {
    gap: 12,
  },
  point: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    paddingVertical: 2,
  },
  pointIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "rgba(225, 29, 72, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },
  pointText: {
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
