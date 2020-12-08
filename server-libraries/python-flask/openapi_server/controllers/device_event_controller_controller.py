import connexion
import six

from openapi_server.models.device_event_with_relations import DeviceEventWithRelations  # noqa: E501
from openapi_server.models.loopback_count import LoopbackCount  # noqa: E501
from openapi_server import util


def device_event_controller_count_not_viewed(asset_id):  # noqa: E501
    """device_event_controller_count_not_viewed

     # noqa: E501

    :param asset_id: 
    :type asset_id: 

    :rtype: LoopbackCount
    """
    return 'do some magic!'


def device_event_controller_find(asset_id, page, count):  # noqa: E501
    """device_event_controller_find

     # noqa: E501

    :param asset_id: 
    :type asset_id: 
    :param page: 
    :type page: 
    :param count: 
    :type count: 

    :rtype: List[DeviceEventWithRelations]
    """
    return 'do some magic!'


def device_event_controller_update_viewed_by(event_id):  # noqa: E501
    """device_event_controller_update_viewed_by

     # noqa: E501

    :param event_id: 
    :type event_id: 

    :rtype: None
    """
    return 'do some magic!'
