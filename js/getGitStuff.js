// fetch the user



const client_id = "Iv1.50fde0671b30c1ec";
const client_secret = "dc958d06291f137ad4a909ac7a728ae41e68694a";

user1 = "Jorisdehoog";

const fetchUsers = async(user) =>{
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    const data = await api_call.json();

    return { data: data }
};


const showData = () => {
    fetchUsers(user1).then((res) => {
        console.log(res);
    })
};

showData();

