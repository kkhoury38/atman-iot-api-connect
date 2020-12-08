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
import { Timestamp } from './timestamp';

export class MeasurementSample {
    /**
    * measurement: string / number
    */
    'value': object;
    'period': number;
    'timestamp': Timestamp;
    /**
    * Scope
    */
    'scope': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "object"
        },
        {
            "name": "period",
            "baseName": "period",
            "type": "number"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Timestamp"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MeasurementSample.attributeTypeMap;
    }
}

