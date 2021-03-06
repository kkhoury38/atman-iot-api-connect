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
// EventExcludingIdResolvedTimestampResolutionTimestamp (Schema options: { exclude: [ 'id', 'resolved', 'timestamp', 'resolutionTimestamp' ] })
type EventExcludingIdResolvedTimestampResolutionTimestamp struct {
	// ID of Asset associated with Event
	AssetId float32 `json:"assetId"`
	// ID of EventRule triggered
	EventRuleId float32 `json:"eventRuleId"`
	// Event severity - Can be  LOW / MEDIUM / HIGH
	Severity string `json:"severity"`
	// Event description
	Description string `json:"description,omitempty"`
}
