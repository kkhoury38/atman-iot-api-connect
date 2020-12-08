/*
 * Atman IoT
 *
 * Atman IoT Server
 *
 * API version: 3.0.1
 * Contact: k.khoury@k-ren.gr
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi
// DeviceExcludingIdDataLoggerId (Schema options: { exclude: [ 'id', 'dataLoggerId' ] })
type DeviceExcludingIdDataLoggerId struct {
	// Device description
	Description string `json:"description,omitempty"`
	// Device serial number
	SerialNo string `json:"serialNo"`
	DeviceTypeId float32 `json:"deviceTypeId,omitempty"`
}
