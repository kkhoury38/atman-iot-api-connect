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
// ResponseEventAssetEvents struct for ResponseEventAssetEvents
type ResponseEventAssetEvents struct {
	Event Event `json:"event"`
	EventRelatedDevice []EventRelatedDevice `json:"eventRelatedDevice"`
}
