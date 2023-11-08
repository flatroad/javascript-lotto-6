import { Console } from '@woowacourse/mission-utils';
import ValidationError from '../Error/ValidationError';
import ERROR_CONSTANT from '../Constant/ErrorConstant';
import DATATYPE_CONSTANT from '../Constant/DataTypeConstant';

const getUserInputAsync = (async (message) => {
  if (typeof message !== DATATYPE_CONSTANT.STRING) {
    throw new ValidationError(ERROR_CONSTANT.IS_NOT_STRING);
  }

  const lottoPurchaseAmount = await Console.readLineAsync(message);

  return (lottoPurchaseAmount);
})

export default getUserInputAsync;
