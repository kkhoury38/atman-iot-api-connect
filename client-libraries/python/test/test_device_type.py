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
from openapi_client.models.device_type import DeviceType  # noqa: E501
from openapi_client.rest import ApiException

class TestDeviceType(unittest.TestCase):
    """DeviceType unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test DeviceType
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.device_type.DeviceType()  # noqa: E501
        if include_optional :
            return DeviceType(
                id = 1.337, 
                model = '0', 
                description = '0', 
                manufacturer = '0', 
                category = '0'
            )
        else :
            return DeviceType(
                model = '0',
                manufacturer = '0',
        )

    def testDeviceType(self):
        """Test DeviceType"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
