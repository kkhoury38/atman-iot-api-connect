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

type CodeVerificationRequest struct {

	ApiKey string `json:"apiKey"`

	ReferenceCode string `json:"referenceCode"`

	UserEmail string `json:"userEmail"`
}
