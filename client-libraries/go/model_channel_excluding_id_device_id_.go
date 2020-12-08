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
import (
	"time"
)
// ChannelExcludingIdDeviceId (Schema options: { exclude: [ 'id', 'deviceId' ] })
type ChannelExcludingIdDeviceId struct {
	// Enable channel monitoring - data recording - by setting to true
	Monitor bool `json:"monitor"`
	// Timestamp
	LastTimestamp time.Time `json:"lastTimestamp,omitempty"`
	// Channel Status
	Status string `json:"status,omitempty"`
	// ID of ChannelType associated with Channel
	ChannelTypeId float32 `json:"channelTypeId"`
}
