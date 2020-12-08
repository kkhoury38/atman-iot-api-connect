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
// EventRelatedDeviceExcludingId (Schema options: { exclude: [ 'id' ] })
type EventRelatedDeviceExcludingId struct {
	// ID of Device associated with Event
	DeviceId float32 `json:"deviceId"`
	// ID of Event
	EventId float32 `json:"eventId"`
}
