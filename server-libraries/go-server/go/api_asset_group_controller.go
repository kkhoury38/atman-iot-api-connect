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
	"encoding/json"
	"net/http"
	"strings"

	"github.com/gorilla/mux"
)

// A AssetGroupControllerApiController binds http requests to an api service and writes the service results to the http response
type AssetGroupControllerApiController struct {
	service AssetGroupControllerApiServicer
}

// NewAssetGroupControllerApiController creates a default api controller
func NewAssetGroupControllerApiController(s AssetGroupControllerApiServicer) Router {
	return &AssetGroupControllerApiController{ service: s }
}

// Routes returns all of the api route for the AssetGroupControllerApiController
func (c *AssetGroupControllerApiController) Routes() Routes {
	return Routes{ 
		{
			"AssetGroupControllerCreateAssetGroup",
			strings.ToUpper("Post"),
			"/api/asset-group/user",
			c.AssetGroupControllerCreateAssetGroup,
		},
		{
			"AssetGroupControllerDeleteById",
			strings.ToUpper("Delete"),
			"/api/asset-group/{id}",
			c.AssetGroupControllerDeleteById,
		},
		{
			"AssetGroupControllerFindUserAssetGroups",
			strings.ToUpper("Get"),
			"/api/asset-groups/user",
			c.AssetGroupControllerFindUserAssetGroups,
		},
		{
			"AssetGroupControllerUpdateById",
			strings.ToUpper("Patch"),
			"/api/asset-group/{id}",
			c.AssetGroupControllerUpdateById,
		},
	}
}

// AssetGroupControllerCreateAssetGroup - 
func (c *AssetGroupControllerApiController) AssetGroupControllerCreateAssetGroup(w http.ResponseWriter, r *http.Request) { 
	assetGroupExcludingIdUserId := &AssetGroupExcludingIdUserId{}
	if err := json.NewDecoder(r.Body).Decode(&assetGroupExcludingIdUserId); err != nil {
		w.WriteHeader(500)
		return
	}
	
	result, err := c.service.AssetGroupControllerCreateAssetGroup(*assetGroupExcludingIdUserId)
	if err != nil {
		w.WriteHeader(500)
		return
	}
	
	EncodeJSONResponse(result, nil, w)
}

// AssetGroupControllerDeleteById - 
func (c *AssetGroupControllerApiController) AssetGroupControllerDeleteById(w http.ResponseWriter, r *http.Request) { 
	params := mux.Vars(r)
	id := params["id"]
	result, err := c.service.AssetGroupControllerDeleteById(id)
	if err != nil {
		w.WriteHeader(500)
		return
	}
	
	EncodeJSONResponse(result, nil, w)
}

// AssetGroupControllerFindUserAssetGroups - 
func (c *AssetGroupControllerApiController) AssetGroupControllerFindUserAssetGroups(w http.ResponseWriter, r *http.Request) { 
	result, err := c.service.AssetGroupControllerFindUserAssetGroups()
	if err != nil {
		w.WriteHeader(500)
		return
	}
	
	EncodeJSONResponse(result, nil, w)
}

// AssetGroupControllerUpdateById - 
func (c *AssetGroupControllerApiController) AssetGroupControllerUpdateById(w http.ResponseWriter, r *http.Request) { 
	params := mux.Vars(r)
	id := params["id"]
	assetGroupExcludingIdUserId := &AssetGroupExcludingIdUserId{}
	if err := json.NewDecoder(r.Body).Decode(&assetGroupExcludingIdUserId); err != nil {
		w.WriteHeader(500)
		return
	}
	
	result, err := c.service.AssetGroupControllerUpdateById(id, *assetGroupExcludingIdUserId)
	if err != nil {
		w.WriteHeader(500)
		return
	}
	
	EncodeJSONResponse(result, nil, w)
}
