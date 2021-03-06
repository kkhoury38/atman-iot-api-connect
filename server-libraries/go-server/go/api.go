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

import (
	"net/http"
)


// AssetControllerApiRouter defines the required methods for binding the api requests to a responses for the AssetControllerApi
// The AssetControllerApiRouter implementation should parse necessary information from the http request, 
// pass the data to a AssetControllerApiServicer to perform the required actions, then write the service results to the http response.
type AssetControllerApiRouter interface { 
	AssetControllerCreate(http.ResponseWriter, *http.Request)
	AssetControllerDeleteById(http.ResponseWriter, *http.Request)
	AssetControllerFind(http.ResponseWriter, *http.Request)
	AssetControllerFindByName(http.ResponseWriter, *http.Request)
	AssetControllerFindByUserId(http.ResponseWriter, *http.Request)
	AssetControllerUpdateById(http.ResponseWriter, *http.Request)
}
// AssetGroupControllerApiRouter defines the required methods for binding the api requests to a responses for the AssetGroupControllerApi
// The AssetGroupControllerApiRouter implementation should parse necessary information from the http request, 
// pass the data to a AssetGroupControllerApiServicer to perform the required actions, then write the service results to the http response.
type AssetGroupControllerApiRouter interface { 
	AssetGroupControllerCreateAssetGroup(http.ResponseWriter, *http.Request)
	AssetGroupControllerDeleteById(http.ResponseWriter, *http.Request)
	AssetGroupControllerFindUserAssetGroups(http.ResponseWriter, *http.Request)
	AssetGroupControllerUpdateById(http.ResponseWriter, *http.Request)
}
// DashboardElementControllerApiRouter defines the required methods for binding the api requests to a responses for the DashboardElementControllerApi
// The DashboardElementControllerApiRouter implementation should parse necessary information from the http request, 
// pass the data to a DashboardElementControllerApiServicer to perform the required actions, then write the service results to the http response.
type DashboardElementControllerApiRouter interface { 
	DashboardElementControllerCreate(http.ResponseWriter, *http.Request)
	DashboardElementControllerDeleteById(http.ResponseWriter, *http.Request)
	DashboardElementControllerFindByUserIdAssetIdLocation(http.ResponseWriter, *http.Request)
	DashboardElementControllerMoveElementDown(http.ResponseWriter, *http.Request)
	DashboardElementControllerMoveElementUp(http.ResponseWriter, *http.Request)
}
// DataLoggerControllerApiRouter defines the required methods for binding the api requests to a responses for the DataLoggerControllerApi
// The DataLoggerControllerApiRouter implementation should parse necessary information from the http request, 
// pass the data to a DataLoggerControllerApiServicer to perform the required actions, then write the service results to the http response.
type DataLoggerControllerApiRouter interface { 
	DataLoggerControllerCreate(http.ResponseWriter, *http.Request)
	DataLoggerControllerDeleteById(http.ResponseWriter, *http.Request)
	DataLoggerControllerFind(http.ResponseWriter, *http.Request)
	DataLoggerControllerSetupFromFtp1(http.ResponseWriter, *http.Request)
	DataLoggerControllerSetupFromFtp3(http.ResponseWriter, *http.Request)
	DataLoggerControllerSetupFromFtpCsv2(http.ResponseWriter, *http.Request)
	DataLoggerControllerSetupFromFtpXml2(http.ResponseWriter, *http.Request)
	DataLoggerControllerUploadDataFromCsv(http.ResponseWriter, *http.Request)
	DataLoggerControllerUploadDataFromXml(http.ResponseWriter, *http.Request)
}
// DeviceChannelControllerApiRouter defines the required methods for binding the api requests to a responses for the DeviceChannelControllerApi
// The DeviceChannelControllerApiRouter implementation should parse necessary information from the http request, 
// pass the data to a DeviceChannelControllerApiServicer to perform the required actions, then write the service results to the http response.
type DeviceChannelControllerApiRouter interface { 
	DeviceChannelControllerFindByPeriod(http.ResponseWriter, *http.Request)
	DeviceChannelControllerFindDeviceAllLastRecordedTS(http.ResponseWriter, *http.Request)
	DeviceChannelControllerFindDeviceAllLastTS(http.ResponseWriter, *http.Request)
	DeviceChannelControllerFindDeviceChannelLastTS(http.ResponseWriter, *http.Request)
	DeviceChannelControllerFindDeviceChannelLastTSSnChName(http.ResponseWriter, *http.Request)
}
// DeviceControllerApiRouter defines the required methods for binding the api requests to a responses for the DeviceControllerApi
// The DeviceControllerApiRouter implementation should parse necessary information from the http request, 
// pass the data to a DeviceControllerApiServicer to perform the required actions, then write the service results to the http response.
type DeviceControllerApiRouter interface { 
	DeviceControllerCreate(http.ResponseWriter, *http.Request)
	DeviceControllerCreateChannel(http.ResponseWriter, *http.Request)
	DeviceControllerDisableChannelMonitoring(http.ResponseWriter, *http.Request)
	DeviceControllerEnableChannelMonitoring(http.ResponseWriter, *http.Request)
	DeviceControllerFind(http.ResponseWriter, *http.Request)
	DeviceControllerFindChannelTypes(http.ResponseWriter, *http.Request)
	DeviceControllerFindChannels(http.ResponseWriter, *http.Request)
	DeviceControllerGetDevicesWithType(http.ResponseWriter, *http.Request)
	DeviceControllerUpdateById(http.ResponseWriter, *http.Request)
}
// DeviceEventControllerApiRouter defines the required methods for binding the api requests to a responses for the DeviceEventControllerApi
// The DeviceEventControllerApiRouter implementation should parse necessary information from the http request, 
// pass the data to a DeviceEventControllerApiServicer to perform the required actions, then write the service results to the http response.
type DeviceEventControllerApiRouter interface { 
	DeviceEventControllerCountNotViewed(http.ResponseWriter, *http.Request)
	DeviceEventControllerFind(http.ResponseWriter, *http.Request)
	DeviceEventControllerUpdateViewedBy(http.ResponseWriter, *http.Request)
}
// DeviceGroupMembershipControllerApiRouter defines the required methods for binding the api requests to a responses for the DeviceGroupMembershipControllerApi
// The DeviceGroupMembershipControllerApiRouter implementation should parse necessary information from the http request, 
// pass the data to a DeviceGroupMembershipControllerApiServicer to perform the required actions, then write the service results to the http response.
type DeviceGroupMembershipControllerApiRouter interface { 
	DeviceGroupMembershipControllerCreate(http.ResponseWriter, *http.Request)
	DeviceGroupMembershipControllerDeleteById(http.ResponseWriter, *http.Request)
	DeviceGroupMembershipControllerFindByAssetId(http.ResponseWriter, *http.Request)
	DeviceGroupMembershipControllerFindByDeviceId(http.ResponseWriter, *http.Request)
}
// DeviceTypeChannelTypeControllerApiRouter defines the required methods for binding the api requests to a responses for the DeviceTypeChannelTypeControllerApi
// The DeviceTypeChannelTypeControllerApiRouter implementation should parse necessary information from the http request, 
// pass the data to a DeviceTypeChannelTypeControllerApiServicer to perform the required actions, then write the service results to the http response.
type DeviceTypeChannelTypeControllerApiRouter interface { 
	DeviceTypeChannelTypeControllerCount(http.ResponseWriter, *http.Request)
	DeviceTypeChannelTypeControllerCreate(http.ResponseWriter, *http.Request)
	DeviceTypeChannelTypeControllerDeviceTypeChannelCategories(http.ResponseWriter, *http.Request)
	DeviceTypeChannelTypeControllerFind(http.ResponseWriter, *http.Request)
	DeviceTypeChannelTypeControllerUpdateById(http.ResponseWriter, *http.Request)
}
// DeviceTypeControllerApiRouter defines the required methods for binding the api requests to a responses for the DeviceTypeControllerApi
// The DeviceTypeControllerApiRouter implementation should parse necessary information from the http request, 
// pass the data to a DeviceTypeControllerApiServicer to perform the required actions, then write the service results to the http response.
type DeviceTypeControllerApiRouter interface { 
	DeviceTypeControllerCount(http.ResponseWriter, *http.Request)
	DeviceTypeControllerCreate(http.ResponseWriter, *http.Request)
	DeviceTypeControllerFind(http.ResponseWriter, *http.Request)
	DeviceTypeControllerGetAssetDeviceCategories(http.ResponseWriter, *http.Request)
	DeviceTypeControllerUpdateById(http.ResponseWriter, *http.Request)
}
// EventControllerApiRouter defines the required methods for binding the api requests to a responses for the EventControllerApi
// The EventControllerApiRouter implementation should parse necessary information from the http request, 
// pass the data to a EventControllerApiServicer to perform the required actions, then write the service results to the http response.
type EventControllerApiRouter interface { 
	EventControllerCreateNow(http.ResponseWriter, *http.Request)
	EventControllerCreateRelatedDev(http.ResponseWriter, *http.Request)
	EventControllerCreateRule(http.ResponseWriter, *http.Request)
	EventControllerCreateRuleSubscription(http.ResponseWriter, *http.Request)
	EventControllerFind(http.ResponseWriter, *http.Request)
	EventControllerFindUnresolved(http.ResponseWriter, *http.Request)
	EventControllerProcessSubscriptions(http.ResponseWriter, *http.Request)
	EventControllerUpdateById(http.ResponseWriter, *http.Request)
}
// PingControllerApiRouter defines the required methods for binding the api requests to a responses for the PingControllerApi
// The PingControllerApiRouter implementation should parse necessary information from the http request, 
// pass the data to a PingControllerApiServicer to perform the required actions, then write the service results to the http response.
type PingControllerApiRouter interface { 
	PingControllerPing(http.ResponseWriter, *http.Request)
}
// SchedulerControllerApiRouter defines the required methods for binding the api requests to a responses for the SchedulerControllerApi
// The SchedulerControllerApiRouter implementation should parse necessary information from the http request, 
// pass the data to a SchedulerControllerApiServicer to perform the required actions, then write the service results to the http response.
type SchedulerControllerApiRouter interface { 
	SchedulerControllerProcessEvents(http.ResponseWriter, *http.Request)
	SchedulerControllerProcessFtpRejected(http.ResponseWriter, *http.Request)
}
// UserControllerApiRouter defines the required methods for binding the api requests to a responses for the UserControllerApi
// The UserControllerApiRouter implementation should parse necessary information from the http request, 
// pass the data to a UserControllerApiServicer to perform the required actions, then write the service results to the http response.
type UserControllerApiRouter interface { 
	UserControllerCreate(http.ResponseWriter, *http.Request)
	UserControllerCreateVirtual(http.ResponseWriter, *http.Request)
	UserControllerDeleteVirtualUserById(http.ResponseWriter, *http.Request)
	UserControllerGetVirtualUsers(http.ResponseWriter, *http.Request)
	UserControllerLogin(http.ResponseWriter, *http.Request)
}
// UserSubscriptionControllerApiRouter defines the required methods for binding the api requests to a responses for the UserSubscriptionControllerApi
// The UserSubscriptionControllerApiRouter implementation should parse necessary information from the http request, 
// pass the data to a UserSubscriptionControllerApiServicer to perform the required actions, then write the service results to the http response.
type UserSubscriptionControllerApiRouter interface { 
	UserSubscriptionControllerCreate(http.ResponseWriter, *http.Request)
	UserSubscriptionControllerCreateUserSubscriptionBySubId(http.ResponseWriter, *http.Request)
	UserSubscriptionControllerFindSubscriptionsByCategory(http.ResponseWriter, *http.Request)
	UserSubscriptionControllerGetByRefferenceCode(http.ResponseWriter, *http.Request)
	UserSubscriptionControllerVerifyCode(http.ResponseWriter, *http.Request)
}
// VirtualAccessControllerApiRouter defines the required methods for binding the api requests to a responses for the VirtualAccessControllerApi
// The VirtualAccessControllerApiRouter implementation should parse necessary information from the http request, 
// pass the data to a VirtualAccessControllerApiServicer to perform the required actions, then write the service results to the http response.
type VirtualAccessControllerApiRouter interface { 
	VirtualAccessControllerCreateAccessByGroup(http.ResponseWriter, *http.Request)
	VirtualAccessControllerCreateAccessByRight(http.ResponseWriter, *http.Request)
	VirtualAccessControllerDeleteById(http.ResponseWriter, *http.Request)
	VirtualAccessControllerFindByUserId(http.ResponseWriter, *http.Request)
}


