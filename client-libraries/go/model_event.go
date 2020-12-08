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
// Event struct for Event
type Event struct {
	// Automatically generated ID
	Id float32 `json:"id,omitempty"`
	// ID of Asset associated with Event
	AssetId float32 `json:"assetId"`
	// ID of EventRule triggered
	EventRuleId float32 `json:"eventRuleId"`
	// Event severity - Can be  LOW / MEDIUM / HIGH
	Severity string `json:"severity"`
	// Event description
	Description string `json:"description,omitempty"`
	// Set to true if Event has been resolved
	Resolved bool `json:"resolved"`
	// Event creation timestamp
	Timestamp time.Time `json:"timestamp"`
	// Event resolution timestamp
	ResolutionTimestamp time.Time `json:"resolutionTimestamp,omitempty"`
}
