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

export class DataLogger {
    /**
    * Automatically generated ID
    */
    'id'?: number;
    /**
    * Datalogger description
    */
    'description'?: string;
    /**
    * Method used by DataLogger to send data to the system. At present only FTP implemented
    */
    'connectionType': string;
    /**
    * Format of the files uploaded to the system DataLogger. At present system supports CSV and XML formats
    */
    'fileFormat': string;
    /**
    * Username of system FTP account, where the DataLogger sends the data (if applicable)
    */
    'username'?: string;
    /**
    * Password of system FTP account, where the DataLogger sends the data (if applicable)
    */
    'passwd'?: string;
    /**
    * Authentication token of DataLogger
    */
    'authToken'?: string;
    /**
    * JSON configuration file for DataLogger
    */
    'config'?: string;
    /**
    * Flag for selecting if DataLogger is to be initiated automatically from preexisting configuration
    */
    'autoInit': boolean;
    /**
    * Flag for selecting if DataLogger sends compressed files
    */
    'dataCompressed': boolean;
    /**
    * ID of User that DataLogger belongs to
    */
    'userId': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "connectionType",
            "baseName": "connectionType",
            "type": "string"
        },
        {
            "name": "fileFormat",
            "baseName": "fileFormat",
            "type": "string"
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
            "name": "authToken",
            "baseName": "authToken",
            "type": "string"
        },
        {
            "name": "config",
            "baseName": "config",
            "type": "string"
        },
        {
            "name": "autoInit",
            "baseName": "autoInit",
            "type": "boolean"
        },
        {
            "name": "dataCompressed",
            "baseName": "dataCompressed",
            "type": "boolean"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DataLogger.attributeTypeMap;
    }
}

