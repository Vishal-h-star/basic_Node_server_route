

# check the routes image in ScreenShots folder 
---> All routes screenshots are uploded

# basic_Node_server_route
A basic Node.js server that serves static HTML pages (home, about, contact) from a public folder. It also handles static assets like CSS, and images.

The very first task I handled was serving different routes and returning the corresponding pages from my folder.
I searched online and found that the path module helps access file paths. 
Using path.join along with __dirname allows me to get the exact path of the current directory.

The most interesting part was figuring out how to serve CSS files.
For example, when /about is accessed, the HTML file contains a link to ./style.css.
The server receives a request for that CSS file, and this is where the else block comes in:

else {
    filePath = path.join(__dirname, "public", req.url)
}

Here, req.url refers to the requested file path, like ./style.css.

Another interesting part was handling file reading. in fs.readFile()
If a file is not found, it throws an ENOENT error, which stands for “Error NO ENTry,” meaning there is no such file or directory at that path. 
I handled this error accordingly to prevent the server from crashing and to show my 404 not found page 

