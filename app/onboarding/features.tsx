import { StyleSheet, View, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { MaterialCommunityIcons as IconType } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function FeaturesScreen() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/onboarding/final");
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
              Features.
            </ThemedText>
          </View>

          <View style={styles.features}>
            <Feature
              icon="format-color-fill"
              title="Customizable Journals"
              description="Choose your paper style and personalize your writing space"
            />
            <Feature
              icon="bookmark-outline"
              title="Guided Templates"
              description="Follow templates for gratitude, reflection, and goal-setting"
            />
            <Feature
              icon="bookshelf"
              title="Journal Library"
              description="Organize and access all your journals in one place"
            />
            <Feature
              icon="image-outline"
              title="Media Integration"
              description="Attach photos and memories to your journal entries"
            />
            <Feature
              icon="bell-outline"
              title="Mindful Reminders"
              description="Schedule time for reflection with gentle notifications"
            />
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

function Feature({
  icon,
  title,
  description,
}: {
  icon: keyof typeof IconType.glyphMap;
  title: string;
  description: string;
}) {
  return (
    <View style={styles.feature}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name={icon} size={20} color="#F97316" />
      </View>
      <View style={styles.featureText}>
        <ThemedText type="defaultSemiBold" style={styles.featureTitle}>
          {title}
        </ThemedText>
        <ThemedText style={styles.featureDescription}>{description}</ThemedText>
      </View>
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
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 38,
    fontWeight: "300",
    textAlign: "center",
    letterSpacing: -0.5,
    color: "#27272A",
  },
  features: {
    gap: 16,
  },
  feature: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 2,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(249, 115, 22, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },
  featureText: {
    flex: 1,
    gap: 4,
  },
  featureTitle: {
    fontSize: 17,
    color: "#27272A",
    letterSpacing: 0.2,
  },
  featureDescription: {
    fontSize: 15,
    opacity: 0.8,
    lineHeight: 20,
    color: "#525258",
    fontWeight: "300",
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