// AssetControllerApiServicer defines the api actions for the AssetControllerApi service
// This interface intended to stay up to date with the openapi yaml used to generate it, 
// while the service implementation can ignored with the .openapi-generator-ignore file 
// and updated with the logic required for the API.
type AssetControllerApiServicer interface { 
	AssetControllerCreate(AssetExcludingId) (interface{}, error)
	AssetControllerDeleteById(float32) (interface{}, error)
	AssetControllerFind(float32) (interface{}, error)
	AssetControllerFindByName(string) (interface{}, error)
	AssetControllerFindByUserId(float32) (interface{}, error)
	AssetControllerUpdateById(float32, AssetExcludingIdAssetGroupId) (interface{}, error)
}


// AssetGroupControllerApiServicer defines the api actions for the AssetGroupControllerApi service
// This interface intended to stay up to date with the openapi yaml used to generate it, 
// while the service implementation can ignored with the .openapi-generator-ignore file 
// and updated with the logic required for the API.
type AssetGroupControllerApiServicer interface { 
	AssetGroupControllerCreateAssetGroup(AssetGroupExcludingIdUserId) (interface{}, error)
	AssetGroupControllerDeleteById(float32) (interface{}, error)
	AssetGroupControllerFindUserAssetGroups() (interface{}, error)
	AssetGroupControllerUpdateById(float32, AssetGroupExcludingIdUserId) (interface{}, error)
}


