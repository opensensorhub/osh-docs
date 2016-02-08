Interconnecting SensorHubs
===

Instances of OpenSensorHub at various levels of your sensor network can be interconnected using the SOS protocol. This is often used to implement sub-networks, local measurement aggregators or gateways to pass from the private side to the public side of a network. It can also be used to send your data to an OSH instance in the cloud to do CPU intensive processing or broadcast to a large number of users. Possibilities are endless.

This transfer can be done in two ways; using either a push or pull approach.


### Pull Approach

We call this approach "pull" but it is in fact implemented as a persistent connection between the two nodes, either through **HTTP** or **WebSocket**.

To pull data from **Node A** to **Node B**, you need:

- An **SOS Interface** accessible on **Node A**
- An instance of the **SWE Virtual Sensor** driver on **Node B**

You then have to properly configure the virtual sensor on **Node B** to connect to your SOS endpoint on **Node A**, and specify the ID of the sensor and observed properties that you want to be fetched.



### Push Approach

In this case, we make use of the transactional interface of the SOS server.

To push data from **Node A** to **Node B**, you need:

- An **SOS Interface** accessible on **Node B**, with the option "Enable Transactional" set to true
- An **SOS-T Client** on **Node A**

You then have to properly configure the SOS-T client on **Node A** to connect to the SOS endoint on **NodeB**.

The SOS-T client will listen to one of the sensor streams (i.e. output of sensor drivers) on **Node A** and forwards it to the remote SOS server using **InsertResult**.
