import { useState } from 'react';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const chats = [
    { _id: '1', participant: { username: 'Ahmed Raza', profileImage: '/images/p6.jpg' }, lastMessage: 'When can you start the work?', unread: 2, updatedAt: '2025-12-10T10:30:00' },
    { _id: '2', participant: { username: 'Muhammad Aslam', profileImage: '/images/p1.jpg' }, lastMessage: 'I am available from Monday', unread: 0, updatedAt: '2025-12-09T15:20:00' },
    { _id: '3', participant: { username: 'Fatima Khan', profileImage: '/images/p5.jpg' }, lastMessage: 'Thank you for the great work!', unread: 0, updatedAt: '2025-12-08T09:15:00' },
  ];

  const messages = [
    { _id: '1', sender: 'other', content: 'Hello, I saw your profile. Are you available for construction work?', createdAt: '2025-12-10T09:00:00' },
    { _id: '2', sender: 'me', content: 'Yes, I am available. What kind of work do you need?', createdAt: '2025-12-10T09:05:00' },
    { _id: '3', sender: 'other', content: 'I need a mason for house construction. It will take about 2 weeks.', createdAt: '2025-12-10T09:10:00' },
    { _id: '4', sender: 'me', content: 'I can do that. What is the location and budget?', createdAt: '2025-12-10T09:15:00' },
    { _id: '5', sender: 'other', content: 'Location is Karachi, DHA Phase 5. Budget is Rs. 150,000', createdAt: '2025-12-10T09:20:00' },
    { _id: '6', sender: 'other', content: 'When can you start the work?', createdAt: '2025-12-10T10:30:00' },
  ];

  const handleSend = () => {
    if (newMessage.trim()) {
      console.log('Sending:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex h-[calc(100vh-64px)]">
          {/* Chat List */}
          <div className={`w-full md:w-80 bg-white border-r ${selectedChat ? 'hidden md:block' : ''}`}>
            <div className="p-4 border-b">
              <h1 className="text-xl font-bold text-gray-900">Messages</h1>
            </div>
            <div className="overflow-y-auto h-[calc(100%-60px)]">
              {chats.map((chat) => (
                <button
                  key={chat._id}
                  onClick={() => setSelectedChat(chat)}
                  className={`w-full p-4 flex items-center gap-3 hover:bg-gray-50 border-b ${selectedChat?._id === chat._id ? 'bg-green-50' : ''
                    }`}
                >
                  <img src={chat.participant.profileImage} alt="" className="w-12 h-12 rounded-full object-cover" />
                  <div className="flex-1 text-left">
                    <div className="flex justify-between items-center">
                      <p className="font-medium text-gray-900">{chat.participant.username}</p>
                      {chat.unread > 0 && (
                        <span className="bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>


          {/* Chat Window */}
          <div className={`flex-1 flex flex-col ${!selectedChat ? 'hidden md:flex' : ''}`}>
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b bg-white flex items-center gap-3">
                  <button onClick={() => setSelectedChat(null)} className="md:hidden text-gray-500">
                    ← Back
                  </button>
                  <img src={selectedChat.participant.profileImage} alt="" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-medium text-gray-900">{selectedChat.participant.username}</p>
                    <p className="text-xs text-green-600">Online</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((msg) => (
                    <div key={msg._id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[70%] px-4 py-2 rounded-2xl ${msg.sender === 'me' ? 'bg-green-600 text-white' : 'bg-white text-gray-900'
                        }`}>
                        <p>{msg.content}</p>
                        <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-green-100' : 'text-gray-400'}`}>
                          {new Date(msg.createdAt).toLocaleTimeString('en-PK', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 bg-white border-t">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                    />
                    <button
                      onClick={handleSend}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <p className="text-gray-500 text-lg">Select a conversation to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