// DashboardElementControllerApiServicer defines the api actions for the DashboardElementControllerApi service
// This interface intended to stay up to date with the openapi yaml used to generate it, 
// while the service implementation can ignored with the .openapi-generator-ignore file 
// and updated with the logic required for the API.
type DashboardElementControllerApiServicer interface { 
	DashboardElementControllerCreate(NewDashboardElement) (interface{}, error)
	DashboardElementControllerDeleteById(float32) (interface{}, error)
	DashboardElementControllerFindByUserIdAssetIdLocation(float32, float32, string) (interface{}, error)
	DashboardElementControllerMoveElementDown(float32) (interface{}, error)
	DashboardElementControllerMoveElementUp(float32) (interface{}, error)
}


// DataLoggerControllerApiServicer defines the api actions for the DataLoggerControllerApi service
// This interface intended to stay up to date with the openapi yaml used to generate it, 
// while the service implementation can ignored with the .openapi-generator-ignore file 
// and updated with the logic required for the API.
type DataLoggerControllerApiServicer interface { 
	DataLoggerControllerCreate(DataLoggerExcludingIdAuthTokenConfigUserId) (interface{}, error)
	DataLoggerControllerDeleteById(float32) (interface{}, error)
	DataLoggerControllerFind() (interface{}, error)
	DataLoggerControllerSetupFromFtp1(float32, string) (interface{}, error)
	DataLoggerControllerSetupFromFtp3(float32, ResponseDataLoggerSetupStep2) (interface{}, error)
	DataLoggerControllerSetupFromFtpCsv2(float32, RequestDataLoggerSetupCsv2ExcludingFileFormat) (interface{}, error)
	DataLoggerControllerSetupFromFtpXml2(float32, RequestDataLoggerSetupXml2ExcludingFileFormat) (interface{}, error)
	DataLoggerControllerUploadDataFromCsv(float32, string) (interface{}, error)
	DataLoggerControllerUploadDataFromXml(float32, string) (interface{}, error)
}


