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
// EventRuleWithRelations (Schema options: { includeRelations: true })
type EventRuleWithRelations struct {
	// Automatically generated ID
	Id float32 `json:"id,omitempty"`
	// Rule description
	Description string `json:"description,omitempty"`
	// Rule scope
	Scope string `json:"scope"`
	// Event Detection Algorithm
	Algorithm string `json:"algorithm,omitempty"`
	// Rule action
	Action string `json:"action"`
	// Rule action parameters
	ActionParameters string `json:"actionParameters,omitempty"`
	// JSON Rule
	Rule string `json:"rule,omitempty"`
	// EventRule execution period - seconds
	ExecutionPeriod float32 `json:"executionPeriod,omitempty"`
	// Last execution timestamp
	LastExecTimestamp time.Time `json:"lastExecTimestamp,omitempty"`
	// Is set to true when EventRule has been activated
	Activated bool `json:"activated,omitempty"`
	// Is automaticaly set to true when EventRule is being processed
	InProgress bool `json:"inProgress,omitempty"`
}
