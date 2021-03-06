/**
 * Atman IoT
 * Atman IoT Server
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: k.khoury@k-ren.gr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AtmanIoT);
  }
}(this, function(expect, AtmanIoT) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AtmanIoT.SubscriptionWithRelations();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SubscriptionWithRelations', function() {
    it('should create an instance of SubscriptionWithRelations', function() {
      // uncomment below and update the code to test SubscriptionWithRelations
      //var instane = new AtmanIoT.SubscriptionWithRelations();
      //expect(instance).to.be.a(AtmanIoT.SubscriptionWithRelations);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new AtmanIoT.SubscriptionWithRelations();
      //expect(instance).to.be();
    });

    it('should have the property product (base name: "product")', function() {
      // uncomment below and update the code to test the property product
      //var instane = new AtmanIoT.SubscriptionWithRelations();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new AtmanIoT.SubscriptionWithRelations();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new AtmanIoT.SubscriptionWithRelations();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instane = new AtmanIoT.SubscriptionWithRelations();
      //expect(instance).to.be();
    });

    it('should have the property monthlyPrice (base name: "monthlyPrice")', function() {
      // uncomment below and update the code to test the property monthlyPrice
      //var instane = new AtmanIoT.SubscriptionWithRelations();
      //expect(instance).to.be();
    });

    it('should have the property yearlyPrice (base name: "yearlyPrice")', function() {
      // uncomment below and update the code to test the property yearlyPrice
      //var instane = new AtmanIoT.SubscriptionWithRelations();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new AtmanIoT.SubscriptionWithRelations();
      //expect(instance).to.be();
    });

    it('should have the property userSubscriptions (base name: "userSubscriptions")', function() {
      // uncomment below and update the code to test the property userSubscriptions
      //var instane = new AtmanIoT.SubscriptionWithRelations();
      //expect(instance).to.be();
    });

  });

}));
