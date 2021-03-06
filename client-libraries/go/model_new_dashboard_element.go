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
// NewDashboardElement (Schema options: { title: 'NewDashboardElement', exclude: [ 'id', 'position' ] })
type NewDashboardElement struct {
	// ID of Asset that Dashboard Element belongs to
	AssetId float32 `json:"assetId"`
	// ID of User that Dashboard Element belongs to
	UserId float32 `json:"userId"`
	// Device Category
	DeviceCategory string `json:"deviceCategory"`
	// Channel Category
	ChannelCategory string `json:"channelCategory"`
	// Element Type
	ElementType string `json:"elementType"`
	// Element Location: mainDashboard / assetDashboard
	Location string `json:"location"`
	// Time Window
	TimeWindow float32 `json:"timeWindow"`
	// Data Operation
	Operation string `json:"operation"`
	// Data group by
	GroupBy string `json:"groupBy"`
	// Element Title
	Title string `json:"title,omitempty"`
	// Element X Label
	XLabel string `json:"xLabel,omitempty"`
	// Element Y Label
	YLabel string `json:"yLabel,omitempty"`
}
