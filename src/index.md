---
home: true
heroImage: https://opensensorhub.files.wordpress.com/2017/08/opensensorhub-logo2.png
tagline: Java-based middleware for building better Sensor Webs and the Internet of Things
title: 
actionText: Quick Start →
actionLink: /guide/
xfeatures:
- title: Support for any Sensor or Actuator
  details: Integration any sensor or actuator from the simplest to the most complex systems
- title: Efficient Real-Time Streaming
  details: Access your real-time data efficiently using Websocket or MQTT, including higher bandwdith data feeds such as video.
- title: High-Performance Data Stores
  details: Many options for storing your historical data from small embedded devices to cloud-based distributed store.
- title: Open Web APIs
  details: A choice of open APIs to retrieve real-time and historical data and task your assets remotely
- title: Advanced AI/ML/CV Processing
  details: Pick from our processing toolbox or use our processing framework to bring in your own advanced processing algorithms
- title: Federated Database Access
  details: Aggregate data from multiple heterogeneous data stores and present it through a unified interface
- title: Full Lineage Support
  details: Describe your measurement processes robustly to enable advanced post-processing use cases
---

<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.xfeatures">
    <!--<img src="feat.image"></img>-->
    <h2><a v-bind:href="feat.link">{{ feat.title }}</a></h2>
    <p>{{ feat.details }}</p>
  </div>
</div>
