# react-native-regex-kit

100+ regex patterns and validators for React Native — email, phone, passwords, dates, financial, social media, and more.

## Install

```bash
npm install react-native-regex-kit
```

## Usage

### Validators

```ts
import {
  isEmail,
  isStrongPassword,
  isUaePhoneNumber,
  isHexColor,
} from "react-native-regex-kit";

isEmail("user@example.com"); // true
isStrongPassword("Abcdef1!"); // true
isUaePhoneNumber("501234567"); // true
isHexColor("#FF5733"); // true
```

### Raw patterns

```ts
import { EMAIL_PATTERN, US_PHONE_PATTERN } from "react-native-regex-kit";

EMAIL_PATTERN.test("user@example.com");
US_PHONE_PATTERN.test("(555) 123-4567");
```

## Categories

### User Information

| Pattern                   | Validator          |
| ------------------------- | ------------------ |
| `EMAIL_PATTERN`           | `isEmail`          |
| `USERNAME_PATTERN`        | `isUsername`       |
| `FULL_NAME_PATTERN`       | `isFullName`       |
| `FIRST_NAME_PATTERN`      | `isFirstName`      |
| `LAST_NAME_PATTERN`       | `isLastName`       |
| `NICKNAME_PATTERN`        | `isNickname`       |
| `DISPLAY_NAME_PATTERN`    | `isDisplayName`    |
| `PASSWORD_PATTERN`        | `isPassword`       |
| `STRONG_PASSWORD_PATTERN` | `isStrongPassword` |
| `PIN_4_DIGIT_PATTERN`     | `isPin4Digit`      |
| `PIN_6_DIGIT_PATTERN`     | `isPin6Digit`      |

### Contact Information

| Pattern                       | Validator              |
| ----------------------------- | ---------------------- |
| `PHONE_INTERNATIONAL_PATTERN` | `isPhoneInternational` |
| `UAE_PHONE_PATTERN`           | `isUaePhoneNumber`     |
| `US_PHONE_PATTERN`            | `isUsPhoneNumber`      |
| `WHATSAPP_NUMBER_PATTERN`     | `isWhatsAppNumber`     |
| `FAX_NUMBER_PATTERN`          | `isFaxNumber`          |
| `EXTENSION_NUMBER_PATTERN`    | `isExtensionNumber`    |

### Address Information

| Pattern                   | Validator         |
| ------------------------- | ----------------- |
| `POSTAL_CODE_PATTERN`     | `isPostalCode`    |
| `UAE_POSTAL_CODE_PATTERN` | `isUaePostalCode` |
| `US_ZIP_CODE_PATTERN`     | `isUsZipCode`     |
| `STREET_ADDRESS_PATTERN`  | `isStreetAddress` |
| `CITY_PATTERN`            | `isCity`          |
| `STATE_PATTERN`           | `isState`         |
| `COUNTRY_PATTERN`         | `isCountry`       |

### Web & Internet

| Pattern               | Validator      |
| --------------------- | -------------- |
| `URL_PATTERN`         | `isUrl`        |
| `HTTPS_URL_PATTERN`   | `isHttpsUrl`   |
| `DOMAIN_NAME_PATTERN` | `isDomainName` |
| `SUBDOMAIN_PATTERN`   | `isSubdomain`  |
| `IPV4_PATTERN`        | `isIpv4`       |
| `IPV6_PATTERN`        | `isIpv6`       |
| `MAC_ADDRESS_PATTERN` | `isMacAddress` |
| `HOSTNAME_PATTERN`    | `isHostname`   |

### Dates & Times

| Pattern                   | Validator        |
| ------------------------- | ---------------- |
| `DATE_DD_MM_YYYY_PATTERN` | `isDateDdMmYyyy` |
| `DATE_MM_DD_YYYY_PATTERN` | `isDateMmDdYyyy` |
| `DATE_YYYY_MM_DD_PATTERN` | `isDateYyyyMmDd` |
| `TIME_HH_MM_PATTERN`      | `isTimeHhMm`     |
| `TIME_HH_MM_SS_PATTERN`   | `isTimeHhMmSs`   |
| `TIME_12_HOUR_PATTERN`    | `isTime12Hour`   |
| `TIME_24_HOUR_PATTERN`    | `isTime24Hour`   |
| `ISO_DATE_PATTERN`        | `isIsoDate`      |
| `ISO_DATETIME_PATTERN`    | `isIsoDateTime`  |

