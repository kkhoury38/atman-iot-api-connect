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
from openapi_client.api.asset_group_controller_api import AssetGroupControllerApi  # noqa: E501
from openapi_client.rest import ApiException


class TestAssetGroupControllerApi(unittest.TestCase):
    """AssetGroupControllerApi unit test stubs"""

    def setUp(self):
        self.api = openapi_client.api.asset_group_controller_api.AssetGroupControllerApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_asset_group_controller_create_asset_group(self):
        """Test case for asset_group_controller_create_asset_group

        """
        pass

    def test_asset_group_controller_delete_by_id(self):
        """Test case for asset_group_controller_delete_by_id

        """
        pass

    def test_asset_group_controller_find_user_asset_groups(self):
        """Test case for asset_group_controller_find_user_asset_groups

        """
        pass

    def test_asset_group_controller_update_by_id(self):
        """Test case for asset_group_controller_update_by_id

        """
        pass


if __name__ == '__main__':
    unittest.main()
