# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.dashboard_element import DashboardElement  # noqa: E501
from openapi_server.models.dashboard_element_with_scope import DashboardElementWithScope  # noqa: E501
from openapi_server.models.new_dashboard_element import NewDashboardElement  # noqa: E501
from openapi_server.test import BaseTestCase


class TestDashboardElementControllerController(BaseTestCase):
    """DashboardElementControllerController integration test stubs"""

    def test_dashboard_element_controller_create(self):
        """Test case for dashboard_element_controller_create

        
        """
        new_dashboard_element = {
  "timeWindow" : 1.4658129805029452,
  "deviceCategory" : "deviceCategory",
  "assetId" : 0.8008281904610115,
  "channelCategory" : "channelCategory",
  "location" : "location",
  "groupBy" : "groupBy",
  "title" : "title",
  "userId" : 6.027456183070403,
  "elementType" : "elementType",
  "operation" : "operation",
  "yLabel" : "yLabel",
  "xLabel" : "xLabel"
}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/dashboard-element',
            method='POST',
            headers=headers,
            data=json.dumps(new_dashboard_element),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_dashboard_element_controller_delete_by_id(self):
        """Test case for dashboard_element_controller_delete_by_id

        
        """
        headers = { 
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/dashboard-element/{id}'.format(id=3.4),
            method='DELETE',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_dashboard_element_controller_find_by_user_id_asset_id_location(self):
        """Test case for dashboard_element_controller_find_by_user_id_asset_id_location

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/dashboard-elements/asset-id/{asset_id}/user-id/{user_id}/location/{location}'.format(asset_id=3.4, user_id=3.4, location='location_example'),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_dashboard_element_controller_move_element_down(self):
        """Test case for dashboard_element_controller_move_element_down

        
        """
        headers = { 
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/dashboard-element/{id}/move-down'.format(id=3.4),
            method='PATCH',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_dashboard_element_controller_move_element_up(self):
        """Test case for dashboard_element_controller_move_element_up

        
        """
        headers = { 
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/dashboard-element/{id}/move-up'.format(id=3.4),
            method='PATCH',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
