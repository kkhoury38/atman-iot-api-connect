/**
 * Atman IoT
 * Atman IoT Server
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: k.khoury@k-ren.gr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

export class User {
    /**
    * Automatically generated ID
    */
    'id'?: number;
    /**
    * Username
    */
    'username': string;
    /**
    * Password
    */
    'passwd'?: string;
    /**
    * Email
    */
    'email': string;
    'roles'?: Array<string>;
    /**
    * Automatically assigned flag to select if User is virtual or not
    */
    'isVirtual': boolean;
    'subscriptionReferenceCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        },
        {
            "name": "passwd",
            "baseName": "passwd",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<string>"
        },
        {
            "name": "isVirtual",
            "baseName": "isVirtual",
            "type": "boolean"
        },
        {
            "name": "subscriptionReferenceCode",
            "baseName": "subscriptionReferenceCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}

