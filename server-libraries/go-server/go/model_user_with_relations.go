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

// UserWithRelations - (Schema options: { includeRelations: true })
type UserWithRelations struct {

	// Automatically generated ID
	Id float32 `json:"id,omitempty"`

	// Username
	Username string `json:"username"`

	// Password
	Passwd string `json:"passwd,omitempty"`

	// Email
	Email string `json:"email"`

	Roles []string `json:"roles,omitempty"`

	// Automatically assigned flag to select if User is virtual or not
	IsVirtual bool `json:"isVirtual"`

	SubscriptionReferenceCode string `json:"subscriptionReferenceCode,omitempty"`

	UserCredentials UserCredentialsWithRelations `json:"userCredentials,omitempty"`
}
