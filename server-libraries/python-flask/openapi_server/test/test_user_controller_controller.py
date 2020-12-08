# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.token import Token  # noqa: E501
from openapi_server.models.user import User  # noqa: E501
from openapi_server.models.user_excluding_id_email_is_virtual_roles_subscription_reference_code import UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode  # noqa: E501
from openapi_server.models.user_excluding_id_username_is_virtual_roles_subscription_reference_code import UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode  # noqa: E501
from openapi_server.models.user_excluding_passwd_email_roles_is_virtual_subscription_reference_code import UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode  # noqa: E501
from openapi_server.test import BaseTestCase


class TestUserControllerController(BaseTestCase):
    """UserControllerController integration test stubs"""

    def test_user_controller_create(self):
        """Test case for user_controller_create

        
        """
        user_excluding_id_username_is_virtual_roles_subscription_reference_code = {}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        response = self.client.open(
            '/api/user/register/{reference_code}'.format(reference_code='reference_code_example'),
            method='POST',
            headers=headers,
            data=json.dumps(user_excluding_id_username_is_virtual_roles_subscription_reference_code),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_user_controller_create_virtual(self):
        """Test case for user_controller_create_virtual

        
        """
        user_excluding_id_username_is_virtual_roles_subscription_reference_code = {}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/user/register/virtual',
            method='POST',
            headers=headers,
            data=json.dumps(user_excluding_id_username_is_virtual_roles_subscription_reference_code),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_user_controller_delete_virtual_user_by_id(self):
        """Test case for user_controller_delete_virtual_user_by_id

        
        """
        headers = { 
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/users/virtualUser/{id}'.format(id=3.4),
            method='DELETE',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_user_controller_get_virtual_users(self):
        """Test case for user_controller_get_virtual_users

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/user/getVirtualUsers',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_user_controller_login(self):
        """Test case for user_controller_login

        
        """
        user_excluding_id_email_is_virtual_roles_subscription_reference_code = {}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        response = self.client.open(
            '/api/user/login',
            method='POST',
            headers=headers,
            data=json.dumps(user_excluding_id_email_is_virtual_roles_subscription_reference_code),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
