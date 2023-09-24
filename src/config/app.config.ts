interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'Marketing Manager', 'Accountant', 'End Customer'],
  tenantName: 'Vendor',
  applicationName: 'Historia',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage vendors', 'Manage products', 'Manage bills'],
  getQuoteUrl: 'https://app.roq.ai/proposal/0891fb73-9d32-4be6-bcb4-70ad70d34952',
};
