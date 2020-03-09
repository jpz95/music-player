import { appConfig } from 'constants/config';
import { unrecognizedTagWarningRegex } from 'constants/constants';

const init = () => {
  if (appConfig.suppressUnrecognizedTagWarning) {
    const errorLogger = console.error;

    console.error = (...errors) => {
      if (unrecognizedTagWarningRegex.test(errors[0])) {
        return;
      }
      errorLogger(...errors);
    };
  }
};

export default init;