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
 *
 */

import ApiClient from '../ApiClient';
import UserCredentialsWithRelations from './UserCredentialsWithRelations';

/**
 * The UserWithRelations model module.
 * @module model/UserWithRelations
 * @version 3.0.1
 */
class UserWithRelations {
    /**
     * Constructs a new <code>UserWithRelations</code>.
     * (Schema options: { includeRelations: true })
     * @alias module:model/UserWithRelations
     * @param username {String} Username
     * @param email {String} Email
     * @param isVirtual {Boolean} Automatically assigned flag to select if User is virtual or not
     */
    constructor(username, email, isVirtual) { 
        
        UserWithRelations.initialize(this, username, email, isVirtual);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, username, email, isVirtual) { 
        obj['username'] = username;
        obj['email'] = email;
        obj['isVirtual'] = isVirtual;
    }

    /**
     * Constructs a <code>UserWithRelations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserWithRelations} obj Optional instance to populate.
     * @return {module:model/UserWithRelations} The populated <code>UserWithRelations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserWithRelations();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('passwd')) {
                obj['passwd'] = ApiClient.convertToType(data['passwd'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
            }
            if (data.hasOwnProperty('isVirtual')) {
                obj['isVirtual'] = ApiClient.convertToType(data['isVirtual'], 'Boolean');
            }
            if (data.hasOwnProperty('subscriptionReferenceCode')) {
                obj['subscriptionReferenceCode'] = ApiClient.convertToType(data['subscriptionReferenceCode'], 'String');
            }
            if (data.hasOwnProperty('userCredentials')) {
                obj['userCredentials'] = UserCredentialsWithRelations.constructFromObject(data['userCredentials']);
            }
        }
        return obj;
    }


}

/**
 * Automatically generated ID
 * @member {Number} id
 */
UserWithRelations.prototype['id'] = undefined;

/**
 * Username
 * @member {String} username
 */
UserWithRelations.prototype['username'] = undefined;

/**
 * Password
 * @member {String} passwd
 */
UserWithRelations.prototype['passwd'] = undefined;

/**
 * Email
 * @member {String} email
 */
UserWithRelations.prototype['email'] = undefined;

/**
 * @member {Array.<String>} roles
 */
UserWithRelations.prototype['roles'] = undefined;

/**
 * Automatically assigned flag to select if User is virtual or not
 * @member {Boolean} isVirtual
 */
UserWithRelations.prototype['isVirtual'] = undefined;

/**
 * @member {String} subscriptionReferenceCode
 */
UserWithRelations.prototype['subscriptionReferenceCode'] = undefined;

/**
 * @member {module:model/UserCredentialsWithRelations} userCredentials
 */
UserWithRelations.prototype['userCredentials'] = undefined;






export default UserWithRelations;

