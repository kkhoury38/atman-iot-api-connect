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

type EventRuleSubscription struct {

	// Automatically generated ID
	Id float32 `json:"id,omitempty"`

	// EventRule execution period - seconds
	ExecutionPeriod float32 `json:"executionPeriod"`

	// Last execution timestamp
	LastExecTimestamp string `json:"lastExecTimestamp,omitempty"`

	// ID of Asset subscribed to EventRule
	AssetId float32 `json:"assetId"`

	// ID of associated EventRule
	EventRuleId float32 `json:"eventRuleId"`

	// Is set to true when EventRule has been activated
	RuleActivated bool `json:"ruleActivated"`
}
