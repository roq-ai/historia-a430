const mapping: Record<string, string> = {
  bills: 'bill',
  offers: 'offer',
  products: 'product',
  suggestions: 'suggestion',
  users: 'user',
  vendors: 'vendor',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
