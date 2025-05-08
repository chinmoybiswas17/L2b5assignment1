# 1.What are some differences between interfaces and types in Typescript?
There have some differences between interfaces and types in Typescript. Before knowing the differences we have to know what is interfaces and types.

## What Are Interfaces?
TypeScript interfaces define the structure of objects by specifying property types and method signatures, ensuring consistent shapes and enhancing code clarity.


![image](https://github.com/user-attachments/assets/ff2b0261-e6d8-4d23-83c7-0952007b564c)

This simple declaration explain that any object of type User will always have a name and an age, both of the specified types.

## What Are Types?
Types, or type aliases, offer a broader scope. They can represent not only object shapes but also primitive types, unions, intersections, and more.

![image](https://github.com/user-attachments/assets/850d7e6d-1232-4209-8fc7-a33545c3d2d4)


This flexibility allows developers to define complex types that go beyond mere object structures.

## Key Differences

### 1. Declaration Merging

Interface: Supports declaration merging.

![image](https://github.com/user-attachments/assets/8d9c1be4-d3dc-4cf0-beb9-9afe23c77df0)



Type: Does not support declaration merging.

![image](https://github.com/user-attachments/assets/1c424615-562a-44c7-8a82-759e178f98e5)

### 2. Extending and Composition

Both types and interfaces support inheritance or composition—but they do it differently.

Using extends with Interfaces:

![image](https://github.com/user-attachments/assets/8ca6ad3a-0665-4b2d-b08c-5cea34d46109)


Using & with Type Aliases:

![image](https://github.com/user-attachments/assets/15d1bc8e-ea5c-4011-9af7-f64c47d3f6b4)



### 3. Beyond Objects: Flexibility of type
Type aliases shine when you’re dealing with more than just object shapes. They can represent:

1.Union types
2.Tuple types
3.Primitive aliases

![image](https://github.com/user-attachments/assets/c6cdc560-75f2-4c8e-b37d-15ad4aab50e1)


Interfaces, however, are limited to object-like structures.Use type when working with unions, primitives, or tuples.

### 4. Implementing Contracts in Classes

Both interface and type can be used with classes:

![image](https://github.com/user-attachments/assets/3902b5f0-ff5d-45f7-bc34-f6f75ffa1d36)




### 5. Use Cases: When to Choose What
Interfaces are ideal for defining object-oriented structures, especially in scenarios involving classes. Their extensibility and merging capabilities make them suitable for large codebases where contracts need to evolve over time.
Conversely, types excel in defining complex types, such as unions and mapped types. They are perfect for scenarios that require more flexibility and creativity in type definitions.
### 6. Performance: Efficiency Considerations
While both constructs are efficient, interfaces can provide slight performance advantages in larger projects. TypeScript is optimized for interfaces, which can lead to faster compile times when they are used extensively






# What is type inference in TypeScript? Why is it helpful?

## type inference
Type inference is the ability of the compiler to automatically determine the type of a variable based on its value.

![image](https://github.com/user-attachments/assets/2f10909b-19f4-44fc-a0c8-11f60e830d5b)



TypeScript infers that name is a string because you assigned a string to it.

## Why Is Type Inference Helpful?
It is helpful because-
1.Less Code to Write

2.You don’t always need to write out the types.

3.Keeps your code cleaner and shorter.

4.Still Type-Safe

5.Even without explicit types, TypeScript still protects you.

6.You’ll get errors if you try to use the variable incorrectly:

![image](https://github.com/user-attachments/assets/caea8de0-e21c-41dc-a8ba-1df64b8700b2)


7.TypeScript automatically infers the type based on the assigned value.

![image](https://github.com/user-attachments/assets/56d3e3a5-fc3e-48a3-93aa-42a2c494be4b)


8.TypeScript can infer the return type of functions based on the returned value.

![image](https://github.com/user-attachments/assets/26c5fdbe-c7ca-419d-81a9-3cd022aa4af6)

9.TypeScript can infer the type of arrays and objects based on their contents.

![image](https://github.com/user-attachments/assets/1310845b-f608-4b2d-aac3-ebe36dbe1b56)




