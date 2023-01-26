# Reflect Object

**`Reflect`** is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of [proxy handlers](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy). `Reflect` is not a function object, so it's not constructible.

## Description

Unlike most global objects, `Reflect` is not a constructor. You cannot use it with a [`new` operator](/en-US/docs/Web/JavaScript/Reference/Operators/new) or invoke the `Reflect` object as a function. All properties and methods of `Reflect` are static (just like the Math object).

The `Reflect` object provides the following static functions which have the same names as the [proxy handler methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy).

Some of these methods are also the same as corresponding methods on Object, although they do have [some subtle differences](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods) between them.

## Some static methods

- Reflect.apply
  - : Calls a `target` function with arguments as specified by the `argumentsList` parameter. 
  - code example:

    ```js
    console.log(Reflect.apply(Math.floor, undefined, [1.75]));
    // Expected output: 1

    console.log(Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]));
    // Expected output: "hello"

    console.log(Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index);
    // Expected output: 4

    console.log(Reflect.apply(''.charAt, 'ponies', [3]));
    // Expected output: "i"
    ```

- Reflect.construct()
  - : The [`new` operator](/en-US/docs/Web/JavaScript/Reference/Operators/new) as a function. Equivalent to calling `new target(...argumentsList)`. Also provides the option to specify a different prototype.
  - code example:

    ```js
    function func1(a, b, c) {
    this.sum = a + b + c;
    }

    const args = [1, 2, 3];
    const object1 = new func1(...args);
    const object2 = Reflect.construct(func1, args);

    console.log(object2.sum);
    // Expected output: 6

    console.log(object1.sum);
    // Expected output: 6

    ```

- Reflect.defineProperty()
  - : Similar to Object.defineProperty(). Returns a boolean that is `true` if the property was successfully defined.
  - code example:

    ```js
    const object1 = {};

    if (Reflect.defineProperty(object1, 'property1', { value: 42 })) {
      console.log('property1 created!');
      // Expected output: "property1 created!"
    } else {
      console.log('problem creating property1');
    }

    console.log(object1.property1);
    // Expected output: 42

    ```

- Reflect.deleteProperty()
  - : The [`delete` operator](/en-US/docs/Web/JavaScript/Reference/Operators/delete) as a function. Equivalent to calling `delete target[propertyKey]`.
  - code example:

    ```js
    const object1 = {
      property1: 42
    };

    Reflect.deleteProperty(object1, 'property1');

    console.log(object1.property1);
    // Expected output: undefined

    const array1 = [1, 2, 3, 4, 5];
    Reflect.deleteProperty(array1, '3');

    console.log(array1);
    // Expected output: Array [1, 2, 3, undefined, 5]

    ```

- Reflect.getOwnPropertyDescriptor()
  - : Similar to Object.getOwnPropertyDescriptor(). Returns a property descriptor of the given property if it exists on the object, **undefined** otherwise.
  - code example:

    ```js
    const object1 = {
      property1: 42
    };

    console.log(Reflect.getOwnPropertyDescriptor(object1, 'property1').value);
    // Expected output: 42

    console.log(Reflect.getOwnPropertyDescriptor(object1, 'property2'));
    // Expected output: undefined

    console.log(Reflect.getOwnPropertyDescriptor(object1, 'property1').writable);
    // Expected output: true

    ```

- Reflect.getPrototypeOf()
  - : Same as Object.getPrototypeOf()
  - code example:

    ```js
    const object1 = {
      property1: 42
    };

    const proto1 = Reflect.getPrototypeOf(object1);

    console.log(proto1);
    // Expected output: Object {  }

    console.log(Reflect.getPrototypeOf(proto1));
    // Expected output: null

    ```

- Reflect.has()
  - : Returns a boolean indicating whether the target has the property. Either as own or inherited. Works like the [`in` operator](/en-US/docs/Web/JavaScript/Reference/Operators/in) as a function.
  - code example:

    ```js
    const object1 = {
      property1: 42
    };

    console.log(Reflect.has(object1, 'property1'));
    // Expected output: true

    console.log(Reflect.has(object1, 'property2'));
    // Expected output: false

    console.log(Reflect.has(object1, 'toString'));
    // Expected output: true

    ```

- Reflect.isExtensible()
  - : Same as Object.isExtensible() Returns a boolean that is `true` if the target is extensible.
  - code example:

    ```js
    const object1 = {};

    console.log(Reflect.isExtensible(object1));
    // Expected output: true

    Reflect.preventExtensions(object1);

    console.log(Reflect.isExtensible(object1));
    // Expected output: false

    const object2 = Object.seal({});

    console.log(Reflect.isExtensible(object2));
    // Expected output: false

    ```
