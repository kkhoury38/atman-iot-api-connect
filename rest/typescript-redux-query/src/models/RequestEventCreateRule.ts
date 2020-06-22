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
import {
    RequestEventRuleScope,
    RequestEventRuleScopeFromJSON,
    RequestEventRuleScopeToJSON,
} from './';

/**
 * 
 * @export
 * @interface RequestEventCreateRule
 */
export interface RequestEventCreateRule  {
    /**
     * Rule description
     * @type {string}
     * @memberof RequestEventCreateRule
     */
    description: string;
    /**
     * 
     * @type {Array<RequestEventRuleScope>}
     * @memberof RequestEventCreateRule
     */
    scope: Array<RequestEventRuleScope>;
    /**
     * Rule action
     * @type {string}
     * @memberof RequestEventCreateRule
     */
    action: string;
    /**
     * Action Parameters
     * @type {object}
     * @memberof RequestEventCreateRule
     */
    actionParameters: object;
}

export function RequestEventCreateRuleFromJSON(json: any): RequestEventCreateRule {
    return {
        'description': json['description'],
        'scope': (json['scope'] as Array<any>).map(RequestEventRuleScopeFromJSON),
        'action': json['action'],
        'actionParameters': json['actionParameters'],
    };
}

export function RequestEventCreateRuleToJSON(value?: RequestEventCreateRule): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'description': value.description,
        'scope': (value.scope as Array<any>).map(RequestEventRuleScopeToJSON),
        'action': value.action,
        'actionParameters': value.actionParameters,
    };
}

