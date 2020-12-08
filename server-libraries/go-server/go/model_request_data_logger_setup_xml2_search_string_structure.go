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

// RequestDataLoggerSetupXml2SearchStringStructure - (Schema options: { exclude: [ 'fileFormat' ] })
type RequestDataLoggerSetupXml2SearchStringStructure struct {

	// XML key containing parent attribute
	Key string `json:"key"`

	// Flag for selecting if parent value is the entire string contained in the provided XML Key.  If set to true performSplit must be defined
	IsString bool `json:"isString"`

	PerformSplit []RequestDataLoggerSetupXml2SearchStringStructureSplit `json:"performSplit"`
}
