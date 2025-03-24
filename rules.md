Comprehensive Ruleset for Cursor – Slow App

Note: This document is the absolute guide. It is the “Bible” for every decision made during the development of Slow. Every section must be followed, and before moving to a new section, confirm completion and check for any issues. If problems or discrepancies arise, resolve them first, then ask for confirmation before proceeding.

⸻

1. Project Overview and Objectives
   • Core Vision:
   Build a minimal, native iOS journaling app named Slow that helps users slow down, reflect, and schedule self-care moments.
   • iPhone Mode: Text-based journaling with customizable fonts.
   • iPad Mode (future extension): Handwritten journaling with Apple Pencil support.
   • Key Features:
   • Customizable notebooks with various paper styles (lined, squared, dotted, blank, white, yellow).
   • A library of pre-built journal templates (e.g., Gratitude, Productivity).
   • A Bookshelf to manage all journals.
   • Media integration for capturing pages (photo attachments).
   • A smart relaxation assistant that prompts users to block 5 minutes for self-care (with alarm functionality).
   • Subscription model (monthly/annual) for premium features.
   • Tech Stack:
   • Frontend: React Native (Expo) using TypeScript (TSX)
   • Styling: NativeWind (Tailwind CSS for React Native)
   • Authentication & Database: Supabase (with Auth.js for authentication)
   • Paywall: Supawall
   • Design Library: Flexible based on prompt; must align with NativeWind and Apple HIG

⸻

2. General Principles

A. Code Generation and Best Practices
• Efficiency First:
• Generate code that is optimized for performance. Use the most concise, computationally efficient approaches without unnecessary complexity.
• Readability & Maintainability:
• Use clear, well-structured, and logically organized code. Favor simplicity over excessive abstraction.
• No Redundancy:
• Avoid duplicating code. Reuse functions, components, or modules if they already exist.
• Best Practices & Conventions:
• Follow industry-standard guidelines (e.g., AirBnB style for JavaScript/TypeScript).
• Error Handling & Edge Cases:
• Ensure robust error handling. Anticipate and manage edge cases.
• Commenting & Documentation:
• Provide concise, meaningful comments. Use standard documentation formats (e.g., JSDoc/TypeScript docstrings) where needed.
• Self-Checking:
• Before finalizing, analyze and debug code to eliminate inefficiencies, unused variables, or unnecessary loops. Run linting (e.g., ESLint) and static analysis.
• Refactoring Awareness:
• Constantly check if a code block can be rewritten more modularly or cleanly before finalizing.

B. Typography-First Design
• Typography is the Foundation:
• Prioritize typography to establish hierarchy, spacing, and overall aesthetics.
• Clean & Readable:
• Use high-quality, legible typefaces with well-balanced kerning, leading, and tracking.
• Aesthetic Consistency:
• Maintain a consistent type scale, weight hierarchy, and alignment.
• Minimalist & Intentional:
• Use 1-2 complementary fonts; create contrast using weight/style variations rather than multiple fonts.
• Whitespace Matters:
• Provide ample margins, padding, and line spacing to let text breathe.
• Color & Contrast:
• Ensure strong contrast between text and background, yet keep an elegant palette.
• Responsiveness:
• Adapt typography fluidly across devices, ensuring readability and proper scaling.
• Final Check:
• Verify that typography alone can carry the design. If not, adjust spacing, weight, and alignment until it does.

⸻

3. Project Objectives & Scope
   • Focus on the MVP:
   • Stick to core functionalities defined in the objectives. Document any additional features (e.g., printing physical copies) for future phases.
   • Modular Development:
   • Break features into independent, well-integrated components (authentication, journaling, customization, etc.).
   • Backend Integration:
   • All new features must connect to Supabase using proper API endpoints and enforce user-specific data storage.

⸻

⸻

5. Design & User Experience
   • Minimal & Native iOS Feel:
   • Use Tailwind CSS for consistent styling.
   • Maintain a clean, uncluttered UI that adheres to Apple’s Human Interface Guidelines (HIG).
   • Consistent UI Patterns:
   • Follow established patterns across all screens (onboarding, journaling, customization, bookshelf, etc.).
   • Responsive Adjustments:
   • Design distinct, device-appropriate layouts for iPhone and iPad without deviating from the minimal aesthetic.
   • Engaging, Game-Like Interactions:
   • Use subtle animations, progress indicators, and smooth transitions to create an enjoyable, almost gamified experience.

