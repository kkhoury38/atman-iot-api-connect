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

// PingControllerApiService is a service that implents the logic for the PingControllerApiServicer
// This service should implement the business logic for every endpoint for the PingControllerApi API. 
// Include any external packages or services that will be required by this service.
type PingControllerApiService struct {
}

// NewPingControllerApiService creates a default api service
func NewPingControllerApiService() PingControllerApiServicer {
	return &PingControllerApiService{}
}

// PingControllerPing - 
func (s *PingControllerApiService) PingControllerPing() (interface{}, error) {
	// TODO - update PingControllerPing with the required logic for this service method.
	// Add api_ping_controller_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'PingControllerPing' not implemented")
}
