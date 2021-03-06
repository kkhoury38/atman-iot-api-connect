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

type Asset struct {

	// Automatically generated ID
	Id float32 `json:"id,omitempty"`

	// Asset name
	Name string `json:"name,omitempty"`

	// Asset description
	Description string `json:"description,omitempty"`

	// ID of AssetGroup that Asset belongs to
	AssetGroupId float32 `json:"assetGroupId"`
}
