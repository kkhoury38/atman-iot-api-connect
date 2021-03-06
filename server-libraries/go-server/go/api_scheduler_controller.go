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

// A SchedulerControllerApiController binds http requests to an api service and writes the service results to the http response
type SchedulerControllerApiController struct {
	service SchedulerControllerApiServicer
}

// NewSchedulerControllerApiController creates a default api controller
func NewSchedulerControllerApiController(s SchedulerControllerApiServicer) Router {
	return &SchedulerControllerApiController{ service: s }
}

// Routes returns all of the api route for the SchedulerControllerApiController
func (c *SchedulerControllerApiController) Routes() Routes {
	return Routes{ 
		{
			"SchedulerControllerProcessEvents",
			strings.ToUpper("Get"),
			"/api/scheduler/process/events/{attempt}/{serverKey}",
			c.SchedulerControllerProcessEvents,
		},
		{
			"SchedulerControllerProcessFtpRejected",
			strings.ToUpper("Get"),
			"/api/scheduler/process/ftp-rejected/{serverKey}",
			c.SchedulerControllerProcessFtpRejected,
		},
	}
}

// SchedulerControllerProcessEvents - 
func (c *SchedulerControllerApiController) SchedulerControllerProcessEvents(w http.ResponseWriter, r *http.Request) { 
	params := mux.Vars(r)
	attempt := params["attempt"]
	serverKey := params["serverKey"]
	result, err := c.service.SchedulerControllerProcessEvents(attempt, serverKey)
	if err != nil {
		w.WriteHeader(500)
		return
	}
	
	EncodeJSONResponse(result, nil, w)
}

// SchedulerControllerProcessFtpRejected - 
func (c *SchedulerControllerApiController) SchedulerControllerProcessFtpRejected(w http.ResponseWriter, r *http.Request) { 
	params := mux.Vars(r)
	serverKey := params["serverKey"]
	result, err := c.service.SchedulerControllerProcessFtpRejected(serverKey)
	if err != nil {
		w.WriteHeader(500)
		return
	}
	
	EncodeJSONResponse(result, nil, w)
}
