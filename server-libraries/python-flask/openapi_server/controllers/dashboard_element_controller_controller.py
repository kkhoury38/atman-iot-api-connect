import connexion
import six

from openapi_server.models.dashboard_element import DashboardElement  # noqa: E501
from openapi_server.models.dashboard_element_with_scope import DashboardElementWithScope  # noqa: E501
from openapi_server.models.new_dashboard_element import NewDashboardElement  # noqa: E501
from openapi_server import util


def dashboard_element_controller_create(new_dashboard_element=None):  # noqa: E501
    """dashboard_element_controller_create

     # noqa: E501

    :param new_dashboard_element: 
    :type new_dashboard_element: dict | bytes

    :rtype: DashboardElement
    """
    if connexion.request.is_json:
        new_dashboard_element = NewDashboardElement.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def dashboard_element_controller_delete_by_id(id):  # noqa: E501
    """dashboard_element_controller_delete_by_id

     # noqa: E501

    :param id: 
    :type id: 

    :rtype: None
    """
    return 'do some magic!'


def dashboard_element_controller_find_by_user_id_asset_id_location(asset_id, user_id, location):  # noqa: E501
    """dashboard_element_controller_find_by_user_id_asset_id_location

     # noqa: E501

    :param asset_id: 
    :type asset_id: 
    :param user_id: 
    :type user_id: 
    :param location: 
    :type location: str

    :rtype: List[DashboardElementWithScope]
    """
    return 'do some magic!'


def dashboard_element_controller_move_element_down(id):  # noqa: E501
    """dashboard_element_controller_move_element_down

     # noqa: E501

    :param id: 
    :type id: 

    :rtype: None
    """
    return 'do some magic!'


def dashboard_element_controller_move_element_up(id):  # noqa: E501
    """dashboard_element_controller_move_element_up

     # noqa: E501

    :param id: 
    :type id: 

    :rtype: None
    """
    return 'do some magic!'
