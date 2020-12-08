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
// RequestDataLoggerSetupCsv2ExcludingFileFormat (Schema options: { exclude: [ 'fileFormat' ] })
type RequestDataLoggerSetupCsv2ExcludingFileFormat struct {
	// Delimiter used in CSV file
	Delimiter string `json:"delimiter"`
	// Decimal Point of values in CSV file
	DecimalPoint string `json:"decimalPoint"`
	TimeData RequestDataLoggerSetupCsv2TimeData `json:"timeData"`
	Data RequestDataLoggerSetupCsv2Data `json:"data"`
	// Provided Configuration Confirmation. Set to true to save current configuration
	Confirm bool `json:"confirm"`
}
