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

type MeasurementSample struct {

	// measurement: string / number
	Value map[string]interface{} `json:"value"`

	Period float32 `json:"period"`

	Timestamp Timestamp `json:"timestamp"`

	// Scope
	Scope string `json:"scope"`
}
