import connexion
import six

from openapi_server.models.inline_response200 import InlineResponse200  # noqa: E501
from openapi_server import util


def ping_controller_ping():  # noqa: E501
    """ping_controller_ping

    Ping the server # noqa: E501


    :rtype: InlineResponse200
    """
    return 'do some magic!'
