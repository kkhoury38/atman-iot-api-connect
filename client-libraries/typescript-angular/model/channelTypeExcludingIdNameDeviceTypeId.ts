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


/**
 * (Schema options: { exclude: [ \'id\', \'name\', \'deviceTypeId\' ] })
 */
export interface ChannelTypeExcludingIdNameDeviceTypeId { 
    /**
     * ChannelType category
     */
    category?: string;
    /**
     * ChannelType description
     */
    description?: string;
    /**
     * Unit of measurement
     */
    unit?: string;
    /**
     * Type of data: UNDEFINED / SPOT_VALUE / COUNTER / TEXT
     */
    channelType: string;
}

