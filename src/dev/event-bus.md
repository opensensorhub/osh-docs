# Event Bus

The **Event Bus** has been fully re-implemented in OSH v2 to make use of [Reactive Streams](https://www.reactive-streams.org/) patterns. Reactive streams are now part of the JDK since the Flow API was introduced in Java 9.

This new default implementation allows for highly concurrent event deliveries with less OSH specific code. Indeed, OSH builds on Java 9 [**SubmissionPublisher**](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/concurrent/SubmissionPublisher.html), and adds a mechanism for components to retrieve a publisher instance and to subscribe to one or more publishers with or without a filter. 
 

## Event Publishers

Any OSH component can retrieve a publisher instance using a unique 'event source ID'. The publisher provides a channel for the component to publish events into, and deliver them to other components that have subscribed to it.

== Event Queues Diagram ==


### Publisher Groups

Event producer groups allow multiple event producers to publish their events under a common group, meaning that all events will be made available to a single publisher instance, with the intent of saving memory.

This is useful for example for large sensor networks where it would be inneficient to treat each sensor as a separate publisher. Rather, p


## Event Subscribers

OSH components can subscribe to events by calling the event-bus interface using a powerful filtering language.

Event filters allow one to select:

- One or more datasources (procedure, datastream, etc.)
- Filter on content using a predicate



== Event Filtering Diagram ==
