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
import { RequestDataLoggerSetupXml2SearchStringStructure } from './requestDataLoggerSetupXml2SearchStringStructure';

export class RequestDataLoggerSetupXml2 {
    /**
    * XML key of list containing the the measurements
    */
    'objectListKey': string;
    'model': RequestDataLoggerSetupXml2SearchStringStructure;
    'serialNo': RequestDataLoggerSetupXml2SearchStringStructure;
    'channelName': RequestDataLoggerSetupXml2SearchStringStructure;
    'channelUnit': RequestDataLoggerSetupXml2SearchStringStructure;
    'value': RequestDataLoggerSetupXml2SearchStringStructure;
    'period': RequestDataLoggerSetupXml2SearchStringStructure;
    'timestamp': RequestDataLoggerSetupXml2SearchStringStructure;
    /**
    * Provided Configuration Confirmation. Set to true to save current configuration
    */
    'confirm': boolean;
    /**
    * Data File Format
    */
    'fileFormat': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objectListKey",
            "baseName": "objectListKey",
            "type": "string"
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "RequestDataLoggerSetupXml2SearchStringStructure"
        },
        {
            "name": "serialNo",
            "baseName": "serialNo",
            "type": "RequestDataLoggerSetupXml2SearchStringStructure"
        },
        {
            "name": "channelName",
            "baseName": "channelName",
            "type": "RequestDataLoggerSetupXml2SearchStringStructure"
        },
        {
            "name": "channelUnit",
            "baseName": "channelUnit",
            "type": "RequestDataLoggerSetupXml2SearchStringStructure"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "RequestDataLoggerSetupXml2SearchStringStructure"
        },
        {
            "name": "period",
            "baseName": "period",
            "type": "RequestDataLoggerSetupXml2SearchStringStructure"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "RequestDataLoggerSetupXml2SearchStringStructure"
        },
        {
            "name": "confirm",
            "baseName": "confirm",
            "type": "boolean"
        },
        {
            "name": "fileFormat",
            "baseName": "fileFormat",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RequestDataLoggerSetupXml2.attributeTypeMap;
    }
}

