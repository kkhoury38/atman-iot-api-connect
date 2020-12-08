import connexion
import six

from openapi_server.models.event import Event  # noqa: E501
from openapi_server.models.event_excluding_id_resolved_timestamp_resolution_timestamp import EventExcludingIdResolvedTimestampResolutionTimestamp  # noqa: E501
from openapi_server.models.event_related_device import EventRelatedDevice  # noqa: E501
from openapi_server.models.event_related_device_excluding_id import EventRelatedDeviceExcludingId  # noqa: E501
from openapi_server.models.event_rule import EventRule  # noqa: E501
from openapi_server.models.event_rule_subscription import EventRuleSubscription  # noqa: E501
from openapi_server.models.event_rule_subscription_excluding_id_last_exec_timestamp import EventRuleSubscriptionExcludingIdLastExecTimestamp  # noqa: E501
from openapi_server.models.request_event_create_rule import RequestEventCreateRule  # noqa: E501
from openapi_server.models.response_event_asset_events import ResponseEventAssetEvents  # noqa: E501
from openapi_server import util


def event_controller_create_now(event_excluding_id_resolved_timestamp_resolution_timestamp=None):  # noqa: E501
    """event_controller_create_now

     # noqa: E501

    :param event_excluding_id_resolved_timestamp_resolution_timestamp: 
    :type event_excluding_id_resolved_timestamp_resolution_timestamp: dict | bytes

    :rtype: Event
    """
    if connexion.request.is_json:
        event_excluding_id_resolved_timestamp_resolution_timestamp = EventExcludingIdResolvedTimestampResolutionTimestamp.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def event_controller_create_related_dev(event_related_device_excluding_id=None):  # noqa: E501
    """event_controller_create_related_dev

     # noqa: E501

    :param event_related_device_excluding_id: 
    :type event_related_device_excluding_id: dict | bytes

    :rtype: EventRelatedDevice
    """
    if connexion.request.is_json:
        event_related_device_excluding_id = EventRelatedDeviceExcludingId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def event_controller_create_rule(request_event_create_rule=None):  # noqa: E501
    """event_controller_create_rule

     # noqa: E501

    :param request_event_create_rule: 
    :type request_event_create_rule: dict | bytes

    :rtype: EventRule
    """
    if connexion.request.is_json:
        request_event_create_rule = RequestEventCreateRule.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def event_controller_create_rule_subscription(event_rule_subscription_excluding_id_last_exec_timestamp=None):  # noqa: E501
    """event_controller_create_rule_subscription

     # noqa: E501

    :param event_rule_subscription_excluding_id_last_exec_timestamp: 
    :type event_rule_subscription_excluding_id_last_exec_timestamp: dict | bytes

    :rtype: EventRuleSubscription
    """
    if connexion.request.is_json:
        event_rule_subscription_excluding_id_last_exec_timestamp = EventRuleSubscriptionExcludingIdLastExecTimestamp.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def event_controller_find(asset_id):  # noqa: E501
    """event_controller_find

     # noqa: E501

    :param asset_id: 
    :type asset_id: 

    :rtype: List[ResponseEventAssetEvents]
    """
    return 'do some magic!'


def event_controller_find_unresolved(asset_id):  # noqa: E501
    """event_controller_find_unresolved

     # noqa: E501

    :param asset_id: 
    :type asset_id: 

    :rtype: List[ResponseEventAssetEvents]
    """
    return 'do some magic!'


def event_controller_process_subscriptions():  # noqa: E501
    """event_controller_process_subscriptions

     # noqa: E501


    :rtype: None
    """
    return 'do some magic!'


def event_controller_update_by_id(id):  # noqa: E501
    """event_controller_update_by_id

     # noqa: E501

    :param id: 
    :type id: 

    :rtype: None
    """
    return 'do some magic!'
