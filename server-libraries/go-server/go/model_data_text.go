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

type DataText struct {

	// Automatically generated ID
	Id float32 `json:"id,omitempty"`

	// Recording period - seconds
	Period float32 `json:"period"`

	// Recorded data
	Measurement string `json:"measurement"`

	// Timestamp
	Timestamp time.Time `json:"timestamp"`

	// ID of Channel that DataFloat belongs to
	ChannelId float32 `json:"channelId"`
}
