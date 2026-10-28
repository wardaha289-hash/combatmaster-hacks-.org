import type { IconName } from '../components/icons/types';

export const featureIcons: Record<string, IconName> = {
  'Player ESP & Wallhack': 'featureEsp',
  'Soft Aim / Aimbot': 'featureAimbot',
  '2D Radar / Minimap': 'featureRadar',
  'Skeleton & Name Tags': 'skeletonEsp',
  'In-Game Menu': 'featureUtilitySuite',
  'Patch Updates': 'autoUpdates',
  'Stream-Proof Overlay': 'streamProof',
  'Windows PC Loader': 'compatWindows',
  'Anti-Cheat Awareness': 'whyShield',
};

export const whyUsIcons: IconName[] = ['whyShield', 'whyUsers', 'whyMonitor', 'whyHeadphones'];

export const setupStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqCheck'];

export const toolkitIcons: Record<string, IconName> = {
  Combat: 'toolkitCombat',
  Vision: 'toolkitVision',
  Radar: 'toolkitRadar',
  Weapons: 'toolkitWeapons',
  Movement: 'toolkitMovement',
  Profiles: 'toolkitProfiles',
};

export const workflowIcons: IconName[] = [
  'workflowAlert',
  'workflowPackage',
  'workflowSettings',
  'workflowCheck',
];

export const fieldNoteIcons: IconName[] = ['fieldCalendar', 'fieldShield', 'fieldHeadphones'];

export const blogTagIcons: Record<string, IconName> = {
  Guides: 'navBlog',
  Setup: 'settings',
  Features: 'layers',
  Updates: 'refresh',
  Troubleshooting: 'alert',
};

export const heroStatusPills: { icon: IconName; label: string }[] = [
  { icon: 'espActive', label: 'ESP Active' },
  { icon: 'radarOnline', label: 'Radar Online' },
  { icon: 'undetected', label: 'Status Monitored' },
  { icon: 'softAim', label: 'Soft Aim Ready' },
  { icon: 'streamProof', label: 'Stream Proof' },
  { icon: 'skeletonEsp', label: 'Skeleton ESP' },
  { icon: 'mapHack', label: 'Wallhack' },
  { icon: 'support247', label: 'Email Support' },
  { icon: 'instantDelivery', label: 'Instant Delivery' },
  { icon: 'rankedSafe', label: 'Patch Ready' },
  { icon: 'boneSelect', label: 'Bone Select' },
  { icon: 'liveStatus', label: 'Live Status' },
  { icon: 'autoUpdates', label: 'Auto Updates' },
];

export const heroStatIcons: IconName[] = [
  'heroStatStream',
  'heroStatClock',
  'heroStatUsers',
  'heroStatHeadphones',
];

export const cheatTierIcons: Record<string, IconName> = {
  Full: 'tierPro',
};

export const productCategoryIcons: Record<string, IconName> = {
  'Core product': 'coreProduct',
  'External suite': 'externalSuite',
  'DMA hardware': 'dmaHardware',
  'System utility': 'systemUtility',
  'Account recovery': 'accountRecovery',
  Cosmetic: 'cosmetic',
};

export const acquisitionStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqZap', 'acqCheck'];

/** After-purchase timeline on product detail — one distinct icon per step */
export const productAcquisitionStepIcons: IconName[] = [
  'liveStatus',
  'acqPackage',
  'headphones',
  'acqCheck',
];

/** Product detail requirement tiles — prefer compat-style icons where mapped */
export const productRequirementIcons: Partial<Record<IconName, IconName>> = {
  reqWindows: 'compatWindows',
  reqSteam: 'compatSteam',
  reqSettings: 'compatPackage',
  reqWifi: 'compatWifi',
  reqCpu: 'compatMonitor',
  reqRestorePoint: 'compatRefresh',
  reqShieldGuide: 'compatShield',
  reqMailOrder: 'mail',
  reqShieldAccount: 'compatShield',
  reqWifiPortal: 'compatWifi',
};

export function requirementDisplayIcon(icon: IconName): IconName {
  return productRequirementIcons[icon] ?? icon;
}

export const compatibilityIcons: IconName[] = [
  'compatWindows',
  'compatPackage',
  'compatSteam',
  'compatMonitor',
  'compatRefresh',
  'compatWifi',
  'compatDiscord',
  'compatShield',
];
