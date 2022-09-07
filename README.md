## Personal Blog

This was a udergraduate personal project where I made a personal blog using the client-server design pattern. 

# Client
The client side was built using React. I implemented a WYSIWG that that could edit and render page information. One caveat of the way that I designed the client was the editorcould be enabled with a change of state, although edits could only be saved through authentification with the server. Authentification was done using simple authentification and SSL encrytpion.

# Server
and the server side was handeled with a Node.js server running on [AWS lambda](https://aws.amazon.com/lambda/). Page information ws stored on [AWS Dynamo DB](https://aws.amazon.com/dynamodb/?p=ft&c=db&z=3) which is a non-relational dabase (probably was not the best choice for the problem).


