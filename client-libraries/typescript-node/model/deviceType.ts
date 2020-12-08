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

export class DeviceType {
    /**
    * Automatically generated ID
    */
    'id'?: number;
    /**
    * DeviceType model
    */
    'model': string;
    /**
    * DeviceType description
    */
    'description'?: string;
    /**
    * DeviceType manufacturer
    */
    'manufacturer': string;
    /**
    * DeviceType category
    */
    'category'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "manufacturer",
            "baseName": "manufacturer",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DeviceType.attributeTypeMap;
    }
}

