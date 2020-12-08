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

/**
* (Schema options: { exclude: [ \'fileFormat\' ] })
*/
export class RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray {
    /**
    * First row containing parent
    */
    'firstItemRow': number;
    /**
    * Flag to enable setting parent manually
    */
    'setManually'?: boolean;
    'manualValue'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "firstItemRow",
            "baseName": "firstItemRow",
            "type": "number"
        },
        {
            "name": "setManually",
            "baseName": "setManually",
            "type": "boolean"
        },
        {
            "name": "manualValue",
            "baseName": "manualValue",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray.attributeTypeMap;
    }
}

