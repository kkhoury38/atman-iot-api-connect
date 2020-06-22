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

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI } from '../runtime';
import {
    Asset,
    AssetExcludingId,
} from '../models';

export interface AssetControllerCreateRequest {
    assetExcludingId?: AssetExcludingId;
}

export interface AssetControllerDeleteByIdRequest {
    id: number;
}

export interface AssetControllerFindRequest {
    assetGroupId: number;
}

export interface AssetControllerFindByNameRequest {
    assetName: string;
}

/**
 * no description
 */
export class AssetControllerApi extends BaseAPI {

    /**
     * Used for creating a new <b>Asset</b>, by an authorized <b>User</b>, identified by the provided <i>token</i>. An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to one <b>AssetGroup</b>. <br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>
     */
    assetControllerCreate = ({ assetExcludingId }: AssetControllerCreateRequest): Observable<Asset> => {

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Asset>({
            path: '/asset',
            method: 'POST',
            headers,
            body: assetExcludingId,
        });
    };

    /**
     * Used for deleting an <b>Asset</b>, identified by <i>id</i> by an authorized <b>User</b> identified by the provided <i>token</i>. <br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>
     */
    assetControllerDeleteById = ({ id }: AssetControllerDeleteByIdRequest): Observable<void> => {
        throwIfNullOrUndefined(id, 'assetControllerDeleteById');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<void>({
            path: '/asset/{id}'.replace('{id}', encodeURI(id)),
            method: 'DELETE',
            headers,
        });
    };

    /**
     * Used for getting the <b>Assets</b> belonging to an <b>AssetGroup</b>, in turn belonging to an authorized <b>User</b> or <b>Virtual User</b>.  An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to the <b>AssetGroup</b> with the provided <i>assetGroupId</i>. An <b>AssetGroup</b> can have many <b>Assets</b>. <i><b>. <br><br>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>
     */
    assetControllerFind = ({ assetGroupId }: AssetControllerFindRequest): Observable<Array<Asset>> => {
        throwIfNullOrUndefined(assetGroupId, 'assetControllerFind');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<Asset>>({
            path: '/assets/{assetGroupId}'.replace('{assetGroupId}', encodeURI(assetGroupId)),
            method: 'GET',
            headers,
        });
    };

    /**
     * Used for getting the <b>Asset</b> identified by <i>assetName</i>, by an authorized <b>User</b> or <b>Virtual User</b> identified by the provided <i>token</i>. An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to one <b>AssetGroup</b>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>
     */
    assetControllerFindByName = ({ assetName }: AssetControllerFindByNameRequest): Observable<Array<Asset>> => {
        throwIfNullOrUndefined(assetName, 'assetControllerFindByName');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<Asset>>({
            path: '/asset/by-name/{assetName}'.replace('{assetName}', encodeURI(assetName)),
            method: 'GET',
            headers,
        });
    };

}
