import type { ActClaim, JwtPayload, SessionStatusClaim } from './jwtv2';
import type { OrganizationResource } from './organization';
import type { OrganizationCustomPermissionKey, OrganizationCustomRoleKey } from './organizationMembership';
import type { SessionResource } from './session';
import type { UserResource } from './user';
import type { Serializable } from './utils';

export type ServerGetTokenOptions = { template?: string };
export type ServerGetToken = (options?: ServerGetTokenOptions) => Promise<string | null>;

export type InitialState = Serializable<{
  sessionClaims: JwtPayload;
  sessionId: string | undefined;
  sessionStatus: SessionStatusClaim;
  session: SessionResource | undefined;
  actor: ActClaim | undefined;
  userId: string | undefined;
  user: UserResource | undefined;
  orgId: string | undefined;
  orgRole: OrganizationCustomRoleKey | undefined;
  orgSlug: string | undefined;
  orgPermissions: OrganizationCustomPermissionKey[] | undefined;
  organization: OrganizationResource | undefined;
  factorVerificationAge: [number, number];
}>;
