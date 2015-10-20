# <%= appName %>

## Installation
### via NPM

You can install a <code><%= appNameLowerCase %></code> package very easily using NPM. After
installing NPM on your machine, simply run:
````
$ npm install <%= appNameLowerCase %>
````

### with Git

You can clone the whole repository with Git:
````
$ git clone ...
````

### from latest version

Also you can download [the latest release](#) of `<%= appName %>` engine and include built files to your project.


##Usage
````js
import JsFile from 'JsFile';
import <%= appName %> from '<%= appNameLowerCase %>';

const jf = new JsFile(file, options);
````
`file` - [File](https://developer.mozilla.org/en/docs/Web/API/File) or [Blob](https://developer.mozilla.org/en/docs/Web/API/Blob). 
You may find information about options and `jsFile` in [documentation](https://github.com/jsFile/jsFile#installation)