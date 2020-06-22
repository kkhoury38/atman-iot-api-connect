// tslint:disable
/**
 * Atman IoT
 * Atman IoT Server
 *
 * The version of the OpenAPI document: 0.2.3
 * Contact: k.khoury@k-ren.gr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * (Schema options: { exclude: [ \'id\', \'username\', \'isVirtual\', \'roles\' ] })
 * @export
 * @interface UserExcludingIdUsernameIsVirtualRoles
 */
export interface UserExcludingIdUsernameIsVirtualRoles  {
    /**
     * Password
     * @type {string}
     * @memberof UserExcludingIdUsernameIsVirtualRoles
     */
    passwd: string;
    /**
     * Email
     * @type {string}
     * @memberof UserExcludingIdUsernameIsVirtualRoles
     */
    email: string;
}

export function UserExcludingIdUsernameIsVirtualRolesFromJSON(json: any): UserExcludingIdUsernameIsVirtualRoles {
    return {
        'passwd': json['passwd'],
        'email': json['email'],
    };
}

export function UserExcludingIdUsernameIsVirtualRolesToJSON(value?: UserExcludingIdUsernameIsVirtualRoles): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'passwd': value.passwd,
        'email': value.email,
    };
}


