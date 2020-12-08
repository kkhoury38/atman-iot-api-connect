# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.event import Event  # noqa: E501
from openapi_server.models.event_excluding_id_resolved_timestamp_resolution_timestamp import EventExcludingIdResolvedTimestampResolutionTimestamp  # noqa: E501
from openapi_server.models.event_related_device import EventRelatedDevice  # noqa: E501
from openapi_server.models.event_related_device_excluding_id import EventRelatedDeviceExcludingId  # noqa: E501
from openapi_server.models.event_rule import EventRule  # noqa: E501
from openapi_server.models.event_rule_subscription import EventRuleSubscription  # noqa: E501
from openapi_server.models.event_rule_subscription_excluding_id_last_exec_timestamp import EventRuleSubscriptionExcludingIdLastExecTimestamp  # noqa: E501
from openapi_server.models.request_event_create_rule import RequestEventCreateRule  # noqa: E501
from openapi_server.models.response_event_asset_events import ResponseEventAssetEvents  # noqa: E501
from openapi_server.test import BaseTestCase


class TestEventControllerController(BaseTestCase):
    """EventControllerController integration test stubs"""

    def test_event_controller_create_now(self):
        """Test case for event_controller_create_now

        
        """
        event_excluding_id_resolved_timestamp_resolution_timestamp = {}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/event',
            method='POST',
            headers=headers,
            data=json.dumps(event_excluding_id_resolved_timestamp_resolution_timestamp),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_event_controller_create_related_dev(self):
        """Test case for event_controller_create_related_dev

        
        """
        event_related_device_excluding_id = {}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/event/related-device',
            method='POST',
            headers=headers,
            data=json.dumps(event_related_device_excluding_id),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_event_controller_create_rule(self):
        """Test case for event_controller_create_rule

        
        """
        request_event_create_rule = {
  "actionParameters" : "{}",
  "scope" : [ {
    "channelTypeCategory" : "channelTypeCategory",
    "deviceTypeCategory" : "deviceTypeCategory"
  }, {
    "channelTypeCategory" : "channelTypeCategory",
    "deviceTypeCategory" : "deviceTypeCategory"
  } ],
  "description" : "description",
  "action" : "action"
}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/event/rule',
            method='POST',
            headers=headers,
            data=json.dumps(request_event_create_rule),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_event_controller_create_rule_subscription(self):
        """Test case for event_controller_create_rule_subscription

        
        """
        event_rule_subscription_excluding_id_last_exec_timestamp = {}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/event/rule/subscription',
            method='POST',
            headers=headers,
            data=json.dumps(event_rule_subscription_excluding_id_last_exec_timestamp),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_event_controller_find(self):
        """Test case for event_controller_find

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/events/all/{asset_id}'.format(asset_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_event_controller_find_unresolved(self):
        """Test case for event_controller_find_unresolved

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/events/unresolved/{asset_id}'.format(asset_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_event_controller_process_subscriptions(self):
        """Test case for event_controller_process_subscriptions

        
        """
        headers = { 
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/event/process',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_event_controller_update_by_id(self):
        """Test case for event_controller_update_by_id

        
        """
        headers = { 
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/event/resolve/{id}'.format(id=3.4),
            method='PATCH',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
