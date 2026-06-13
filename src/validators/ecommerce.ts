import {
  COUPON_CODE_PATTERN,
  ORDER_NUMBER_PATTERN,
  PRODUCT_CODE_PATTERN,
  SKU_PATTERN,
  TRACKING_NUMBER_PATTERN,
} from '../regex/ecommerce';
import { createValidator } from './utils';

export const isSku = createValidator(SKU_PATTERN);
export const isProductCode = createValidator(PRODUCT_CODE_PATTERN);
export const isCouponCode = createValidator(COUPON_CODE_PATTERN);
export const isOrderNumber = createValidator(ORDER_NUMBER_PATTERN);
export const isTrackingNumber = createValidator(TRACKING_NUMBER_PATTERN);
