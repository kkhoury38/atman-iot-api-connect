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
  # (Schema options: { exclude: [ 'fileFormat' ] })
  class RequestDataLoggerSetupXml2ExcludingFileFormat
    # XML key of list containing the the measurements
    attr_accessor :object_list_key

    attr_accessor :model

    attr_accessor :serial_no

    attr_accessor :channel_name

    attr_accessor :channel_unit

    attr_accessor :value

    attr_accessor :period

    attr_accessor :timestamp

    # Provided Configuration Confirmation. Set to true to save current configuration
    attr_accessor :confirm

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'object_list_key' => :'objectListKey',
        :'model' => :'model',
        :'serial_no' => :'serialNo',
        :'channel_name' => :'channelName',
        :'channel_unit' => :'channelUnit',
        :'value' => :'value',
        :'period' => :'period',
        :'timestamp' => :'timestamp',
        :'confirm' => :'confirm'
      }
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'object_list_key' => :'String',
        :'model' => :'RequestDataLoggerSetupXml2SearchStringStructure',
        :'serial_no' => :'RequestDataLoggerSetupXml2SearchStringStructure',
        :'channel_name' => :'RequestDataLoggerSetupXml2SearchStringStructure',
        :'channel_unit' => :'RequestDataLoggerSetupXml2SearchStringStructure',
        :'value' => :'RequestDataLoggerSetupXml2SearchStringStructure',
        :'period' => :'RequestDataLoggerSetupXml2SearchStringStructure',
        :'timestamp' => :'RequestDataLoggerSetupXml2SearchStringStructure',
        :'confirm' => :'Boolean'
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
        fail ArgumentError, "The input argument (attributes) must be a hash in `OpenapiClient::RequestDataLoggerSetupXml2ExcludingFileFormat` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `OpenapiClient::RequestDataLoggerSetupXml2ExcludingFileFormat`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'object_list_key')
        self.object_list_key = attributes[:'object_list_key']
      end

      if attributes.key?(:'model')
        self.model = attributes[:'model']
      end

      if attributes.key?(:'serial_no')
        self.serial_no = attributes[:'serial_no']
      end

      if attributes.key?(:'channel_name')
        self.channel_name = attributes[:'channel_name']
      end

      if attributes.key?(:'channel_unit')
        self.channel_unit = attributes[:'channel_unit']
      end

      if attributes.key?(:'value')
        self.value = attributes[:'value']
      end

      if attributes.key?(:'period')
        self.period = attributes[:'period']
      end

      if attributes.key?(:'timestamp')
        self.timestamp = attributes[:'timestamp']
      end

      if attributes.key?(:'confirm')
        self.confirm = attributes[:'confirm']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @object_list_key.nil?
        invalid_properties.push('invalid value for "object_list_key", object_list_key cannot be nil.')
      end

      if @model.nil?
        invalid_properties.push('invalid value for "model", model cannot be nil.')
      end

      if @serial_no.nil?
        invalid_properties.push('invalid value for "serial_no", serial_no cannot be nil.')
      end

      if @channel_name.nil?
        invalid_properties.push('invalid value for "channel_name", channel_name cannot be nil.')
      end

      if @channel_unit.nil?
        invalid_properties.push('invalid value for "channel_unit", channel_unit cannot be nil.')
      end

      if @value.nil?
        invalid_properties.push('invalid value for "value", value cannot be nil.')
      end

      if @period.nil?
        invalid_properties.push('invalid value for "period", period cannot be nil.')
      end

      if @timestamp.nil?
        invalid_properties.push('invalid value for "timestamp", timestamp cannot be nil.')
      end

      if @confirm.nil?
        invalid_properties.push('invalid value for "confirm", confirm cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @object_list_key.nil?
      return false if @model.nil?
      return false if @serial_no.nil?
      return false if @channel_name.nil?
      return false if @channel_unit.nil?
      return false if @value.nil?
      return false if @period.nil?
      return false if @timestamp.nil?
      return false if @confirm.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          object_list_key == o.object_list_key &&
          model == o.model &&
          serial_no == o.serial_no &&
          channel_name == o.channel_name &&
          channel_unit == o.channel_unit &&
          value == o.value &&
          period == o.period &&
          timestamp == o.timestamp &&
          confirm == o.confirm
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [object_list_key, model, serial_no, channel_name, channel_unit, value, period, timestamp, confirm].hash
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
