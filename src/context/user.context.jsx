import { useState,createContext } from "react";

function findUser(users,email){
    const user = users.find((user)=> user.email === email );
    console.log(user);
    if(user){
        return user
    }
    return undefined;
}

function addUsers(users,userToAdd,setUser){
    const user = users.find((User)=> User.email===userToAdd.email);
    if(user){
        return users;
    }else{
        setUser(userToAdd);
        return [...users,userToAdd]
    }
}

export const UserContext = createContext({
    user:undefined,
    users:[],
    setUsers:()=>null,
    setUser:()=>null,
    checkLogin:()=>null,
    signUpUser:()=>null
})

export const UserProvider = ({ children }) =>{
    const [user,setUser] = useState(undefined);

    const [users,setUsers] = useState([{
        email:"Admin500@blod.com",
        password:"Blod@#100",
        isAdmin:true
    }]);

    const checkLogin = (email,password)=>{
        const id = findUser(users,email);
        if(id.password===password){
            setUser(id);
        }
    }

    const signUpUser = (userToAdd)=>{
        if(userToAdd){
            const foundUser = findUser(users,userToAdd.email);
            console.log(foundUser)
            if(foundUser===undefined){
                setUsers(addUsers(users,userToAdd,setUser));
                return true;
            }
            return false;
        }else{
            return false;
        }
    }

    const values = {
        user,
        users,
        signUpUser,
        setUser,
        checkLogin,
        setUsers
    } 

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}