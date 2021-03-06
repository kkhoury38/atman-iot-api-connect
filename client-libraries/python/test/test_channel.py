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
from openapi_client.models.channel import Channel  # noqa: E501
from openapi_client.rest import ApiException

class TestChannel(unittest.TestCase):
    """Channel unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test Channel
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.channel.Channel()  # noqa: E501
        if include_optional :
            return Channel(
                id = 1.337, 
                monitor = True, 
                last_timestamp = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                status = '0', 
                device_id = 1.337, 
                channel_type_id = 1.337
            )
        else :
            return Channel(
                monitor = True,
                device_id = 1.337,
                channel_type_id = 1.337,
        )

    def testChannel(self):
        """Test Channel"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
