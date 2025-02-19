---
id: lang-collection
title: Collection
---

Collections are ordered lists of values of similar or mixed types (text, number, date, object, boolean, collection, or null).

Collection type variables are managed using [object notation](lang-object.md#syntax-basics).

To access a collection element, you need to pass the element number inside square brackets:

```4d
collectionRef[expression]
```

You can pass any valid expression which returns a positive integer in *expression*. Examples:

```4d
 myCollection[5]  //access to 6th element of the collection
 myCollection[myVar]
```

:::info

Collection elements are numbered from 0.

:::

You can assign a value to a collection element or get a collection element value:

```4d
 myCol[10]="My new element"
 myVar=myCol[0]
```

If you assign an element's index that surpasses the last existing element of the collection, the collection is automatically resized and all new intermediary elements are assigned a null value:

```4d
 var myCol : Collection
 myCol=New collection("A","B")
 myCol[5]="Z"
  //myCol[2]: null
  //myCol[3]: null
  //myCol[4]: null
```

## Initialization 

Collections must have been initialized, for example using the `New collection` command, otherwise trying to read or modify their elements will generate a syntax error.

Example:

```4d
 var colVar : Collection //creation of collection type variable
 colVar=New collection //initialization of the collection and assignment to the variable
```

### Regular or shared collection  

You can create two types of collections:

- regular (non-shared) collections, using the [`New collection`](collection.md#new-collection) command. These collections can be edited without any specific access control but cannot be shared between processes. 
- shared collections, using the [`New shared collection`](collection.md#new-shared-collection) command. These collections can be shared between processes, including preemptive threads. Access to these collections is controlled by [`Use...End use`](lang-shared.md#useend-use) structures. 

For more information, refer to the [Shared objects and collections](lang-shared.md) section.

## Collection functions  

Qodly collection references benefit from dedicated class functions. Collection functions are listed in the [Collection](collection.md) class.

For example:

```4d
newCol=col.copy() //deep copy of col to newCol
col.push(10,100) //add 10 and 100 to the collection
```

Some functions return the original collection after modification, so that you can run the calls in a sequence:

```4d
 col=New collection(5,20)
 col2=col.push(10,100).sort() //col2=[5,10,20,100]
```


### *propertyPath* parameter 


Several functions accept a *propertyPath* as parameter. This parameter stands for:

- either an object property name, for example "lastName"
- or an object property path, i.e. a hierarchical sequence of sub-properties linked with dot characters, for example "employee.children.firstName".

