# Jest AWS CDK Asset Hash Serializer

A Jest snapshot serializer that replaces AWS CDK asset hashes with a stable placeholder to prevent snapshot test failures due to hash changes.

## Installation

```bash
npm install --save-dev jest-aws-cdk-asset-hash-serializer
# or
yarn add -D jest-aws-cdk-asset-hash-serializer
```

## Usage

Add the serializer to your Jest configuration:

```javascript
// jest.config.js
module.exports = {
  snapshotSerializers: ['jest-aws-cdk-asset-hash-serializer'],
};
```

## How It Works

This serializer exports two functions:

- **`test(val)`**: Determines if the serializer should handle a given value. Returns `true` for strings and objects.
- **`serialize(val)`**: Replaces 64-character hexadecimal asset hashes (e.g., `a1b2c3...d4e5f6.zip`) with `<ASSET_HASH>.zip`.

### Example

Before serialization:
```
"asset.abc123def456...789xyz.zip"
```

After serialization:
```
"asset.<ASSET_HASH>.zip"
```

This ensures your CDK snapshot tests remain stable even when asset contents change.

## License

This project is licensed under the Apache-2.0 License.
