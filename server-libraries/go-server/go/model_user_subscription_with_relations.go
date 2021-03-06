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
	"time"
)

// UserSubscriptionWithRelations - (tsType: UserSubscriptionWithRelations, schemaOptions: { includeRelations: true })
type UserSubscriptionWithRelations struct {

	Id float32 `json:"id,omitempty"`

	ReferenceCode string `json:"referenceCode"`

	Email string `json:"email,omitempty"`

	Discount float32 `json:"discount"`

	// Timestamp
	CreationTimestamp time.Time `json:"creationTimestamp"`

	// Timestamp
	ActivationTimestamp time.Time `json:"activationTimestamp,omitempty"`

	// Timestamp
	EndTimestamp time.Time `json:"endTimestamp,omitempty"`

	HasRegistered bool `json:"hasRegistered"`

	// ID of Subscription
	SubscriptionId float32 `json:"subscriptionId"`

	Subscription SubscriptionWithRelations `json:"subscription,omitempty"`
}
