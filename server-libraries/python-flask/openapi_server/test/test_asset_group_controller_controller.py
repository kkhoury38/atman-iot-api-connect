# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.asset_group import AssetGroup  # noqa: E501
from openapi_server.models.asset_group_excluding_id_user_id import AssetGroupExcludingIdUserId  # noqa: E501
from openapi_server.test import BaseTestCase


class TestAssetGroupControllerController(BaseTestCase):
    """AssetGroupControllerController integration test stubs"""

    def test_asset_group_controller_create_asset_group(self):
        """Test case for asset_group_controller_create_asset_group

        
        """
        asset_group_excluding_id_user_id = {}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/asset-group/user',
            method='POST',
            headers=headers,
            data=json.dumps(asset_group_excluding_id_user_id),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_asset_group_controller_delete_by_id(self):
        """Test case for asset_group_controller_delete_by_id

        
        """
        headers = { 
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/asset-group/{id}'.format(id=3.4),
            method='DELETE',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_asset_group_controller_find_user_asset_groups(self):
        """Test case for asset_group_controller_find_user_asset_groups

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/asset-groups/user',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_asset_group_controller_update_by_id(self):
        """Test case for asset_group_controller_update_by_id

        
        """
        asset_group_excluding_id_user_id = {}
        headers = { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/asset-group/{id}'.format(id=3.4),
            method='PATCH',
            headers=headers,
            data=json.dumps(asset_group_excluding_id_user_id),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
