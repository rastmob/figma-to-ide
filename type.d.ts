declare module "yargs";
declare module "yargs/helpers" {
  export function hideBin(argv: string[]): string[];
}