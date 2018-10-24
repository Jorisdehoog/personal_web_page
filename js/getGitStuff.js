// fetch the user


// const secrets = fetch("githubToken.json")
//     .then(response => response.json())
//     .then(json => {
//         console.log(json[0].client_id)
//         const client_id = json[0].client_id;
//         const client_secret = json[0].client_secret;
//         return json;
//     })

async function loadJSON(url) {
    const res = await fetch(url);
    return await res.json();
}

user1 = "Jorisdehoog";

const fetchUsers = async(user) =>{
    // we need to get the credentials before getting the results.
    console.log('we got this far')

    secrets = loadJSON("githubToken.json").then(data => {
        const client_id =  data[0].client_id;
        const client_secret =  data[0].client_secret;
        return [client_id, client_secret];
    })

    client_id = secrets[0];
    client_secret = secrets[1];
    
    console.log(client_id)
    
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
    const data = await api_call.json();
    return { data: data }
};


const showData = () => {
    fetchUsers(user1).then((res) => {
        console.log(res);
        console.log(res.data.public_repos)
        var lastUpdate = new Date(res.data.updated_at);
        lastUpdate = lastUpdate.toJSON();
        console.log(lastUpdate)
        
        document.getElementById("repoNumber").innerHTML = "Number of repos: " + res.data.public_repos;
        var url = document.getElementById("blog");
        url.href = res.data.blog;
        url.innerHTML = res.data.blog;
        document.getElementById("name").innerHTML = "Full name: " + res.data.name;
        document.getElementById("update").innerHTML = "Last updated: " + res.data.updated_at;

        // get and put profile pic
        var pict = document.getElementById("profile");
        pict.src = res.data.avatar_url;
    })
};

showData();

{/* <p id="blog"></p>
<p id="name"></p>
<p id="update"></p> */}