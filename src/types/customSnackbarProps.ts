import type { VuetifyProps } from '@/types';

export interface CustomSnackbarProps {
  modelValue: boolean;
  text: string;
  isMultiline?: boolean;
  btnColor?: string;
  btnVariant?: VuetifyProps['Btn'];
  timeout?: number;
}
