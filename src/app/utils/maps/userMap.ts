import { User, UserPostDto } from "../../interfaces/usuario";

export function userToUserRequest(user:User,password:string):UserPostDto{
  const newUser : UserPostDto = {
    Email: user.email,
    FirstName: user.firstName,
    LastName: user.lastName,
    Password: password
  }
  return newUser;
}

// export function userRequestToUser(user:UserRequest):User{
//   const user : User = {
//     username: "",
//     email: "",
//     role: "Admin"
//   }
//   return user;
// }