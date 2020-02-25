#User Registration 

    In registration have four params :
    a - f_name
    b - l_name
    c - email
    d - User_Id

#User Login

    To check the user are in or not, we pass two params : 
    a - email
    b - Id (change Id into token from to validate the user)

 #User

    We have to perform CRUD operation here : 
    a - If user isn't present so create user in database.
    b - If user are present than we provide update facilities.
    c - Deletion of user data with specific Id.
    d - Retrieve whole user data with specific Id.

#Product 

    We have also perform CRUD operation here to take three params :
    a - User_Id 
    b - pdesc
    c - pname

#Reviews 

    With the user specific Id we have to concatinate the specific user f_name with the specific product's_name_id.
