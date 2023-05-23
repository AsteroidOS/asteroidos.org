---
title: Technical Details
layout: documentation
---

# Technical Details of AsteroidOS Watches
---

While AsteroidOS does not use Android, it does rely on Android drivers that are, in the context of AsteroidOS, supported with [libhybris](https://github.com/libhybris/libhybris).  See the [FAQ]({{rel 'faq/#is-asteroidos-based-on-android'}}) for more details on this.

In the table below "SoC" stands for ["System-on-Chip"](https://en.wikipedia.org/wiki/System_on_a_chip) and refers to the device that contains not only the main CPU(s) but also other important parts of the system.

### Supported watches

<table class="table table-striped">
  <tr>
  <thead>
    <th>Model Name</th>
    <th>Codename</th>
    <th>Support</th>
    <th>SoC</th>
    <th>Kernel</th>
    <th>Original Android</th>
  </thead>
  </tr>
  {{#each (getAllWithStatus "supported")}}
  <tr>
    <td>
      <a href="../../watches/{{#if reference}}{{reference}}{{else}}{{name}}{{/if}}">{{models}}</a>
    </td>
    <td>{{name}}</td>
    <td>{{#starString stars 5}}{{/starString}}</td>
    <td>{{soc}}</td>
    <td>{{kernelversion}}</td>
    <td>{{androidversion}}</td>
  </tr>
  {{/each}}
</table>

### Experimental watches

<table class="table table-striped">
  <tr>
  <thead>
    <th>Model Name</th>
    <th>Codename</th>
    <th>Support</th>
    <th>SoC</th>
    <th>Kernel</th>
    <th>Original Android</th>
  </thead>
  </tr>
  {{#each (getAllWithStatus "experimental")}}
  <tr>
    <td>
      <a href="../../watches/{{#if reference}}{{reference}}{{else}}{{name}}{{/if}}">{{models}}</a>
    </td>
    <td>{{name}}</td>
    <td>{{#starString stars 5}}{{/starString}}</td>
    <td>{{soc}}</td>
    <td>{{kernelversion}}</td>
    <td>{{androidversion}}</td>
  </tr>
  {{/each}}
</table>

