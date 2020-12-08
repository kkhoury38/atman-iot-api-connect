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
// RequestDataLoggerSetupCsv2DataValueLocation (Schema options: { exclude: [ 'fileFormat' ] })
type RequestDataLoggerSetupCsv2DataValueLocation struct {
	// First row containing a measurement
	FirstItemRow float32 `json:"firstItemRow"`
	// Relevant row location of next item
	NextItemIteration float32 `json:"nextItemIteration"`
}
