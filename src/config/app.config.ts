interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Chef', 'Waiter'],
  tenantName: 'Restaurant',
  applicationName: '29Aug-Qa-Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ["View restaurant's profile and menu", 'Make a table reservation', 'Manage table reservations'],
  ownerAbilities: [
    'Manage restaurant profile',
    'Manage employees',
    'Manage all table reservations',
    'Approve or reject table reservations',
  ],
};