// DeviceChannelControllerApiServicer defines the api actions for the DeviceChannelControllerApi service
// This interface intended to stay up to date with the openapi yaml used to generate it, 
// while the service implementation can ignored with the .openapi-generator-ignore file 
// and updated with the logic required for the API.
type DeviceChannelControllerApiServicer interface { 
	DeviceChannelControllerFindByPeriod(float32, float32, string, string, float32, float32, string, string) (interface{}, error)
	DeviceChannelControllerFindDeviceAllLastRecordedTS(float32) (interface{}, error)
	DeviceChannelControllerFindDeviceAllLastTS(float32) (interface{}, error)
	DeviceChannelControllerFindDeviceChannelLastTS(float32, float32) (interface{}, error)
	DeviceChannelControllerFindDeviceChannelLastTSSnChName(string, string) (interface{}, error)
}


// DeviceControllerApiServicer defines the api actions for the DeviceControllerApi service
// This interface intended to stay up to date with the openapi yaml used to generate it, 
// while the service implementation can ignored with the .openapi-generator-ignore file 
// and updated with the logic required for the API.
type DeviceControllerApiServicer interface { 
	DeviceControllerCreate(float32, DeviceExcludingIdDataLoggerId) (interface{}, error)
	DeviceControllerCreateChannel(float32, ChannelExcludingIdDeviceId) (interface{}, error)
	DeviceControllerDisableChannelMonitoring(float32, float32, bool) (interface{}, error)
	DeviceControllerEnableChannelMonitoring(float32, float32, bool) (interface{}, error)
	DeviceControllerFind(float32) (interface{}, error)
	DeviceControllerFindChannelTypes(float32) (interface{}, error)
	DeviceControllerFindChannels(float32) (interface{}, error)
	DeviceControllerGetDevicesWithType([]DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId) (interface{}, error)
	DeviceControllerUpdateById(float32, DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId) (interface{}, error)
}


