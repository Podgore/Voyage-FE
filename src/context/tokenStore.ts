let currentToken: string | null = null;

export function getToken(): string | null {
  return currentToken;
}

export function setStoredToken(token: string | null) {
  currentToken = token;
}