⸻

6. Apple Human Interface Guidelines Compliance

Spacing & Layout
• Safe Areas & Margins:
• Respect safe areas (minimum 16pt from screen edges) and use Apple’s default margins.
• Grid-Based Design:
• Use an 8pt (or similar) grid system for consistent spacing and alignment.
• Whitespace:
• Ensure sufficient negative space to enhance clarity and reduce clutter.

Navigation
• Navigation Bars:
• Utilize navigation bars with automatic back buttons for hierarchical flows.
• Tab Bars:
• Implement a tab bar for top-level navigation; limit to 4-5 tabs.
• Modal Views:
• Use modal views for self-contained tasks with explicit “Cancel” or “Done” buttons.
• Touch Targets:
• All interactive elements must have a minimum touch target size of 44×44pt.

Controls & Interactivity
• Visual Feedback:
• Provide immediate feedback (button highlights, smooth animations) on interactions.
• Motion & Animation:
• Use subtle, natural animations (under 0.3s) that enhance usability without distraction.
• Typography & Readability:
• Implement Dynamic Type to support accessibility and maintain legibility.
• Gestures:
• Use iOS-standard gestures (swipe-to-go-back, etc.) without interfering with system gestures.

⸻

7. Feature Implementation & Scope Management
   • Stick to Core Features:
   • Focus solely on the MVP scope; avoid feature creep.
   • Modular Components:
   • Develop each feature as independent modules (authentication, journal creation, customization, etc.) that integrate seamlessly.
   • Backend Tying:
   • Every new feature (e.g., saving handwritten notes, uploading images) must be integrated with Supabase using proper API endpoints.

⸻

8. Quality Assurance & Testing (when needed)
   • Unit & Integration Testing:
   • Write tests for new components/features to ensure stability.
   • Regular Reviews:
   • Conduct weekly reviews to verify consistency and functionality.
   • Beta Testing:
   • Deploy to TestFlight per schedule and actively incorporate tester feedback.

⸻

    •	Clearly document and communicate any changes in scope or design.

⸻

10. Subscription & Payment Integration
    • Secure Payment Processing:
    • Use a reliable payment gateway (e.g., Stripe via Supawall) ensuring secure handling of payment data.
    • Testing Payment Flows:
    • Rigorously test the complete subscription flow (sign-up, payment confirmation, access control) before launch.

⸻

⸻

⸻

13. Coding Guidelines

A. Code Style and Structure
• Write concise, technical TypeScript code with accurate examples.
• Use functional and declarative programming patterns; avoid classes.
• Favor iteration and modularization over duplication.
• Use descriptive variable names (e.g., isLoading, hasError).
• Structure files with exported components, subcomponents, helpers, static content, and types.

B. Naming Conventions
• Use lowercase with dashes for directories (e.g., components/auth-wizard).
• Favor named exports for components.

C. TypeScript Usage
• Use TypeScript throughout; prefer interfaces over types.
• Avoid enums; use maps where possible.
• Use functional components with TypeScript interfaces.
• Enable strict mode for better type safety.

D. Syntax and Formatting
• Use the function keyword for pure functions.
• Avoid unnecessary curly braces; use concise syntax for simple conditionals.
• Use declarative JSX.
• Utilize Prettier for consistent formatting.

E. UI and Styling
• Use Expo’s built-in components for common UI patterns.
• Implement responsive design with Flexbox and useWindowDimensions.
• Use styled-components or Tailwind CSS for styling.
• Implement dark mode support with Expo’s useColorScheme.
• Ensure high accessibility (ARIA roles, native accessibility props).
• Leverage react-native-reanimated and react-native-gesture-handler for performant animations.

F. Safe Area Management
• Use SafeAreaProvider from react-native-safe-area-context globally.
• Wrap top-level components with SafeAreaView.
• Use SafeAreaScrollView for scrollable content.
• Avoid hardcoding padding/margins for safe areas.

G. Performance Optimization
• Minimize use of useState/useEffect; prefer context/reducers.
• Use Expo’s AppLoading and SplashScreen for a smooth startup.
• Optimize images (WebP format, size data, lazy loading with expo-image).
• Implement code splitting and lazy loading (React Suspense, dynamic imports).
• Profile performance using React Native tools and Expo debugging.
• Prevent unnecessary re-renders using memoization, useMemo, and useCallback.