// DeviceEventControllerApiServicer defines the api actions for the DeviceEventControllerApi service
// This interface intended to stay up to date with the openapi yaml used to generate it, 
// while the service implementation can ignored with the .openapi-generator-ignore file 
// and updated with the logic required for the API.
type DeviceEventControllerApiServicer interface { 
	DeviceEventControllerCountNotViewed(float32) (interface{}, error)
	DeviceEventControllerFind(float32, float32, float32) (interface{}, error)
	DeviceEventControllerUpdateViewedBy(float32) (interface{}, error)
}


// DeviceGroupMembershipControllerApiServicer defines the api actions for the DeviceGroupMembershipControllerApi service
// This interface intended to stay up to date with the openapi yaml used to generate it, 
// while the service implementation can ignored with the .openapi-generator-ignore file 
// and updated with the logic required for the API.
type DeviceGroupMembershipControllerApiServicer interface { 
	DeviceGroupMembershipControllerCreate(DeviceGroupMembershipExcludingId) (interface{}, error)
	DeviceGroupMembershipControllerDeleteById(float32) (interface{}, error)
	DeviceGroupMembershipControllerFindByAssetId(float32) (interface{}, error)
	DeviceGroupMembershipControllerFindByDeviceId(float32) (interface{}, error)
}


// DeviceTypeChannelTypeControllerApiServicer defines the api actions for the DeviceTypeChannelTypeControllerApi service
// This interface intended to stay up to date with the openapi yaml used to generate it, 
// while the service implementation can ignored with the .openapi-generator-ignore file 
// and updated with the logic required for the API.
type DeviceTypeChannelTypeControllerApiServicer interface { 
	DeviceTypeChannelTypeControllerCount(float32) (interface{}, error)
	DeviceTypeChannelTypeControllerCreate(float32, ChannelTypeExcludingIdDeviceTypeId) (interface{}, error)
	DeviceTypeChannelTypeControllerDeviceTypeChannelCategories(float32) (interface{}, error)
	DeviceTypeChannelTypeControllerFind(float32, float32, float32) (interface{}, error)
	DeviceTypeChannelTypeControllerUpdateById(float32, ChannelTypeExcludingIdNameDeviceTypeId) (interface{}, error)
}


// DeviceTypeControllerApiServicer defines the api actions for the DeviceTypeControllerApi service
// This interface intended to stay up to date with the openapi yaml used to generate it, 
// while the service implementation can ignored with the .openapi-generator-ignore file 
// and updated with the logic required for the API.
type DeviceTypeControllerApiServicer interface { 
	DeviceTypeControllerCount() (interface{}, error)
	DeviceTypeControllerCreate(DeviceType) (interface{}, error)
	DeviceTypeControllerFind(float32, float32) (interface{}, error)
	DeviceTypeControllerGetAssetDeviceCategories(float32) (interface{}, error)
	DeviceTypeControllerUpdateById(float32, DeviceTypeExcludingIdModelManufacturer) (interface{}, error)
}


