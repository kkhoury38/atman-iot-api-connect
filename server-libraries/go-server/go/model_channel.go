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

type Channel struct {

	// Automatically generated ID
	Id float32 `json:"id,omitempty"`

	// Enable channel monitoring - data recording - by setting to true
	Monitor bool `json:"monitor"`

	// Timestamp
	LastTimestamp time.Time `json:"lastTimestamp,omitempty"`

	// Channel Status
	Status string `json:"status,omitempty"`

	// ID of Device that Channel belongs to
	DeviceId float32 `json:"deviceId"`

	// ID of ChannelType associated with Channel
	ChannelTypeId float32 `json:"channelTypeId"`
}
