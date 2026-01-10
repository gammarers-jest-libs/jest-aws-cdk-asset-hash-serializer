import { test as isStringOrObject, serialize } from '../src';

describe('test', () => {
  it('should return true for strings', () => {
    expect(isStringOrObject('hello')).toBe(true);
    expect(isStringOrObject('')).toBe(true);
  });

  it('should return true for objects', () => {
    expect(isStringOrObject({})).toBe(true);
    expect(isStringOrObject({ key: 'value' })).toBe(true);
    expect(isStringOrObject([])).toBe(true);
  });

  it('should return falsy for null', () => {
    expect(isStringOrObject(null)).toBe(null);
  });

  it('should return falsy for other primitives', () => {
    expect(isStringOrObject(123)).toBe(false);
    expect(isStringOrObject(undefined)).toBe(undefined);
    expect(isStringOrObject(true)).toBe(false);
  });
});

describe('serialize', () => {
  it('should replace 64-character hex hash with <ASSET_HASH>', () => {
    const hash = 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2';
    const input = `some/path/${hash}.zip`;
    expect(serialize(input)).toBe('some/path/<ASSET_HASH>.zip');
  });

  it('should not replace non-matching patterns', () => {
    const input = 'some/path/short.zip';
    expect(serialize(input)).toBe('some/path/short.zip');
  });

  it('should handle strings without .zip extension', () => {
    const hash = 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2';
    const input = `some/path/${hash}.tar`;
    expect(serialize(input)).toBe(`some/path/${hash}.tar`);
  });

  it('should replace only the first match', () => {
    const hash1 = 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2';
    const hash2 = 'f1f2f3f4f5f6f1f2f3f4f5f6f1f2f3f4f5f6f1f2f3f4f5f6f1f2f3f4f5f6f1f2';
    const input = `${hash1}.zip and ${hash2}.zip`;
    expect(serialize(input)).toBe(`<ASSET_HASH>.zip and ${hash2}.zip`);
  });
});
