import React from 'react';

// Common type definitions for the application

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface ArticleItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  author: string;
  title: string;
  brief: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface DonationFormData {
  name: string;
  email: string;
  amount: string;
  message: string;
  donationType: 'one-time' | 'monthly';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormError {
  [key: string]: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface DonationStats {
  totalDonations: number;
  individualsHelped: number;
  programsSupported: number;
  activeVolunteers: number;
}

export interface Notification {
  id: number;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  autoClose?: boolean;
}

// UI Component Props
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  ariaLabel?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'small' | 'medium' | 'large' | 'xlarge';
}

export interface InputProps {
  label?: string;
  error?: string;
  type?: string;
  required?: boolean;
  className?: string;
  containerClassName?: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export interface TextareaProps {
  label?: string;
  error?: string;
  required?: boolean;
  rows?: number;
  className?: string;
  containerClassName?: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  className?: string;
}

// Layout Component Props
export interface ContainerProps {
  children: React.ReactNode;
  size?: 'small' | 'default' | 'large' | 'full';
  className?: string;
}

export interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  backgroundColor?: 'transparent' | 'white' | 'gray' | 'dark';
  padding?: 'none' | 'small' | 'default' | 'large';
}

export interface GridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4 | 'auto' | 'auto-fit';
  gap?: 'none' | 'small' | 'default' | 'large';
  className?: string;
}

export interface FlexProps {
  children: React.ReactNode;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: 'none' | 'small' | 'default' | 'large' | 'xlarge';
  className?: string;
}

// App State Types
export interface UIState {
  isLoading: boolean;
  activeSection: string;
  isMobileMenuOpen: boolean;
  isScrolled: boolean;
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  language: string;
  reducedMotion: boolean;
}

export interface AppData {
  donationStats: DonationStats | null;
  recentDonations: DonationFormData[];
}

export interface AppState {
  ui: UIState;
  preferences: UserPreferences;
  data: AppData;
  notifications: Notification[];
}

// Action Types
export interface Action<T = any> {
  type: string;
  payload?: T;
}

// Hook Return Types
export interface UseFormReturn<T> {
  formData: T;
  errors: FormError;
  isSubmitting: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setFieldValue: (name: string, value: any) => void;
  validateField: (fieldName: string) => boolean;
  validateAll: () => boolean;
  handleSubmit: (onSubmit: (data: T) => Promise<void>) => (event: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

export interface UseToggleReturn {
  value: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
}

export interface UseWindowSizeReturn {
  width: number;
  height: number;
}

export interface UseScrollReturn {
  scrollY: number;
  isScrolled: boolean;
}

// Environment Variables
export interface EnvironmentConfig {
  apiUrl: string;
  apiTimeout: number;
  enableAnalytics: boolean;
  enableLiveChat: boolean;
  enableNewsletter: boolean;
  enableTestimonials: boolean;
  stripePublicKey?: string;
  paypalClientId?: string;
  gaTrackingId?: string;
}
