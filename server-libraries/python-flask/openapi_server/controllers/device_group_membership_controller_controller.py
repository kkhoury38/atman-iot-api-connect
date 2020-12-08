import connexion
import six

from openapi_server.models.device_group_membership import DeviceGroupMembership  # noqa: E501
from openapi_server.models.device_group_membership_excluding_id import DeviceGroupMembershipExcludingId  # noqa: E501
from openapi_server import util


def device_group_membership_controller_create(device_group_membership_excluding_id=None):  # noqa: E501
    """device_group_membership_controller_create

     # noqa: E501

    :param device_group_membership_excluding_id: 
    :type device_group_membership_excluding_id: dict | bytes

    :rtype: DeviceGroupMembership
    """
    if connexion.request.is_json:
        device_group_membership_excluding_id = DeviceGroupMembershipExcludingId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def device_group_membership_controller_delete_by_id(id):  # noqa: E501
    """device_group_membership_controller_delete_by_id

     # noqa: E501

    :param id: 
    :type id: 

    :rtype: None
    """
    return 'do some magic!'


def device_group_membership_controller_find_by_asset_id(asset_id):  # noqa: E501
    """device_group_membership_controller_find_by_asset_id

     # noqa: E501

    :param asset_id: 
    :type asset_id: 

    :rtype: List[DeviceGroupMembership]
    """
    return 'do some magic!'


def device_group_membership_controller_find_by_device_id(device_id):  # noqa: E501
    """device_group_membership_controller_find_by_device_id

     # noqa: E501

    :param device_id: 
    :type device_id: 

    :rtype: List[DeviceGroupMembership]
    """
    return 'do some magic!'
