# 1.What are some differences between interfaces and types in Typescript?
There have some differences between interfaces and types in Typescript. Before knowing the differences we have to know what is interfaces and types.

## What Are Interfaces?
TypeScript interfaces define the structure of objects by specifying property types and method signatures, ensuring consistent shapes and enhancing code clarity.


![Screenshot_42](https://github.com/user-attachments/assets/c34671b3-be82-42ba-af3e-d39723fac25d)

This simple declaration explain that any object of type User will always have a name and an age, both of the specified types.

## What Are Types?
Types, or type aliases, offer a broader scope. They can represent not only object shapes but also primitive types, unions, intersections, and more.

![image](https://github.com/user-attachments/assets/88a37949-62aa-42bc-8986-993ee577645a)

This flexibility allows developers to define complex types that go beyond mere object structures.

## Key Differences

### 1. Declaration Merging

Interface: Supports declaration merging.

![image](https://github.com/user-attachments/assets/271b7221-19c0-43cf-8193-30ef22a61069)


Type: Does not support declaration merging.

![image](https://github.com/user-attachments/assets/54610dd1-23a6-4d6c-b00e-18f139cf6720)
### 2. Extending and Composition

Both types and interfaces support inheritance or composition—but they do it differently.

Using extends with Interfaces:

![image](https://github.com/user-attachments/assets/ed6a1a18-f0d1-4c26-8177-1b53b48972dc)

Using & with Type Aliases:

![image](https://github.com/user-attachments/assets/47f04dfb-7fe9-4a9b-b605-b0d3a02b93f8)


### 3. Beyond Objects: Flexibility of type
Type aliases shine when you’re dealing with more than just object shapes. They can represent:

1.Union types
2.Tuple types
3.Primitive aliases

![image](https://github.com/user-attachments/assets/90bf8b7d-16dd-4eee-852f-e54e9c0d3ee0)

Interfaces, however, are limited to object-like structures.Use type when working with unions, primitives, or tuples.

### 4. Implementing Contracts in Classes

Both interface and type can be used with classes:

![image](https://github.com/user-attachments/assets/05025b42-2895-4065-a749-fb3e515fe3d2)



### 5. Use Cases: When to Choose What
Interfaces are ideal for defining object-oriented structures, especially in scenarios involving classes. Their extensibility and merging capabilities make them suitable for large codebases where contracts need to evolve over time.
Conversely, types excel in defining complex types, such as unions and mapped types. They are perfect for scenarios that require more flexibility and creativity in type definitions.
### 6. Performance: Efficiency Considerations
While both constructs are efficient, interfaces can provide slight performance advantages in larger projects. TypeScript is optimized for interfaces, which can lead to faster compile times when they are used extensively





