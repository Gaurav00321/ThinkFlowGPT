declare module "tailwindcss/lib/util/flattenColorPalette" {
  export default function flattenColorPalette(
    colors: unknown
  ): Record<string, string>;
}
