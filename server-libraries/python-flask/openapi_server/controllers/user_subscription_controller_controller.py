import connexion
import six

from openapi_server.models.code_verification_request import CodeVerificationRequest  # noqa: E501
from openapi_server.models.subscription import Subscription  # noqa: E501
from openapi_server.models.user_subscription import UserSubscription  # noqa: E501
from openapi_server.models.user_subscription_with_relations import UserSubscriptionWithRelations  # noqa: E501
from openapi_server import util


def user_subscription_controller_create(body=None):  # noqa: E501
    """user_subscription_controller_create

     # noqa: E501

    :param body: 
    :type body: 

    :rtype: None
    """
    return 'do some magic!'


def user_subscription_controller_create_user_subscription_by_sub_id(subscription_id):  # noqa: E501
    """user_subscription_controller_create_user_subscription_by_sub_id

     # noqa: E501

    :param subscription_id: 
    :type subscription_id: 

    :rtype: UserSubscription
    """
    return 'do some magic!'


def user_subscription_controller_find_subscriptions_by_category(product):  # noqa: E501
    """user_subscription_controller_find_subscriptions_by_category

     # noqa: E501

    :param product: 
    :type product: str

    :rtype: List[Subscription]
    """
    return 'do some magic!'


def user_subscription_controller_get_by_refference_code(reference_code):  # noqa: E501
    """user_subscription_controller_get_by_refference_code

     # noqa: E501

    :param reference_code: 
    :type reference_code: str

    :rtype: UserSubscriptionWithRelations
    """
    return 'do some magic!'


def user_subscription_controller_verify_code(code_verification_request=None):  # noqa: E501
    """user_subscription_controller_verify_code

     # noqa: E501

    :param code_verification_request: 
    :type code_verification_request: dict | bytes

    :rtype: UserSubscription
    """
    if connexion.request.is_json:
        code_verification_request = CodeVerificationRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
