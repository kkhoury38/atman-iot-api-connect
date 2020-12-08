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
import datetime

import openapi_client
from openapi_client.models.user_excluding_id_username_is_virtual_roles_subscription_reference_code import UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode  # noqa: E501
from openapi_client.rest import ApiException

class TestUserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode(unittest.TestCase):
    """UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.user_excluding_id_username_is_virtual_roles_subscription_reference_code.UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode()  # noqa: E501
        if include_optional :
            return UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode(
                passwd = '0', 
                email = '0'
            )
        else :
            return UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode(
                email = '0',
        )

    def testUserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode(self):
        """Test UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
