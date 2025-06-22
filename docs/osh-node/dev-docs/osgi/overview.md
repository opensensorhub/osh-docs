---
title: Overview
sidebar_position: 0
---

OSGi is a framework that promotes dynamic, modular software architecture/deployments.
OSGi in **OpenSensorHub** enables developers to write their code once, 
and have it available to many OSH nodes via the OSH-OSGi interface, 
independent of whether their code was included in the OSH node's build process.

It is common OSH developers to use the `osh-addons` repository for building an OSGi repository,
which consists of **bundles**, and the **OSGi manifest**.

With OSGi, OSH nodes can dynamically install modules from an attached bundle repository.

The following pages in this section will provide guides/explanations on a few topics:

- Building/deploying an **OSGi-enabled OSH node**
- Building/deploying an **OSGi bundle repository**
- Configuring OSGi when developing an OSH module