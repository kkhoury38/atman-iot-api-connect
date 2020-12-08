export * from './assetControllerApi';
import { AssetControllerApi } from './assetControllerApi';
export * from './assetGroupControllerApi';
import { AssetGroupControllerApi } from './assetGroupControllerApi';
export * from './dashboardElementControllerApi';
import { DashboardElementControllerApi } from './dashboardElementControllerApi';
export * from './dataLoggerControllerApi';
import { DataLoggerControllerApi } from './dataLoggerControllerApi';
export * from './deviceChannelControllerApi';
import { DeviceChannelControllerApi } from './deviceChannelControllerApi';
export * from './deviceControllerApi';
import { DeviceControllerApi } from './deviceControllerApi';
export * from './deviceEventControllerApi';
import { DeviceEventControllerApi } from './deviceEventControllerApi';
export * from './deviceGroupMembershipControllerApi';
import { DeviceGroupMembershipControllerApi } from './deviceGroupMembershipControllerApi';
export * from './deviceTypeChannelTypeControllerApi';
import { DeviceTypeChannelTypeControllerApi } from './deviceTypeChannelTypeControllerApi';
export * from './deviceTypeControllerApi';
import { DeviceTypeControllerApi } from './deviceTypeControllerApi';
export * from './eventControllerApi';
import { EventControllerApi } from './eventControllerApi';
export * from './pingControllerApi';
import { PingControllerApi } from './pingControllerApi';
export * from './schedulerControllerApi';
import { SchedulerControllerApi } from './schedulerControllerApi';
export * from './userControllerApi';
import { UserControllerApi } from './userControllerApi';
export * from './userSubscriptionControllerApi';
import { UserSubscriptionControllerApi } from './userSubscriptionControllerApi';
export * from './virtualAccessControllerApi';
import { VirtualAccessControllerApi } from './virtualAccessControllerApi';
import * as fs from 'fs';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.ClientResponse, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [AssetControllerApi, AssetGroupControllerApi, DashboardElementControllerApi, DataLoggerControllerApi, DeviceChannelControllerApi, DeviceControllerApi, DeviceEventControllerApi, DeviceGroupMembershipControllerApi, DeviceTypeChannelTypeControllerApi, DeviceTypeControllerApi, EventControllerApi, PingControllerApi, SchedulerControllerApi, UserControllerApi, UserSubscriptionControllerApi, VirtualAccessControllerApi];
