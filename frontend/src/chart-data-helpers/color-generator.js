const _chartColorGenerator = (function* _colorGenerator() {
  const colors = [
    "2f4f4f",
    "2e8b57",
    "800000",
    "191970",
    "808000",
    "ff0000",
    "ff8c00",
    "ffd700",
    "0000cd",
    "7cfc00",
    "ba55d3",
    "00fa9a",
    "00ffff",
    "00bfff",
    "ff00ff",
    "f0e68c",
    "fa8072",
    "dda0dd",
    "ff1493"
  ];
  let index = 0;
  const colorCount = colors.length;
  while (true) {
    yield colors[index % colorCount];
    index += 1;
  }
})();

/**
 * Generate a new color hex value
 *
 * @return {string} color hex
 */
export const generateColor = () => _chartColorGenerator.next().value;
