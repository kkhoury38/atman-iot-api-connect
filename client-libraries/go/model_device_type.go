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
// DeviceType struct for DeviceType
type DeviceType struct {
	// Automatically generated ID
	Id float32 `json:"id,omitempty"`
	// DeviceType model
	Model string `json:"model"`
	// DeviceType description
	Description string `json:"description,omitempty"`
	// DeviceType manufacturer
	Manufacturer string `json:"manufacturer"`
	// DeviceType category
	Category string `json:"category,omitempty"`
}
