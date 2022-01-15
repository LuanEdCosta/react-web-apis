type RandomUUID = () => string

declare global {
  interface Crypto {
    randomUUID: RandomUUID
  }
}

export {}
