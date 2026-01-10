export const test = (val: unknown) =>
  typeof val === 'string' || (val && typeof val === 'object');

export const serialize = (val: string) => {

  return val.replace(/([A-Fa-f0-9]{64}.zip)/, '<ASSET_HASH>.zip');
};