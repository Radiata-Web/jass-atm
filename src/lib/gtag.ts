export const GA_TRACKING_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

export const pageview = (url: string) => {
  if (!GA_TRACKING_ID || typeof window.gtag !== "function") return
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label: string
  value?: number
}) => {
  if (!GA_TRACKING_ID || typeof window.gtag !== "function") return
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  })
}
