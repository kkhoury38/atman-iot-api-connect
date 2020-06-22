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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface InlineResponse2001UnresolvedIssueList
 */
export interface InlineResponse2001UnresolvedIssueList  {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001UnresolvedIssueList
     */
    severity?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001UnresolvedIssueList
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2001UnresolvedIssueList
     */
    timestamp?: string;
}

export function InlineResponse2001UnresolvedIssueListFromJSON(json: any): InlineResponse2001UnresolvedIssueList {
    return {
        'severity': !exists(json, 'Severity') ? undefined : json['Severity'],
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'timestamp': !exists(json, 'Timestamp') ? undefined : json['Timestamp'],
    };
}

export function InlineResponse2001UnresolvedIssueListToJSON(value?: InlineResponse2001UnresolvedIssueList): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'Severity': value.severity,
        'Description': value.description,
        'Timestamp': value.timestamp,
    };
}


