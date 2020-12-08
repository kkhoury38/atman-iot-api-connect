# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.code_verification_request import CodeVerificationRequest  # noqa: E501
from openapi_server.models.subscription import Subscription  # noqa: E501
from openapi_server.models.user_subscription import UserSubscription  # noqa: E501
from openapi_server.models.user_subscription_with_relations import UserSubscriptionWithRelations  # noqa: E501
from openapi_server.test import BaseTestCase


class TestUserSubscriptionControllerController(BaseTestCase):
    """UserSubscriptionControllerController integration test stubs"""

    def test_user_subscription_controller_create(self):
        """Test case for user_subscription_controller_create

        
        """
        body = None
        headers = { 
            'Content-Type': 'application/json',
        }
        response = self.client.open(
            '/api/user-subscriptions/paypal/callback',
            method='POST',
            headers=headers,
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_user_subscription_controller_create_user_subscription_by_sub_id(self):
        """Test case for user_subscription_controller_create_user_subscription_by_sub_id

        
        """
        headers = { 
            'Accept': 'application/json',
        }
        response = self.client.open(
            '/api/user-subscription/get-new/{subscription_id}'.format(subscription_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_user_subscription_controller_find_subscriptions_by_category(self):
        """Test case for user_subscription_controller_find_subscriptions_by_category

        
        """
        headers = { 
            'Accept': 'application/json',
        }
        response = self.client.open(
            '/api/user-subscription/subscriptions/{product}'.format(product='product_example'),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_user_subscription_controller_get_by_refference_code(self):
        """Test case for user_subscription_controller_get_by_refference_code

        
        """
        headers = { 
            'Accept': 'application/json',
        }
        response = self.client.open(
            '/api/user-subscription/get-by-reference-code/{reference_code}'.format(reference_code='reference_code_example'),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_user_subscription_controller_verify_code(self):
        """Test case for user_subscription_controller_verify_code

        
        """
        code_verification_request = {
  "apiKey" : "apiKey",
  "userEmail" : "userEmail",
  "referenceCode" : "referenceCode"
}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        response = self.client.open(
            '/api/user-subscriptions/verify-reference-code',
            method='POST',
            headers=headers,
            data=json.dumps(code_verification_request),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
