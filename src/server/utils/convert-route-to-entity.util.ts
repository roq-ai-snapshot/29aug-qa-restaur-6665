const mapping: Record<string, string> = {
  employees: 'employee',
  menus: 'menu',
  restaurants: 'restaurant',
  'table-reservations': 'table_reservation',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
