## Todo List application with plain JavaScript Only - (No third party Libs) ##

1. Reference Link 
    - Code repository: 
        -   https://github.com/themaxsandelin/todo 
	- Design files: 
        -   https://www.dropbox.com/sh/yq0qm8xtfguufyb/AAB6z26DddNyjbUhlDb12kBNa?dl=0
	- YouTube:
        -   https://www.youtube.com/watch?v=2wCpkOk2uCg
        -   https://www.youtube.com/watch?v=bGLZ2pwCaiI

2. Enhancements 
    1. Added NodeJS based middleware code for TODO services
        - Fetch all  :- /posts
        - Add New    :- /post/new
        - Update     :- /post/:1d
        - Delete     :- /post/:1d

    2. Used ES6 classes 
    3. Used ```fetch API``` for making Ajax calls 
    4. Added custom ```incremental search``` functionality with Ajax (client side only) with hardcoded data

3. start scripts 

    - middleware 
       - $ cd todo/middleware
       - $ npm install (first time only)
       - $ npm start
    - client 
       - $ http-server
