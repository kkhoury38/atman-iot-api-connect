import connexion
import six

from openapi_server.models.request_virtual_access_right_excluding_asset_group_id import RequestVirtualAccessRightExcludingAssetGroupId  # noqa: E501
from openapi_server.models.request_virtual_access_right_excluding_asset_id import RequestVirtualAccessRightExcludingAssetId  # noqa: E501
from openapi_server.models.virtual_access import VirtualAccess  # noqa: E501
from openapi_server import util


def virtual_access_controller_create_access_by_group(request_virtual_access_right_excluding_asset_id=None):  # noqa: E501
    """virtual_access_controller_create_access_by_group

     # noqa: E501

    :param request_virtual_access_right_excluding_asset_id: 
    :type request_virtual_access_right_excluding_asset_id: dict | bytes

    :rtype: List[VirtualAccess]
    """
    if connexion.request.is_json:
        request_virtual_access_right_excluding_asset_id = RequestVirtualAccessRightExcludingAssetId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def virtual_access_controller_create_access_by_right(request_virtual_access_right_excluding_asset_group_id=None):  # noqa: E501
    """virtual_access_controller_create_access_by_right

     # noqa: E501

    :param request_virtual_access_right_excluding_asset_group_id: 
    :type request_virtual_access_right_excluding_asset_group_id: dict | bytes

    :rtype: VirtualAccess
    """
    if connexion.request.is_json:
        request_virtual_access_right_excluding_asset_group_id = RequestVirtualAccessRightExcludingAssetGroupId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def virtual_access_controller_delete_by_id(id):  # noqa: E501
    """virtual_access_controller_delete_by_id

     # noqa: E501

    :param id: 
    :type id: 

    :rtype: None
    """
    return 'do some magic!'


def virtual_access_controller_find_by_user_id(user_id):  # noqa: E501
    """virtual_access_controller_find_by_user_id

     # noqa: E501

    :param user_id: 
    :type user_id: 

    :rtype: List[VirtualAccess]
    """
    return 'do some magic!'