### Numbers

| Pattern                       | Validator              |
| ----------------------------- | ---------------------- |
| `INTEGER_PATTERN`             | `isInteger`            |
| `POSITIVE_INTEGER_PATTERN`    | `isPositiveInteger`    |
| `NEGATIVE_INTEGER_PATTERN`    | `isNegativeInteger`    |
| `DECIMAL_NUMBER_PATTERN`      | `isDecimalNumber`      |
| `POSITIVE_DECIMAL_PATTERN`    | `isPositiveDecimal`    |
| `CURRENCY_AMOUNT_PATTERN`     | `isCurrencyAmount`     |
| `PERCENTAGE_PATTERN`          | `isPercentage`         |
| `SCIENTIFIC_NOTATION_PATTERN` | `isScientificNotation` |

### Financial

| Pattern                       | Validator             |
| ----------------------------- | --------------------- |
| `CREDIT_CARD_NUMBER_PATTERN`  | `isCreditCardNumber`  |
| `VISA_CARD_PATTERN`           | `isVisaCard`          |
| `MASTERCARD_PATTERN`          | `isMastercard`        |
| `AMERICAN_EXPRESS_PATTERN`    | `isAmericanExpress`   |
| `CVV_PATTERN`                 | `isCvv`               |
| `IBAN_PATTERN`                | `isIban`              |
| `SWIFT_BIC_PATTERN`           | `isSwiftBic`          |
| `BANK_ACCOUNT_NUMBER_PATTERN` | `isBankAccountNumber` |

### Identification

| Pattern                         | Validator               |
| ------------------------------- | ----------------------- |
| `UUID_V4_PATTERN`               | `isUuidV4`              |
| `UUID_PATTERN`                  | `isUuid`                |
| `PASSPORT_NUMBER_PATTERN`       | `isPassportNumber`      |
| `NATIONAL_ID_PATTERN`           | `isNationalId`          |
| `DRIVER_LICENSE_NUMBER_PATTERN` | `isDriverLicenseNumber` |
| `TAX_ID_PATTERN`                | `isTaxId`               |

### Colors & Design

| Pattern              | Validator     |
| -------------------- | ------------- |
| `HEX_COLOR_PATTERN`  | `isHexColor`  |
| `RGB_COLOR_PATTERN`  | `isRgbColor`  |
| `RGBA_COLOR_PATTERN` | `isRgbaColor` |
| `HSL_COLOR_PATTERN`  | `isHslColor`  |
| `HSLA_COLOR_PATTERN` | `isHslaColor` |

### Social Media

| Pattern                         | Validator               |
| ------------------------------- | ----------------------- |
| `INSTAGRAM_USERNAME_PATTERN`    | `isInstagramUsername`   |
| `TWITTER_USERNAME_PATTERN`      | `isTwitterUsername`     |
| `FACEBOOK_USERNAME_PATTERN`     | `isFacebookUsername`    |
| `TIKTOK_USERNAME_PATTERN`       | `isTikTokUsername`      |
| `LINKEDIN_PROFILE_URL_PATTERN`  | `isLinkedInProfileUrl`  |
| `GITHUB_USERNAME_PATTERN`       | `isGitHubUsername`      |
| `GITHUB_REPOSITORY_URL_PATTERN` | `isGitHubRepositoryUrl` |

### Programming

| Pattern                    | Validator          |
| -------------------------- | ------------------ |
| `SEMVER_PATTERN`           | `isSemver`         |
| `PACKAGE_NAME_PATTERN`     | `isPackageName`    |
| `NPM_PACKAGE_NAME_PATTERN` | `isNpmPackageName` |
| `GIT_BRANCH_NAME_PATTERN`  | `isGitBranchName`  |
| `GIT_COMMIT_HASH_PATTERN`  | `isGitCommitHash`  |
| `SLUG_PATTERN`             | `isSlug`           |
| `CAMEL_CASE_PATTERN`       | `isCamelCase`      |
| `PASCAL_CASE_PATTERN`      | `isPascalCase`     |
| `SNAKE_CASE_PATTERN`       | `isSnakeCase`      |
| `KEBAB_CASE_PATTERN`       | `isKebabCase`      |

