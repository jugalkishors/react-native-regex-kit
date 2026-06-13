import {
  DOMAIN_NAME_PATTERN,
  HOSTNAME_PATTERN,
  HTTPS_URL_PATTERN,
  IPV4_PATTERN,
  IPV6_PATTERN,
  MAC_ADDRESS_PATTERN,
  SUBDOMAIN_PATTERN,
  URL_PATTERN,
} from '../regex/webInternet';
import { createValidator } from './utils';

export const isUrl = createValidator(URL_PATTERN);
export const isHttpsUrl = createValidator(HTTPS_URL_PATTERN);
export const isDomainName = createValidator(DOMAIN_NAME_PATTERN);
export const isSubdomain = createValidator(SUBDOMAIN_PATTERN);
export const isIpv4 = createValidator(IPV4_PATTERN);
export const isIpv6 = createValidator(IPV6_PATTERN);
export const isMacAddress = createValidator(MAC_ADDRESS_PATTERN);
export const isHostname = createValidator(HOSTNAME_PATTERN);
