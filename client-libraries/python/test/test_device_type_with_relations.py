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
from openapi_client.models.device_type_with_relations import DeviceTypeWithRelations  # noqa: E501
from openapi_client.rest import ApiException

class TestDeviceTypeWithRelations(unittest.TestCase):
    """DeviceTypeWithRelations unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test DeviceTypeWithRelations
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.device_type_with_relations.DeviceTypeWithRelations()  # noqa: E501
        if include_optional :
            return DeviceTypeWithRelations(
                id = 1.337, 
                model = '0', 
                description = '0', 
                manufacturer = '0', 
                category = '0', 
                channel_types = [
                    openapi_client.models.channel_type_with_relations.ChannelTypeWithRelations(
                        id = 1.337, 
                        name = '0', 
                        category = '0', 
                        description = '0', 
                        unit = '0', 
                        channel_type = '0', 
                        device_type_id = 1.337, 
                        device_type = openapi_client.models.device_type_with_relations.DeviceTypeWithRelations(
                            id = 1.337, 
                            model = '0', 
                            description = '0', 
                            manufacturer = '0', 
                            category = '0', ), )
                    ]
            )
        else :
            return DeviceTypeWithRelations(
                model = '0',
                manufacturer = '0',
        )

    def testDeviceTypeWithRelations(self):
        """Test DeviceTypeWithRelations"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
