# PAB Javscript Coding Test

The PAB JavaScript Coding Challenge is an opportunity for you to exhibit your distinctive approach to coding. It enables you to craft something that reflects your personal style and preferences. You have the freedom to adjust the code to align with your own coding conventions and preferences. Feel free to modify the setup, code, or methodology as you see fit. Please ensure to thoroughly review all instructions provided below before you begin.

### The Task

You are tasked with developing a straightforward auto-search functionality, akin to (one that I'm unable to specify due to the company's privacy policy) where, as the user types, the input is validated against a Node.js server, and the corresponding data is subsequently loaded. You have the liberty to design and implement this feature in any way you deem appropriate, but it's crucial to utilize JavaScript/React for the frontend and Node.js for the backend. The initial setup for this project has already been prepared for you in the provided source code. Here are some general guidelines to get you started:

The main entry point for the application is located in the 'app/scripts/main.js' file. You should start your development from this file for the application logic.
The server-side logic, including the data validation and response handling, is located in the 'server/app.js' file. This is where you should focus your efforts to finalize the Node.js server setup.
The dataset used for the auto-search functionality is stored in the 'server/data.js' file, which is then imported into the Node.js server setup in 'server/app.js'.
The SASS styling for the application is contained within the SCSS files, which can be found in the 'app/sass' directory.
You can modify the runtime configuration by editing the 'gulpfile.js' file.

## Getting Started

### Prerequisites

* NPM (version 8)
* NodeJS (version 17)

Should you be operating on a different NodeJS version, it's recommended to utilize NVM (Node Version Manager) to switch to version 17. You can access NVM's documentation at https://github.com/nvm-sh/nvm

For Windows users, NVM for Windows is available here: https://github.com/coreybutler/nvm-windows

### Step 1 - Node Modules

The initial step to get this application operational involves installing the Node modules by executing the following command:

```
    npm install
```

### Step 2 - Running the App

Following the installation of the Node modules, you need to initiate two locally hosted servers. The first is the Node.js backend server, which executes the NodeJS files located in the './server' directory. The second is the frontend server, which operates the app files located in the './app' directory. Both servers can be initiated by executing the following command, ensuring you're using the appropriate versions of Node and NPM as specified in the prerequisites:

```
    npm run servers
```

This command initiates a frontend server accessible at http://localhost:3030 (which should automatically launch in your browser), and it also starts the Node.js backend server at http://localhost:3035, utilizing Nodemon to enable automatic updates upon saving.

*Special Note for Windows Users*

On Windows systems, you might encounter an error such as:

'NODE_ENV' is not recognized as an internal or external command, operable program or batch file.

If this happens, you'll need to modify any instances of NODE_ENV in the package.json file by replacing them with 'SET NODE_ENV', and ensure this command is separated from the subsequent command with an '&', as shown below:

```
"node-server": "SET NODE_ENV=development & nodemon server/app.js"
```


## Front End App Folder

The entirety of the frontend source code is located within the './app' directory. Here's a breakdown of each subfolder:

### images

Here, you can (optionally) upload images that can be processed with the npm command:

    npm run image-min

This will compress the images and place them in the '.local_server/img/' directory.

### sass

Here, you'll locate the SCSS files; we utilize Sass in the project to compile into CSS. These files will automatically compile upon saving when executing the standard 'npm run dev-server' command. Nonetheless, you have the option to manually compile this by executing the following command:

    npm run sass

### scripts

All the JavaScript code is located here. The Webpack configuration is found in the 'config/webpack.config.js' file. These files are processed with the '@babel/preset-env' and '@babel/preset-react' loaders, allowing you to write ES2017 and/or React code.

The application is initiated from the 'app/scripts/main.js' file, making it the starting point for the App.

### third_party

Third-party can be utilized to include any third-party libraries that you might want to incorporate into your application. You can execute a command to transfer all the third-party components with:

    npm run third-party

### views

The views folder houses the HTML templates. These templates are crafted using the Mustache templating language.


## Node Back End Server Folder

### app.js

The back-end server's source code is located in the './server' folder, particularly in the app.js file. The app.js file contains initial code for you to establish your own HTTP server, which will listen on port 3035 and generate a data response, loading the product data from the data.js file in JSON format. Beyond the comments in the app.js file, it's recommended to consult the NodeJS http.serverResponse documentation.

To initiate the server independently, you can execute this commandL

    npm run node-server

### data.js

The information in the data.js file adheres to the following JSON Schema:

    {
        "_id": "001", // A Number for the product
        "isActive": "false", // Is the product actively in stock
        "price": "23.00", // The price of the product in the set currency
        "picture": "/img/products/N16501_430.png", // The location of the image for the product
        "name": "Damage Reverse Thickening Conditioner", // The products name
        "about": "Description for the product...", // Description of the product
        "tags": [ "ojon", "conditioner" ] // The tags for the product
    }
