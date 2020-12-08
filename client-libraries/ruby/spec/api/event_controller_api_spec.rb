=begin
#Atman IoT

#Atman IoT Server

The version of the OpenAPI document: 3.0.1
Contact: k.khoury@k-ren.gr
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 4.3.1

=end

require 'spec_helper'
require 'json'

# Unit tests for OpenapiClient::EventControllerApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'EventControllerApi' do
  before do
    # run before each test
    @api_instance = OpenapiClient::EventControllerApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of EventControllerApi' do
    it 'should create an instance of EventControllerApi' do
      expect(@api_instance).to be_instance_of(OpenapiClient::EventControllerApi)
    end
  end

  # unit tests for event_controller_create_now
  # @param [Hash] opts the optional parameters
  # @option opts [EventExcludingIdResolvedTimestampResolutionTimestamp] :event_excluding_id_resolved_timestamp_resolution_timestamp 
  # @return [Event]
  describe 'event_controller_create_now test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for event_controller_create_related_dev
  # @param [Hash] opts the optional parameters
  # @option opts [EventRelatedDeviceExcludingId] :event_related_device_excluding_id 
  # @return [EventRelatedDevice]
  describe 'event_controller_create_related_dev test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for event_controller_create_rule
  # @param [Hash] opts the optional parameters
  # @option opts [RequestEventCreateRule] :request_event_create_rule 
  # @return [EventRule]
  describe 'event_controller_create_rule test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for event_controller_create_rule_subscription
  # @param [Hash] opts the optional parameters
  # @option opts [EventRuleSubscriptionExcludingIdLastExecTimestamp] :event_rule_subscription_excluding_id_last_exec_timestamp 
  # @return [EventRuleSubscription]
  describe 'event_controller_create_rule_subscription test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for event_controller_find
  # @param asset_id 
  # @param [Hash] opts the optional parameters
  # @return [Array<ResponseEventAssetEvents>]
  describe 'event_controller_find test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for event_controller_find_unresolved
  # @param asset_id 
  # @param [Hash] opts the optional parameters
  # @return [Array<ResponseEventAssetEvents>]
  describe 'event_controller_find_unresolved test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for event_controller_process_subscriptions
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'event_controller_process_subscriptions test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for event_controller_update_by_id
  # @param id 
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'event_controller_update_by_id test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
