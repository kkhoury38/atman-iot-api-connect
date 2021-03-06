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
from openapi_client.models.asset import Asset  # noqa: E501
from openapi_client.rest import ApiException

class TestAsset(unittest.TestCase):
    """Asset unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test Asset
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.asset.Asset()  # noqa: E501
        if include_optional :
            return Asset(
                id = 1.337, 
                name = '0', 
                description = '0', 
                asset_group_id = 1.337
            )
        else :
            return Asset(
                asset_group_id = 1.337,
        )

    def testAsset(self):
        """Test Asset"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
