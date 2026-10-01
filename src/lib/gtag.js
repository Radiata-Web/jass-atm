export const GA_TRACKING_ID = import.meta.env.VITE_MEASUREMENT_ID

export const pageview = (url) => {
  if (!GA_TRACKING_ID || typeof window === "undefined" || !window.gtag) return
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }) => {
  if (!GA_TRACKING_ID || typeof window === "undefined" || !window.gtag) return
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
