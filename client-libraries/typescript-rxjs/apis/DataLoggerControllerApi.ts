// tslint:disable
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

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI } from '../runtime';
import {
    DataLogger,
    DataLoggerExcludingIdAuthTokenConfigUserId,
    RequestDataLoggerSetupCsv2ExcludingFileFormat,
    RequestDataLoggerSetupXml2ExcludingFileFormat,
    ResponseDataLoggerSetupStep2,
} from '../models';

export interface DataLoggerControllerCreateRequest {
    dataLoggerExcludingIdAuthTokenConfigUserId?: DataLoggerExcludingIdAuthTokenConfigUserId;
}

export interface DataLoggerControllerDeleteByIdRequest {
    id: number;
}

export interface DataLoggerControllerSetupFromFtp1Request {
    id: number;
    dataLoggerToken: string;
}

export interface DataLoggerControllerSetupFromFtp3Request {
    id: number;
    responseDataLoggerSetupStep2?: ResponseDataLoggerSetupStep2;
}

export interface DataLoggerControllerSetupFromFtpCsv2Request {
    id: number;
    requestDataLoggerSetupCsv2ExcludingFileFormat?: RequestDataLoggerSetupCsv2ExcludingFileFormat;
}

export interface DataLoggerControllerSetupFromFtpXml2Request {
    id: number;
    requestDataLoggerSetupXml2ExcludingFileFormat?: RequestDataLoggerSetupXml2ExcludingFileFormat;
}

export interface DataLoggerControllerUploadDataFromCsvRequest {
    id: number;
    dataLoggerToken: string;
}

export interface DataLoggerControllerUploadDataFromXmlRequest {
    id: number;
    dataLoggerToken: string;
}

/**
 * no description
 */
export class DataLoggerControllerApi extends BaseAPI {

    /**
     * Used for creating a new <b>DataLogger</b> by and authorized <b>User</b>, identified by the provided <i>token</i>. <br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>
     */
    dataLoggerControllerCreate = ({ dataLoggerExcludingIdAuthTokenConfigUserId }: DataLoggerControllerCreateRequest): Observable<DataLogger> => {

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<DataLogger>({
            path: '/data-logger',
            method: 'POST',
            headers,
            body: dataLoggerExcludingIdAuthTokenConfigUserId,
        });
    };

    /**
     * Deletes a<b> DataLogger</b> identified by <i>id</i>, owned by a <b>User</b> identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>
     */
    dataLoggerControllerDeleteById = ({ id }: DataLoggerControllerDeleteByIdRequest): Observable<void> => {
        throwIfNullOrUndefined(id, 'dataLoggerControllerDeleteById');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<void>({
            path: '/data-logger/{id}'.replace('{id}', encodeURI(id)),
            method: 'DELETE',
            headers,
        });
    };

    /**
     * Returns an array of <b>DataLoggers</b> owned by a <b>User</b> identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>
     */
    dataLoggerControllerFind = (): Observable<Array<DataLogger>> => {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<DataLogger>>({
            path: '/data-loggers',
            method: 'GET',
            headers,
        });
    };

    /**
     * Step 1 of setup process of <b>DataLoggers</b> sending data via FTP. It is used for sending a sample uncompressed <i>file</i> containing raw data, as it was generated by the <b>DataLogger</b> (hardware) identified by <i>dataLoggerToken</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>
     */
    dataLoggerControllerSetupFromFtp1 = ({ id, dataLoggerToken }: DataLoggerControllerSetupFromFtp1Request): Observable<void> => {
        throwIfNullOrUndefined(id, 'dataLoggerControllerSetupFromFtp1');
        throwIfNullOrUndefined(dataLoggerToken, 'dataLoggerControllerSetupFromFtp1');

        return this.request<void>({
            path: '/data-logger/setup-ftp/step1/{id}/{dataLoggerToken}'.replace('{id}', encodeURI(id)).replace('{dataLoggerToken}', encodeURI(dataLoggerToken)),
            method: 'POST',
        });
    };

