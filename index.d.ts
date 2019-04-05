declare module 'mirror-to-object-pairs' {
  export default function mirrorKeys<Key extends string, MirroredKeys = { [K in Key]: string }>(keys: Key[]): MirroredKeys;
}