### Security

| Pattern                  | Validator        |
| ------------------------ | ---------------- |
| `JWT_TOKEN_PATTERN`      | `isJwtToken`     |
| `API_KEY_FORMAT_PATTERN` | `isApiKeyFormat` |
| `BASE64_STRING_PATTERN`  | `isBase64String` |
| `SHA256_HASH_PATTERN`    | `isSha256Hash`   |
| `MD5_HASH_PATTERN`       | `isMd5Hash`      |
| `BCRYPT_HASH_PATTERN`    | `isBcryptHash`   |

### Files

| Pattern                  | Validator         |
| ------------------------ | ----------------- |
| `FILE_NAME_PATTERN`      | `isFileName`      |
| `IMAGE_FILE_PATTERN`     | `isImageFile`     |
| `PDF_FILE_PATTERN`       | `isPdfFile`       |
| `VIDEO_FILE_PATTERN`     | `isVideoFile`     |
| `AUDIO_FILE_PATTERN`     | `isAudioFile`     |
| `FILE_EXTENSION_PATTERN` | `isFileExtension` |

### Geographic

| Pattern                 | Validator        |
| ----------------------- | ---------------- |
| `LATITUDE_PATTERN`      | `isLatitude`     |
| `LONGITUDE_PATTERN`     | `isLongitude`    |
| `COORDINATES_PATTERN`   | `isCoordinates`  |
| `COUNTRY_CODE_PATTERN`  | `isCountryCode`  |
| `CURRENCY_CODE_PATTERN` | `isCurrencyCode` |

### E-commerce

| Pattern                   | Validator          |
| ------------------------- | ------------------ |
| `SKU_PATTERN`             | `isSku`            |
| `PRODUCT_CODE_PATTERN`    | `isProductCode`    |
| `COUPON_CODE_PATTERN`     | `isCouponCode`     |
| `ORDER_NUMBER_PATTERN`    | `isOrderNumber`    |
| `TRACKING_NUMBER_PATTERN` | `isTrackingNumber` |

### Text Validation

| Pattern                              | Validator                    |
| ------------------------------------ | ---------------------------- |
| `ALPHABET_ONLY_PATTERN`              | `isAlphabetOnly`             |
| `NUMBERS_ONLY_PATTERN`               | `isNumbersOnly`              |
| `ALPHANUMERIC_PATTERN`               | `isAlphanumeric`             |
| `ALPHANUMERIC_WITH_SPACES_PATTERN`   | `isAlphanumericWithSpaces`   |
| `UPPERCASE_ONLY_PATTERN`             | `isUppercaseOnly`            |
| `LOWERCASE_ONLY_PATTERN`             | `isLowercaseOnly`            |
| `NO_SPACES_PATTERN`                  | `isNoSpaces`                 |
| `STARTS_WITH_LETTER_PATTERN`         | `isStartsWithLetter`         |
| `ENDS_WITH_NUMBER_PATTERN`           | `isEndsWithNumber`           |
| `CONTAINS_SPECIAL_CHARACTER_PATTERN` | `isContainsSpecialCharacter` |

## Custom validators

```ts
import { createValidator, EMAIL_PATTERN } from "react-native-regex-kit";

const isEmailLoose = createValidator(EMAIL_PATTERN, { trim: false });
```

## License

MIT

## ❤️ Support

Created by [**Jugal Kishor**](https://github.com/jugalkishors).

If this project helps you, please consider giving it a ⭐ star, sharing it with others, or contributing to its development.

Contributions, feedback, and suggestions are always welcome.

© 2026–present. MIT License.

## 🏷️ Related Topics

[Regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) •
[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) •
[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) •
[TypeScript](https://www.typescriptlang.org/) •
[Node.js](https://nodejs.org/) •
[Pattern Matching](https://en.wikipedia.org/wiki/Pattern_matching) •
[String Processing](<https://en.wikipedia.org/wiki/String_(computer_science)>) •
[Text Parsing](https://en.wikipedia.org/wiki/Parsing) •
[Data Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) •
[npm](https://www.npmjs.com/) •
[Open Source](https://opensource.org/) •
[Developer Tools](https://github.com/topics/developer-tools)
