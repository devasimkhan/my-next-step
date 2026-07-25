import Message from "../models/messageModel.js"


  export const onlineUsers = new Map() 

   export  const chatHandler = (io , socket) =>  {

    const userId = socket.userId 
    if(!onlineUsers.has(userId)){
        onlineUsers.set(userId , newSet())
    }
    onlineUsers.get(userId).add(socket.id)
    io.emit("user_online" ,{userId})

    socket.on("join_room" ,( {senderID , receiverId}) => {

        const room = `room_${[senderID , receiverId].sort().join("_")}`
        socket.join(room)
    })

  socket.on("send_message" , async(({senderID ,receiverId , content})=> {
  if(!content?.trim()) return

  try {

const message =  Message.create({
    _id : message._id ,
    sender : senderID ,
     receiver : receiverId ,
     content : content.trim() 
})

 const room = `room_${[senderID , receiverId].sort().join("_")}`
  io.to(room).emit("receiver_message" , {
    _id : message._id ,
     sender : senderID ,
      receiver : receiverId ,
      content :message.content ,
      createdAt : message.createdAt
  })
    
  } catch (error) {
    socket.emit("message_error" , {error : "Error is sending message "})
  }

  socket.on("Typing" , ({senderID , receiverId})=>{

  const room = `room_${[senderID , receiverId].sort().join("_")}`
  socket.to(room).emit("user_typing" , {userId : senderID ,})

  } )

  socket.on("disconnect" , () => {

    const sockets = onlineUsers.get(userId)
  })
  if(!sockets){
    socket.delete(socket.id)
  }
 if(socket.size === 0)
  onlineUsers.delete(userId)
io.emit("user_offline" , {userId})
  } ))

} 