    /**
     * Step 3 of setup process of <b>DataLoggers</b> sending data via FTP. It is used for initiating <b>DeviceTypes</b>, <b>ChannelTypes</b> and <b>Devices</b>. Accepts as input the output of Step 2. Make sure that the <i>manufacturer</i> property is added.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-devicetypecontroller\" target=\"_blank\">DeviceTypeController</a>, <a href=\"/documentation.html#atman-iot-devicetypechanneltypecontroller\" target=\"_blank\">DeviceTypeChannelTypeController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>
     */
    dataLoggerControllerSetupFromFtp3 = ({ id, responseDataLoggerSetupStep2 }: DataLoggerControllerSetupFromFtp3Request): Observable<void> => {
        throwIfNullOrUndefined(id, 'dataLoggerControllerSetupFromFtp3');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<void>({
            path: '/data-logger/setup-ftp/step3/{id}'.replace('{id}', encodeURI(id)),
            method: 'POST',
            headers,
            body: responseDataLoggerSetupStep2,
        });
    };

    /**
     * Step 2 of setup process of <b>DataLoggers</b> sending CSV data via FTP. It is used for mapping properties of the sent <i>file</i> to properties of models in the system. <b>DataLogger</b> to be setup, is identified by <i>id</i> and <b>User</b> performing operation is identified by <i>token</i>. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property <i>confirm</i> to <i>true</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>
     */
    dataLoggerControllerSetupFromFtpCsv2 = ({ id, requestDataLoggerSetupCsv2ExcludingFileFormat }: DataLoggerControllerSetupFromFtpCsv2Request): Observable<ResponseDataLoggerSetupStep2> => {
        throwIfNullOrUndefined(id, 'dataLoggerControllerSetupFromFtpCsv2');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<ResponseDataLoggerSetupStep2>({
            path: '/data-logger/setup-ftp/step2/csv/{id}'.replace('{id}', encodeURI(id)),
            method: 'POST',
            headers,
            body: requestDataLoggerSetupCsv2ExcludingFileFormat,
        });
    };

    /**
     * Step 2 of setup process of <b>DataLoggers</b> sending XML data via FTP. It is used for mapping properties of the sent <i>file</i> to properties of models in the system. <b>DataLogger</b> to be setup, is identified by <i>id</i> and <b>User</b> performing operation is identified by <i>token</i>. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property <i>confirm</i> to <i>true</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>
     */
    dataLoggerControllerSetupFromFtpXml2 = ({ id, requestDataLoggerSetupXml2ExcludingFileFormat }: DataLoggerControllerSetupFromFtpXml2Request): Observable<ResponseDataLoggerSetupStep2> => {
        throwIfNullOrUndefined(id, 'dataLoggerControllerSetupFromFtpXml2');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<ResponseDataLoggerSetupStep2>({
            path: '/data-logger/setup-ftp/step2/xml/{id}'.replace('{id}', encodeURI(id)),
            method: 'POST',
            headers,
            body: requestDataLoggerSetupXml2ExcludingFileFormat,
        });
    };

    /**
     * Used for receiving data, sent in CSV format by a <b>DataLogger</b> identified by <i>id</i> and <i>dataLoggerToken</i>. If the <b>DataLogger</b> is sending data via FTP, endpoint is called internally.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>
     */
    dataLoggerControllerUploadDataFromCsv = ({ id, dataLoggerToken }: DataLoggerControllerUploadDataFromCsvRequest): Observable<void> => {
        throwIfNullOrUndefined(id, 'dataLoggerControllerUploadDataFromCsv');
        throwIfNullOrUndefined(dataLoggerToken, 'dataLoggerControllerUploadDataFromCsv');

        return this.request<void>({
            path: '/data-logger/data-from-csv/{id}/{dataLoggerToken}'.replace('{id}', encodeURI(id)).replace('{dataLoggerToken}', encodeURI(dataLoggerToken)),
            method: 'POST',
        });
    };

    /**
     * Used for receiving data, sent in XML format by a <b>DataLogger</b> identified by <i>id</i> and <i>dataLoggerToken</i>. If the <b>DataLogger</b> is sending data via FTP, endpoint is called internally.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>
     */
    dataLoggerControllerUploadDataFromXml = ({ id, dataLoggerToken }: DataLoggerControllerUploadDataFromXmlRequest): Observable<void> => {
        throwIfNullOrUndefined(id, 'dataLoggerControllerUploadDataFromXml');
        throwIfNullOrUndefined(dataLoggerToken, 'dataLoggerControllerUploadDataFromXml');

        return this.request<void>({
            path: '/data-logger/data-from-xml/{id}/{dataLoggerToken}'.replace('{id}', encodeURI(id)).replace('{dataLoggerToken}', encodeURI(dataLoggerToken)),
            method: 'POST',
        });
    };

}
