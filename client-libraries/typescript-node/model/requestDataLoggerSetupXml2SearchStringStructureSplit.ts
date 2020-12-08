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
export class RequestDataLoggerSetupXml2SearchStringStructureSplit {
    /**
    * Delimiter used to split the string in the provided XML Key
    */
    'delimiter': string;
    /**
    * Location of the required value in string split using delimmiter
    */
    'location': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "delimiter",
            "baseName": "delimiter",
            "type": "string"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return RequestDataLoggerSetupXml2SearchStringStructureSplit.attributeTypeMap;
    }
}

