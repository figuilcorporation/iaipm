type DateTime = string;

export type Nullable<T> = T | null;

export interface Team {
  id: number;
  name: string;
  personal_team: boolean;
  created_at: DateTime;
  updated_at: DateTime;
}

export interface User {
  id: number;
  first_name?: string;
  last_name: string;
  full_name: string;
  username: string;
  phone: string;
  is_worker: boolean;
  birth_date?: Date;
  birthplace?: string;
  gender: string;
  email: string;
  current_team_id: Nullable<number>;
  profile_photo_path: Nullable<string>;
  profile_photo_url: string;
  two_factor_enabled: boolean;
  email_verified_at: Nullable<DateTime>;
  created_at: DateTime;
  updated_at: DateTime;
  archived_at: DateTime;
  deleted_at: DateTime;
  registrations?: Registration[],
  interest_areas?: InterestArea[],
}

export interface Can {
    [key: string]: boolean;
}

export interface SelectOptionType {
    [key: string]: number;
}

export type InertiaSharedProps<T = {}> = T & {
  jetstream: {
    canCreateTeams: boolean;
    canManageTwoFactorAuthentication: boolean;
    canUpdatePassword: boolean;
    canUpdateProfileInformation: boolean;
    flash: any;
    hasAccountDeletionFeatures: boolean;
    hasApiFeatures: boolean;
    hasTeamFeatures: boolean;
    hasTermsAndPrivacyPolicyFeature: boolean;
    managesProfilePhotos: boolean;
  };
  user: User & {
    all_teams?: Team[];
    current_team?: Team;
  };
  can: Can,
  errorBags: any;
  errors: any;
  interestAreas: InterestArea[],
};

export interface Session {
  id: number;
  ip_address: string;
  is_current_device: boolean;
  agent: {
    is_desktop: boolean;
    platform: string;
    browser: string;
  };
  last_active: DateTime;
}

export interface ApiToken {
  id: number;
  name: string;
  abilities: string[];
  last_used_ago: Nullable<DateTime>;
  created_at: DateTime;
  updated_at: DateTime;
}

export interface JetstreamTeamPermissions {
  canAddTeamMembers: boolean;
  canDeleteTeam: boolean;
  canRemoveTeamMembers: boolean;
  canUpdateTeam: boolean;
}

export interface Role {
  key: string;
  name: string;
  permissions: string[];
  description: string;
}

export interface TeamInvitation {
  id: number;
  team_id: number;
  email: string;
  role: Nullable<string>;
  created_at: DateTime;
  updated_at: DateTime;
}

export interface SelectOption {
  label: string;
  value: number;
}

export interface Level {
    id: number,
    index: number,
    name: string,
    slug: string
}

export interface InterestArea {
    id: number,
    name: string,
    slug: string,
    students: User[],
}

export interface Registration {
    id: number,
    year: string,
    level_id: number,
    studnet_id: number,
    student: User,
    level: Level,
}
