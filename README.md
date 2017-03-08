# Domain - Front-end technical test

Here is my version of the technical test provided.

I chose to build it with AngularJS (with `angular-seed`) as the main goal to achieve is data binding between the form and the card. I also embedded bootstrap for the css structure and built over it with my custom styles using the BEM notation. As I didn't have Photoshop on my machine, I created the default avatar by "screen printing" the PNG provided (the cropping is not perfect).  
I couldn't get my SASS compiler running on my machine so I just wrote the CSS directly.

##Installation

To get you started you can simply clone the `hcard-builder` repository and install the dependencies:

### Prerequisites

You need git to clone the `hcard-builder` repository.

It also uses a number of Node.js tools to initialize `hcard-builder`. You must have Node.js
and its package manager (npm) installed.

### Clone `hcard-builder`

Clone the `hcard-builder` repository using git:

```
git clone https://github.com/McBenny/hcard-builder.git
cd hcard-builder
```

### Install Dependencies

We (angular seed) have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`angular-seed` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

The HTML file presenting the app is in `app/view1/view1.html`,  
The custom styles are in `app/app.css`,  
The custom scripts I added are in `app/view1/view1.js` (a filter and the image preview script),

