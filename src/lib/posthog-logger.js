export function logPostHogInfo(posthog, message, attributes) {
  posthog?.logger?.info(message, attributes)
}
