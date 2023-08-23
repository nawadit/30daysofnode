

# Beginner's Guide to Internet Basics and Backend Development

## Introduction

Welcome to the world of backend development! In this guide, we will explore the fundamental concepts that power the Internet and provide a solid foundation for your backend development journey. Whether you're new to programming or looking to expand your skills, this guide is designed to demystify the core concepts that make the digital world tick.

## Table of Contents

1. **Understanding the Internet**
   - What is the Internet?
   - How do computers communicate over the Internet?
   - Introduction to HTTP (Hypertext Transfer Protocol)
   - How do web browsers work?

2. **Domain Name System (DNS)**
   - What is DNS?
   - How do DNS servers work?
   - Translating domain names to IP addresses
   - Importance of DNS in web development

3. **Web Hosting and Domains**
   - What is web hosting?
   - Different types of web hosting
   - Registering a domain name
   - Connecting a domain to a web host


## Understanding the Internet

### What is the Internet?

The Internet is a global network of interconnected computers that allows the sharing of information and resources. It enables communication between devices located in different parts of the world. Internet is not a cloud, internet is a wire, or a bunch of wires laid down on ocean floor.

Two computers connected to this wire can communicate with each other. A server is a computer that is connected directly to the internet and webpages are files on hard drives of servers. Every server has its own IP address, which is something that helps computers find each other.

Computers we use are not client because they are connected to the internet indirectly, thorough an ISP (Internet Service Provider).


### How do computers communicate over the Internet?

Computers communicate using a protocol called HTTP, which stands for Hypertext Transfer Protocol. HTTP facilitates the exchange of data, such as web pages, between a web server and a web browser.
Whenever there is communication over the internet, the information is broken into pieces called packets which are then rearranged at destination to form the original un-divided information.

Everything connected directly or indirectly to the internet has an IP address.

Anywhere there is an intersection of connection of two or more devices there is a router which directs your packets around the internet. Approx. 10 - 15 routers direct your packets when you access something on the internet.

When you send a packet of data, each router it passes through add its own wrapper of IP address over it and when the server returns the data to you, each router unpacks the layer it put before and directs the data to correct path.


### Introduction to HTTP

HTTP is the foundation of data communication on the Internet. It defines how requests and responses should be formatted and sent, enabling the retrieval of web resources like text, images, and videos. A request for data sent from client to the server is called a HTTP request and the response that the server fires back to the client is called an HTTP response. 

#### Structure of HTTP requests and HTTP responses

##### HTTP requests:
Start Lines: Method/ Target Server Domain/ Version

Headers: Browser Information

Body:

##### HTTP responses:
Start Lines: Version of HTTP/ Status Code/ Status Text

Headers: Metadata about response

Body: Response files

#### Status Codes and their meaning

The status code is a 3-digit code that the server sends in HTTP response. This code is used to represent the status of the request fired by the client (resolved or not).

100s: Informational

200s: Sucess

300s: Redirection

400s: Client Side Error

500s: Server Side Error


### How do web browsers work?

Web browsers, like Chrome, Firefox, and Safari, interpret and display web content to users. They send HTTP requests to web servers, receive responses, and render the content using HTML, CSS, and JavaScript. Web browsers these days are essentially an operating system with their own timers, data storage facility, and engines that buildup render able DOM from raw data. 

Process:
The file is loaded form network. The raw data is characterized using the provided UTF. Then comes tokenization, and then objects are created. And after all that Modeling is done in which we first establish relation between objects we just created (Parent, Child, Sibling) and create a node list. 


## Domain Name System (DNS)

### What is DNS?

The Domain Name System (DNS) is a decentralized system that translates human-readable domain names (like example.com) into IP addresses, which computers use to locate resources on the Internet.

### How do DNS servers work?

DNS servers maintain a database of domain names and their corresponding IP addresses. When you enter a URL in your browser, your computer queries DNS servers to find the IP address associated with that domain.

There are two types of DNS queries, recursive and iterative. The main difference between them is what happens when the local DNS server cannot resolve the DNS query fired by the client.

If it's a recursive DNS query the DNS server sends back the address of it's parent DNS server where it anticipates the query will be resolved whereas in iterative DNS request the local DNS server takes on the responsibility of finding the IP address of the sent domain name by sending out an iterative DNS request to it' s parent DNS server. 



### Translating domain names to IP addresses

DNS servers follow a hierarchical structure to resolve domain names. This process involves multiple DNS servers, including authoritative DNS servers for specific domains.

### Importance of DNS in web development

DNS plays a crucial role in ensuring that users can access websites using memorable domain names. Proper DNS configuration is essential for website availability and performance.

## Web Hosting and Domains

### What is web hosting?

Web hosting involves storing website files and data on servers connected to the Internet. Web hosts provide the infrastructure needed to make websites accessible online.

### Different types of web hosting

Various types of web hosting exist, including shared hosting, virtual private servers (VPS), and dedicated servers. Each type offers different levels of control, performance, and scalability.

### Registering a domain name

Domain registration involves purchasing a unique web address for your website. Choose a domain name that reflects your brand and is easy for users to remember.

### Connecting a domain to a web host

To make your website accessible via your domain name, you need to configure DNS settings to point to your web host's IP address. This step ensures that users can reach your site using the domain.
