import { SetMetadata } from '@nestjs/common';
import { Role } from '../enums/role.enum';


export const ROLES_KEY = 'roles';
                                /** Role,..Role[]: to force at least one Role */
export const Roles = (...roles: [Role, ...Role[]]) =>
    SetMetadata(ROLES_KEY, roles);