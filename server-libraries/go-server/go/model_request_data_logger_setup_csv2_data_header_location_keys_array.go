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

// RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray - (Schema options: { exclude: [ 'fileFormat' ] })
type RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray struct {

	// First row containing parent
	FirstItemRow float32 `json:"firstItemRow"`

	// Flag to enable setting parent manually
	SetManually bool `json:"setManually,omitempty"`

	// Manual value for parent (string)
	ManualValue string `json:"manualValue,omitempty"`
}
