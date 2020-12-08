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

// AssetControllerApiService is a service that implents the logic for the AssetControllerApiServicer
// This service should implement the business logic for every endpoint for the AssetControllerApi API. 
// Include any external packages or services that will be required by this service.
type AssetControllerApiService struct {
}

// NewAssetControllerApiService creates a default api service
func NewAssetControllerApiService() AssetControllerApiServicer {
	return &AssetControllerApiService{}
}

// AssetControllerCreate - 
func (s *AssetControllerApiService) AssetControllerCreate(assetExcludingId AssetExcludingId) (interface{}, error) {
	// TODO - update AssetControllerCreate with the required logic for this service method.
	// Add api_asset_controller_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'AssetControllerCreate' not implemented")
}

// AssetControllerDeleteById - 
func (s *AssetControllerApiService) AssetControllerDeleteById(id float32) (interface{}, error) {
	// TODO - update AssetControllerDeleteById with the required logic for this service method.
	// Add api_asset_controller_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'AssetControllerDeleteById' not implemented")
}

// AssetControllerFind - 
func (s *AssetControllerApiService) AssetControllerFind(assetGroupId float32) (interface{}, error) {
	// TODO - update AssetControllerFind with the required logic for this service method.
	// Add api_asset_controller_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'AssetControllerFind' not implemented")
}

// AssetControllerFindByName - 
func (s *AssetControllerApiService) AssetControllerFindByName(assetName string) (interface{}, error) {
	// TODO - update AssetControllerFindByName with the required logic for this service method.
	// Add api_asset_controller_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'AssetControllerFindByName' not implemented")
}

// AssetControllerFindByUserId - 
func (s *AssetControllerApiService) AssetControllerFindByUserId(userId float32) (interface{}, error) {
	// TODO - update AssetControllerFindByUserId with the required logic for this service method.
	// Add api_asset_controller_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'AssetControllerFindByUserId' not implemented")
}

// AssetControllerUpdateById - 
func (s *AssetControllerApiService) AssetControllerUpdateById(id float32, assetExcludingIdAssetGroupId AssetExcludingIdAssetGroupId) (interface{}, error) {
	// TODO - update AssetControllerUpdateById with the required logic for this service method.
	// Add api_asset_controller_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'AssetControllerUpdateById' not implemented")
}
