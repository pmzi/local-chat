import strings from '@shared/constants/strings';

// eslint-disable-next-line import/prefer-default-export
export function required(message = strings.REQUIRED_ERROR) {
  return {
    required: true,
    message,
  };
}
