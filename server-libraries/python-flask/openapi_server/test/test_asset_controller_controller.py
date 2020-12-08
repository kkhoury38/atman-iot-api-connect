# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.asset import Asset  # noqa: E501
from openapi_server.models.asset_excluding_id import AssetExcludingId  # noqa: E501
from openapi_server.models.asset_excluding_id_asset_group_id import AssetExcludingIdAssetGroupId  # noqa: E501
from openapi_server.test import BaseTestCase


class TestAssetControllerController(BaseTestCase):
    """AssetControllerController integration test stubs"""

    def test_asset_controller_create(self):
        """Test case for asset_controller_create

        
        """
        asset_excluding_id = {}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/asset',
            method='POST',
            headers=headers,
            data=json.dumps(asset_excluding_id),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_asset_controller_delete_by_id(self):
        """Test case for asset_controller_delete_by_id

        
        """
        headers = { 
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/asset/{id}'.format(id=3.4),
            method='DELETE',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_asset_controller_find(self):
        """Test case for asset_controller_find

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/assets/{asset_group_id}'.format(asset_group_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_asset_controller_find_by_name(self):
        """Test case for asset_controller_find_by_name

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/asset/by-name/{asset_name}'.format(asset_name='asset_name_example'),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_asset_controller_find_by_user_id(self):
        """Test case for asset_controller_find_by_user_id

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/assets/by-user/{user_id}'.format(user_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_asset_controller_update_by_id(self):
        """Test case for asset_controller_update_by_id

        
        """
        asset_excluding_id_asset_group_id = {}
        headers = { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/asset/{id}'.format(id=3.4),
            method='PATCH',
            headers=headers,
            data=json.dumps(asset_excluding_id_asset_group_id),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
