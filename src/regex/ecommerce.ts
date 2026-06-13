/** SKU: 3–20 uppercase alphanumeric and hyphens. */
export const SKU_PATTERN = /^[A-Z0-9-]{3,20}$/;

/** Product code: 4–16 alphanumeric. */
export const PRODUCT_CODE_PATTERN = /^[A-Z0-9]{4,16}$/i;

/** Coupon code: 4–20 uppercase alphanumeric. */
export const COUPON_CODE_PATTERN = /^[A-Z0-9]{4,20}$/;

/** Order number: ORD- prefix + digits or alphanumeric. */
export const ORDER_NUMBER_PATTERN = /^(?:ORD-)?[A-Z0-9-]{6,20}$/i;

/** Tracking number: 8–30 alphanumeric. */
export const TRACKING_NUMBER_PATTERN = /^[A-Z0-9]{8,30}$/i;
