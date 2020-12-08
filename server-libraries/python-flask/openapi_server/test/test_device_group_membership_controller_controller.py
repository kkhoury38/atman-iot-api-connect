# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.device_group_membership import DeviceGroupMembership  # noqa: E501
from openapi_server.models.device_group_membership_excluding_id import DeviceGroupMembershipExcludingId  # noqa: E501
from openapi_server.test import BaseTestCase


class TestDeviceGroupMembershipControllerController(BaseTestCase):
    """DeviceGroupMembershipControllerController integration test stubs"""

    def test_device_group_membership_controller_create(self):
        """Test case for device_group_membership_controller_create

        
        """
        device_group_membership_excluding_id = {}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-group-memberships',
            method='POST',
            headers=headers,
            data=json.dumps(device_group_membership_excluding_id),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_group_membership_controller_delete_by_id(self):
        """Test case for device_group_membership_controller_delete_by_id

        
        """
        headers = { 
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-group-memberships/{id}'.format(id=3.4),
            method='DELETE',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_group_membership_controller_find_by_asset_id(self):
        """Test case for device_group_membership_controller_find_by_asset_id

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-group-memberships/by-asset/{asset_id}'.format(asset_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_group_membership_controller_find_by_device_id(self):
        """Test case for device_group_membership_controller_find_by_device_id

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-group-memberships/by-device/{device_id}'.format(device_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
