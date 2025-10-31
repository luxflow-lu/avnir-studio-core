/**
 * Analytics Events
 * Standardized event tracking across all AVNIR sites
 */

// Event categories
export type EventCategory = 
  | "engagement"
  | "conversion"
  | "navigation"
  | "error"
  | "user"
  | "content";

// Standard events
export interface AnalyticsEvent {
  action: string;
  category: EventCategory;
  label?: string;
  value?: number;
  metadata?: Record<string, any>;
}

// Pre-defined events for consistency
export const EVENTS = {
  // Page views
  PAGE_VIEW: (page: string): AnalyticsEvent => ({
    action: "page_view",
    category: "navigation",
    label: page,
  }),

  // User actions
  SIGNUP: (method: string): AnalyticsEvent => ({
    action: "signup",
    category: "conversion",
    label: method,
  }),

  LOGIN: (method: string): AnalyticsEvent => ({
    action: "login",
    category: "user",
    label: method,
  }),

  LOGOUT: (): AnalyticsEvent => ({
    action: "logout",
    category: "user",
  }),

  // Engagement
  BUTTON_CLICK: (buttonName: string): AnalyticsEvent => ({
    action: "button_click",
    category: "engagement",
    label: buttonName,
  }),

  LINK_CLICK: (url: string): AnalyticsEvent => ({
    action: "link_click",
    category: "engagement",
    label: url,
  }),

  FORM_SUBMIT: (formName: string): AnalyticsEvent => ({
    action: "form_submit",
    category: "engagement",
    label: formName,
  }),

  // Content
  VIDEO_PLAY: (videoId: string): AnalyticsEvent => ({
    action: "video_play",
    category: "content",
    label: videoId,
  }),

  VIDEO_COMPLETE: (videoId: string): AnalyticsEvent => ({
    action: "video_complete",
    category: "content",
    label: videoId,
  }),

  DOWNLOAD: (fileName: string): AnalyticsEvent => ({
    action: "download",
    category: "content",
    label: fileName,
  }),

  // E-commerce (for future use)
  ADD_TO_CART: (productId: string, value: number): AnalyticsEvent => ({
    action: "add_to_cart",
    category: "conversion",
    label: productId,
    value,
  }),

  PURCHASE: (orderId: string, value: number): AnalyticsEvent => ({
    action: "purchase",
    category: "conversion",
    label: orderId,
    value,
  }),

  // Errors
  ERROR: (errorMessage: string): AnalyticsEvent => ({
    action: "error",
    category: "error",
    label: errorMessage,
  }),

  // Newsletter
  NEWSLETTER_SIGNUP: (location: string): AnalyticsEvent => ({
    action: "newsletter_signup",
    category: "conversion",
    label: location,
  }),

  // Contact
  CONTACT_FORM_SUBMIT: (brand: string): AnalyticsEvent => ({
    action: "contact_form_submit",
    category: "conversion",
    label: brand,
  }),
};
