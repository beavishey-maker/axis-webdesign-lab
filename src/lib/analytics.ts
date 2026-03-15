export const trackPageView = (url: string) => {
  if (process.env.NEXT_PUBLIC_GA_ID) {
    // GA4実装はここに
  }
  console.debug('[Analytics] pageview:', url)
}

export const trackEvent = (name: string, params?: Record<string, unknown>) => {
  console.debug('[Analytics] event:', name, params)
}
