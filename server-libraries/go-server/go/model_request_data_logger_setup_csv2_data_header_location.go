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

// RequestDataLoggerSetupCsv2DataHeaderLocation - (Schema options: { exclude: [ 'fileFormat' ] })
type RequestDataLoggerSetupCsv2DataHeaderLocation struct {

	// First column of header
	FirstItemCol float32 `json:"firstItemCol"`

	// Relevant row location of next item
	NextItemIteration float32 `json:"nextItemIteration"`

	Model RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray `json:"model"`

	SerialNo RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray `json:"serialNo"`

	ChannelName RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray `json:"channelName"`

	ChannelUnit RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray `json:"channelUnit"`

	Period RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber `json:"period"`
}
