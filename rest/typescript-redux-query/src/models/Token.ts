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
 * 
 * @export
 * @interface Token
 */
export interface Token  {
    /**
     * Access Token
     * @type {string}
     * @memberof Token
     */
    token: string;
}

export function TokenFromJSON(json: any): Token {
    return {
        'token': json['token'],
    };
}

export function TokenToJSON(value?: Token): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'token': value.token,
    };
}


