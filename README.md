# Preamble

I found this to be a very interesting test, I’ve not had the opportunity to create a web widget, and building one in such a short space of time was indeed a challenge.

## 1) How can you initialize and render the widget in that Web page? How can communicate the Web app with the Parking widget (and vice versa) ?

My initial thoughts were to create the widget as a standalone web-page and then use an iFrame element to render than within the main website. But I found there were several issues with this, one the size of the iFrame would need to be adjusted according to the certain interactions, and I would be limited to using PostMessage to send information to the host Web page. If I had more time to investigate, I would probably look into using WebSockets, and rendering the page with Mustache.js instead.

## 2) How can you guarantee that another developer can modify your code without breaking the features? How can you guarantee to modify your code during a refactoring without breaking any functionality?

I would create unit tests to ensure both of these, that any future modifications will be tested against the proper operations. This could easily be automated with continuous integration. Again, I’ve never actually created unit tests before so I’m not entirely sure of how to complete this part of the task.

## 3) How do you differentiate desktop and mobile devices?

I’m not entirely certain that differentiating between a desktop device and a mobile device is the best idea. Afterall we should be able to create a website that is accessible from any device regardless. The outline of this test never went into any detail of desktop and mobile needs aside from the layout change of the parking spaces. I believed a simple @media query was sufficient in achieving this.