# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.request_virtual_access_right_excluding_asset_group_id import RequestVirtualAccessRightExcludingAssetGroupId  # noqa: E501
from openapi_server.models.request_virtual_access_right_excluding_asset_id import RequestVirtualAccessRightExcludingAssetId  # noqa: E501
from openapi_server.models.virtual_access import VirtualAccess  # noqa: E501
from openapi_server.test import BaseTestCase


class TestVirtualAccessControllerController(BaseTestCase):
    """VirtualAccessControllerController integration test stubs"""

    def test_virtual_access_controller_create_access_by_group(self):
        """Test case for virtual_access_controller_create_access_by_group

        
        """
        request_virtual_access_right_excluding_asset_id = {}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/virtual-access/by-asset-group',
            method='POST',
            headers=headers,
            data=json.dumps(request_virtual_access_right_excluding_asset_id),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_virtual_access_controller_create_access_by_right(self):
        """Test case for virtual_access_controller_create_access_by_right

        
        """
        request_virtual_access_right_excluding_asset_group_id = {}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/virtual-access/by-asset',
            method='POST',
            headers=headers,
            data=json.dumps(request_virtual_access_right_excluding_asset_group_id),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_virtual_access_controller_delete_by_id(self):
        """Test case for virtual_access_controller_delete_by_id

        
        """
        headers = { 
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/virtual-access/{id}'.format(id=3.4),
            method='DELETE',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_virtual_access_controller_find_by_user_id(self):
        """Test case for virtual_access_controller_find_by_user_id

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/virtual-access/by-userId/{user_id}'.format(user_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
