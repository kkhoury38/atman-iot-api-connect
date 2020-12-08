=begin
#Atman IoT

#Atman IoT Server

The version of the OpenAPI document: 3.0.1
Contact: k.khoury@k-ren.gr
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 4.3.1

=end

require 'date'

module OpenapiClient
  # (Schema options: { includeRelations: true })
  class ChannelWithRelations
    # Automatically generated ID
    attr_accessor :id

    # Enable channel monitoring - data recording - by setting to true
    attr_accessor :monitor

    # Timestamp
    attr_accessor :last_timestamp

    # Channel Status
    attr_accessor :status

    # ID of Device that Channel belongs to
    attr_accessor :device_id

    # ID of ChannelType associated with Channel
    attr_accessor :channel_type_id

    attr_accessor :device

    attr_accessor :channel_type

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'id' => :'id',
        :'monitor' => :'monitor',
        :'last_timestamp' => :'lastTimestamp',
        :'status' => :'status',
        :'device_id' => :'deviceId',
        :'channel_type_id' => :'channelTypeId',
        :'device' => :'device',
        :'channel_type' => :'channelType'
      }
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'id' => :'Float',
        :'monitor' => :'Boolean',
        :'last_timestamp' => :'DateTime',
        :'status' => :'String',
        :'device_id' => :'Float',
        :'channel_type_id' => :'Float',
        :'device' => :'DeviceWithRelations',
        :'channel_type' => :'ChannelTypeWithRelations'
      }
    end

    # List of attributes with nullable: true
    def self.openapi_nullable
      Set.new([
      ])
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      if (!attributes.is_a?(Hash))
        fail ArgumentError, "The input argument (attributes) must be a hash in `OpenapiClient::ChannelWithRelations` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `OpenapiClient::ChannelWithRelations`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.key?(:'monitor')
        self.monitor = attributes[:'monitor']
      end

      if attributes.key?(:'last_timestamp')
        self.last_timestamp = attributes[:'last_timestamp']
      end

      if attributes.key?(:'status')
        self.status = attributes[:'status']
      end

      if attributes.key?(:'device_id')
        self.device_id = attributes[:'device_id']
      end

      if attributes.key?(:'channel_type_id')
        self.channel_type_id = attributes[:'channel_type_id']
      end

      if attributes.key?(:'device')
        self.device = attributes[:'device']
      end

      if attributes.key?(:'channel_type')
        self.channel_type = attributes[:'channel_type']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @monitor.nil?
        invalid_properties.push('invalid value for "monitor", monitor cannot be nil.')
      end

      if @device_id.nil?
        invalid_properties.push('invalid value for "device_id", device_id cannot be nil.')
      end

      if @channel_type_id.nil?
        invalid_properties.push('invalid value for "channel_type_id", channel_type_id cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @monitor.nil?
      return false if @device_id.nil?
      return false if @channel_type_id.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          id == o.id &&
          monitor == o.monitor &&
          last_timestamp == o.last_timestamp &&
          status == o.status &&
          device_id == o.device_id &&
          channel_type_id == o.channel_type_id &&
          device == o.device &&
          channel_type == o.channel_type
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [id, monitor, last_timestamp, status, device_id, channel_type_id, device, channel_type].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def self.build_from_hash(attributes)
      new.build_from_hash(attributes)
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      return nil unless attributes.is_a?(Hash)
      self.class.openapi_types.each_pair do |key, type|
        if type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the attribute
          # is documented as an array but the input is not
          if attributes[self.class.attribute_map[key]].is_a?(Array)
            self.send("#{key}=", attributes[self.class.attribute_map[key]].map { |v| _deserialize($1, v) })
          end
        elsif !attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", _deserialize(type, attributes[self.class.attribute_map[key]]))
        end # or else data not found in attributes(hash), not an issue as the data can be optional
      end

      self
    end

    # Deserializes the data based on type
    # @param string type Data type
    # @param string value Value to be deserialized
    # @return [Object] Deserialized data
    def _deserialize(type, value)
      case type.to_sym
      when :DateTime
        DateTime.parse(value)
      when :Date
        Date.parse(value)
      when :String
        value.to_s
      when :Integer
        value.to_i
      when :Float
        value.to_f
      when :Boolean
        if value.to_s =~ /\A(true|t|yes|y|1)\z/i
          true
        else
          false
        end
      when :Object
        # generic object (usually a Hash), return directly
        value
      when /\AArray<(?<inner_type>.+)>\z/
        inner_type = Regexp.last_match[:inner_type]
        value.map { |v| _deserialize(inner_type, v) }
      when /\AHash<(?<k_type>.+?), (?<v_type>.+)>\z/
        k_type = Regexp.last_match[:k_type]
        v_type = Regexp.last_match[:v_type]
        {}.tap do |hash|
          value.each do |k, v|
            hash[_deserialize(k_type, k)] = _deserialize(v_type, v)
          end
        end
      else # model
        OpenapiClient.const_get(type).build_from_hash(value)
      end
    end

    # Returns the string representation of the object
    # @return [String] String presentation of the object
    def to_s
      to_hash.to_s
    end

    # to_body is an alias to to_hash (backward compatibility)
    # @return [Hash] Returns the object in the form of hash
    def to_body
      to_hash
    end

    # Returns the object in the form of hash
    # @return [Hash] Returns the object in the form of hash
    def to_hash
      hash = {}
      self.class.attribute_map.each_pair do |attr, param|
        value = self.send(attr)
        if value.nil?
          is_nullable = self.class.openapi_nullable.include?(attr)
          next if !is_nullable || (is_nullable && !instance_variable_defined?(:"@#{attr}"))
        end
        
        hash[param] = _to_hash(value)
      end
      hash
    end

    # Outputs non-array value in the form of hash
    # For object, use to_hash. Otherwise, just return the value
    # @param [Object] value Any valid value
    # @return [Hash] Returns the value in the form of hash
    def _to_hash(value)
      if value.is_a?(Array)
        value.compact.map { |v| _to_hash(v) }
      elsif value.is_a?(Hash)
        {}.tap do |hash|
          value.each { |k, v| hash[k] = _to_hash(v) }
        end
      elsif value.respond_to? :to_hash
        value.to_hash
      else
        value
      end
    end
  end
end