H. Navigation
• Use react-navigation for routing.
• Follow best practices for stack, tab, and drawer navigators.
• Leverage deep linking and universal links.
• Use dynamic routes with expo-router for efficient navigation.

I. State Management
• Use React Context and useReducer for global state.
• Leverage react-query for data fetching and caching.
• Consider Zustand or Redux Toolkit for complex state management.
• Handle URL search parameters with libraries like expo-linking.

J. Error Handling and Validation
• Use Zod for runtime validation.
• Implement global error boundaries.
• Log errors using Sentry or similar services.
• Use expo-error-reporter for production error logging.
• Follow early returns and the if-return pattern to avoid nested code.

K. Testing
• Write unit tests with Jest and React Native Testing Library.
• Implement integration tests (Detox) for critical flows.
• Consider snapshot testing for UI consistency.
• Utilize Expo’s testing tools for multi-environment testing.

L. Security
• Sanitize user inputs to prevent XSS.
• Use react-native-encrypted-storage for sensitive data.
• Ensure secure API communication using HTTPS.
• Follow Expo’s security guidelines.

M. Internationalization (i18n)
• Use react-native-i18n or expo-localization.
• Support multiple languages and RTL layouts.
• Ensure text scaling and font adjustments for accessibility.

N. Key Conventions & API Documentation
• Rely on Expo’s managed workflow.
• Prioritize Mobile Web Vitals (Load Time, Jank, Responsiveness).
• Use expo-constants for environment variables.
• Handle device permissions with expo-permissions.
• Implement OTA updates with expo-updates.
• Follow Expo’s guidelines for deployment: Expo Distribution
• Refer to Expo’s official documentation for project setup and configuration.

⸻

14. Folder Structure and Additional Instructions

Folder Structure Example:

assets/
src/
components/
screens/
navigation/
hooks/
utils/
App.tsx
app.json

Additional Instructions:
• Use TypeScript for type safety.
• Implement proper styling using either StyleSheet or NativeWind.
• Utilize Expo’s vector icons.
• Use Expo’s SecureStore for sensitive data.
• Implement offline support.
• Follow React Native best practices for performance.
• Utilize Expo’s OTA updates for quick deployments.

⸻

15. Midjourney Style & Visual Inspiration
    • Inspiration Integration:
    • Incorporate design elements inspired by midjourney-style aesthetics:
    • Grainy Textures: Use subtle, semi-transparent noise overlays to add depth.
    • Moody Palette with Bright Accents: Although originally darker, adapt a warm beige to light peach base with vibrant orange/terracotta accents.
    • Ambient Lighting & Shadows: Employ soft, ambient glows and gentle shadows for a calming, yet engaging UI.
    • Visual Consistency:
    • Reference images in the inspiration folder should guide the color palette, grain effects, and overall mood.
    • Maintain minimalism: Use atmospheric textures and color accents as background or highlight elements without overpowering the clean, functional layout.
    • Application in UI:
    • Use these inspirations for hero sections, onboarding screens, and promotional assets.
    • Ensure that while the aesthetic is unique and engaging, the core design remains user-friendly, accessible, and true to Apple’s design principles.

⸻

16. Final Reminders and Workflow Instructions
    • Section-by-Section Development:
    • Develop the app in clearly defined sections (e.g., Onboarding, Journaling, Relaxation Assistant).
    • After completing each section, prompt for review and confirmation before proceeding.
    • Self-Checking & Debugging:
    • Before finalizing any section, check for all possible issues (UI/UX, code efficiency, integration problems) and resolve them.
    • Adherence to Rules:
    • At every step, follow the rules detailed in this document. This ruleset is the highest priority.
    • Communication:
    • Prompt for confirmation when transitioning between sections.
    • If environment variables (e.g., from env.local) or additional information is needed, request it immediately.
    • Continuous Improvement:
    • Always be on the lookout for optimizations and refinements.
    • Reassess design and functionality to ensure they remain aligned with the app’s mission: to help users slow down, reflect, and find calm.

⸻

Final Note:
You are the best software engineer ever—think thoroughly, double-check every detail, and remain loyal to this ruleset. Build each section with care, ensuring that every part of the app embodies the vision and high standards set here. If you encounter any discrepancies or conflicts, notify me immediately so they can be resolved before proceeding further.

⸻

Use this document as your master reference. Let’s start by getting familiar with the codebase and Superwall integration, then move on to building out the onboarding flow as our first section. Confirm each section’s completion and ask for review before continuing.

Happy coding, and let’s make this project count!
