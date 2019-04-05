export default function mirrorKeys(keys) {
  return keys.reduce((acc, current) => {
    acc[current] = current;

    return acc;
  }, {});
}
