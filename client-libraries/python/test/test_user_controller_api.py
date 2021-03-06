# coding: utf-8

"""
    Atman IoT

    Atman IoT Server  # noqa: E501

    The version of the OpenAPI document: 3.0.1
    Contact: k.khoury@k-ren.gr
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest

import openapi_client
from openapi_client.api.user_controller_api import UserControllerApi  # noqa: E501
from openapi_client.rest import ApiException


class TestUserControllerApi(unittest.TestCase):
    """UserControllerApi unit test stubs"""

    def setUp(self):
        self.api = openapi_client.api.user_controller_api.UserControllerApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_user_controller_create(self):
        """Test case for user_controller_create

        """
        pass

    def test_user_controller_create_virtual(self):
        """Test case for user_controller_create_virtual

        """
        pass

    def test_user_controller_delete_virtual_user_by_id(self):
        """Test case for user_controller_delete_virtual_user_by_id

        """
        pass

    def test_user_controller_get_virtual_users(self):
        """Test case for user_controller_get_virtual_users

        """
        pass

    def test_user_controller_login(self):
        """Test case for user_controller_login

        """
        pass


if __name__ == '__main__':
    unittest.main()
