# About the @types folder

This folder is used to declare global TypeScript types.

This project uses many new web APIs that may not have TypeScript types defined. If this is the case, you should declare the types yourself.

## How to do it

- Create a file with the name of the web API, example: `CryptoAPI.d.ts`
- Extend the global object and add the type on the correct interface. Example:

```ts
type SomeType = string

declare global {
  interface SomeInterface {
    someProperty: SomeType
  }
}

// The .d.ts file should be a module. Don't forget to add the line below.
export {}
```
