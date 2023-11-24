import { ref } from 'vue';
import { CustomSnackbar } from '@/components';
import type { CustomSnackbarProps } from '@/types';

type OpenSnackbarParams = Omit<CustomSnackbarProps, 'modelValue'>;

export function useSnackbar() {
  const modelValue = ref(false);

  const snackbarProps = ref<OpenSnackbarParams>({
    text: '',
    isMultiline: false,
    btnColor: undefined,
    btnVariant: undefined,
    timeout: undefined
  });

  function openSnackbar(params: OpenSnackbarParams) {
    snackbarProps.value = params;
    modelValue.value = true;
  }

  return { CustomSnackbar, snackbarProps, modelValue, openSnackbar };
}
