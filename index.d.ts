declare module "mirror-to-object-pairs" {
  export default function mirrorKeys<
    Key extends string,
    MirroredKeys = { readonly [K in Key]: K }
  >(keys: Key[]): MirroredKeys;
}