// EventControllerApiServicer defines the api actions for the EventControllerApi service
// This interface intended to stay up to date with the openapi yaml used to generate it, 
// while the service implementation can ignored with the .openapi-generator-ignore file 
// and updated with the logic required for the API.
type EventControllerApiServicer interface { 
	EventControllerCreateNow(EventExcludingIdResolvedTimestampResolutionTimestamp) (interface{}, error)
	EventControllerCreateRelatedDev(EventRelatedDeviceExcludingId) (interface{}, error)
	EventControllerCreateRule(RequestEventCreateRule) (interface{}, error)
	EventControllerCreateRuleSubscription(EventRuleSubscriptionExcludingIdLastExecTimestamp) (interface{}, error)
	EventControllerFind(float32) (interface{}, error)
	EventControllerFindUnresolved(float32) (interface{}, error)
	EventControllerProcessSubscriptions() (interface{}, error)
	EventControllerUpdateById(float32) (interface{}, error)
}


// PingControllerApiServicer defines the api actions for the PingControllerApi service
// This interface intended to stay up to date with the openapi yaml used to generate it, 
// while the service implementation can ignored with the .openapi-generator-ignore file 
// and updated with the logic required for the API.
type PingControllerApiServicer interface { 
	PingControllerPing() (interface{}, error)
}


// SchedulerControllerApiServicer defines the api actions for the SchedulerControllerApi service
// This interface intended to stay up to date with the openapi yaml used to generate it, 
// while the service implementation can ignored with the .openapi-generator-ignore file 
// and updated with the logic required for the API.
type SchedulerControllerApiServicer interface { 
	SchedulerControllerProcessEvents(float32, string) (interface{}, error)
	SchedulerControllerProcessFtpRejected(string) (interface{}, error)
}


// UserControllerApiServicer defines the api actions for the UserControllerApi service
// This interface intended to stay up to date with the openapi yaml used to generate it, 
// while the service implementation can ignored with the .openapi-generator-ignore file 
// and updated with the logic required for the API.
type UserControllerApiServicer interface { 
	UserControllerCreate(string, UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode) (interface{}, error)
	UserControllerCreateVirtual(UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode) (interface{}, error)
	UserControllerDeleteVirtualUserById(float32) (interface{}, error)
	UserControllerGetVirtualUsers() (interface{}, error)
	UserControllerLogin(UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode) (interface{}, error)
}


// UserSubscriptionControllerApiServicer defines the api actions for the UserSubscriptionControllerApi service
// This interface intended to stay up to date with the openapi yaml used to generate it, 
// while the service implementation can ignored with the .openapi-generator-ignore file 
// and updated with the logic required for the API.
type UserSubscriptionControllerApiServicer interface { 
	UserSubscriptionControllerCreate(map[string]interface{}) (interface{}, error)
	UserSubscriptionControllerCreateUserSubscriptionBySubId(float32) (interface{}, error)
	UserSubscriptionControllerFindSubscriptionsByCategory(string) (interface{}, error)
	UserSubscriptionControllerGetByRefferenceCode(string) (interface{}, error)
	UserSubscriptionControllerVerifyCode(CodeVerificationRequest) (interface{}, error)
}


// VirtualAccessControllerApiServicer defines the api actions for the VirtualAccessControllerApi service
// This interface intended to stay up to date with the openapi yaml used to generate it, 
// while the service implementation can ignored with the .openapi-generator-ignore file 
// and updated with the logic required for the API.
type VirtualAccessControllerApiServicer interface { 
	VirtualAccessControllerCreateAccessByGroup(RequestVirtualAccessRightExcludingAssetId) (interface{}, error)
	VirtualAccessControllerCreateAccessByRight(RequestVirtualAccessRightExcludingAssetGroupId) (interface{}, error)
	VirtualAccessControllerDeleteById(float32) (interface{}, error)
	VirtualAccessControllerFindByUserId(float32) (interface{}, error)
}
