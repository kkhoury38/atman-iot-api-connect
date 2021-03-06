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
	"errors"
)

// DeviceControllerApiService is a service that implents the logic for the DeviceControllerApiServicer
// This service should implement the business logic for every endpoint for the DeviceControllerApi API. 
// Include any external packages or services that will be required by this service.
type DeviceControllerApiService struct {
}

// NewDeviceControllerApiService creates a default api service
func NewDeviceControllerApiService() DeviceControllerApiServicer {
	return &DeviceControllerApiService{}
}

// DeviceControllerCreate - 
func (s *DeviceControllerApiService) DeviceControllerCreate(dataLoggerId float32, deviceExcludingIdDataLoggerId DeviceExcludingIdDataLoggerId) (interface{}, error) {
	// TODO - update DeviceControllerCreate with the required logic for this service method.
	// Add api_device_controller_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'DeviceControllerCreate' not implemented")
}

// DeviceControllerCreateChannel - 
func (s *DeviceControllerApiService) DeviceControllerCreateChannel(deviceId float32, channelExcludingIdDeviceId ChannelExcludingIdDeviceId) (interface{}, error) {
	// TODO - update DeviceControllerCreateChannel with the required logic for this service method.
	// Add api_device_controller_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'DeviceControllerCreateChannel' not implemented")
}

// DeviceControllerDisableChannelMonitoring - 
func (s *DeviceControllerApiService) DeviceControllerDisableChannelMonitoring(deviceId float32, channelId float32, all bool) (interface{}, error) {
	// TODO - update DeviceControllerDisableChannelMonitoring with the required logic for this service method.
	// Add api_device_controller_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'DeviceControllerDisableChannelMonitoring' not implemented")
}

// DeviceControllerEnableChannelMonitoring - 
func (s *DeviceControllerApiService) DeviceControllerEnableChannelMonitoring(deviceId float32, channelId float32, all bool) (interface{}, error) {
	// TODO - update DeviceControllerEnableChannelMonitoring with the required logic for this service method.
	// Add api_device_controller_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'DeviceControllerEnableChannelMonitoring' not implemented")
}

// DeviceControllerFind - 
func (s *DeviceControllerApiService) DeviceControllerFind(dataLoggerId float32) (interface{}, error) {
	// TODO - update DeviceControllerFind with the required logic for this service method.
	// Add api_device_controller_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'DeviceControllerFind' not implemented")
}

// DeviceControllerFindChannelTypes - 
func (s *DeviceControllerApiService) DeviceControllerFindChannelTypes(deviceId float32) (interface{}, error) {
	// TODO - update DeviceControllerFindChannelTypes with the required logic for this service method.
	// Add api_device_controller_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'DeviceControllerFindChannelTypes' not implemented")
}

// DeviceControllerFindChannels - 
func (s *DeviceControllerApiService) DeviceControllerFindChannels(deviceId float32) (interface{}, error) {
	// TODO - update DeviceControllerFindChannels with the required logic for this service method.
	// Add api_device_controller_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'DeviceControllerFindChannels' not implemented")
}

// DeviceControllerGetDevicesWithType - 
func (s *DeviceControllerApiService) DeviceControllerGetDevicesWithType(deviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId []DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId) (interface{}, error) {
	// TODO - update DeviceControllerGetDevicesWithType with the required logic for this service method.
	// Add api_device_controller_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'DeviceControllerGetDevicesWithType' not implemented")
}

// DeviceControllerUpdateById - 
func (s *DeviceControllerApiService) DeviceControllerUpdateById(id float32, deviceExcludingIdSerialNoDataLoggerIdDeviceTypeId DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId) (interface{}, error) {
	// TODO - update DeviceControllerUpdateById with the required logic for this service method.
	// Add api_device_controller_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'DeviceControllerUpdateById' not implemented")
}
