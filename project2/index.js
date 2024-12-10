const url="https://restcountries.com/v3.1/all ";
const ele = document.getElementById("container")
async function fetchData(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        for(let i=0;i<=data.length;i++){
            const value = data[i];
            const html=`<div class="card">
            <img src=${value.flags.png} style="width:180px;height:150px;display:flex; justify-content:centre ;align-items:centre"/>
            <h3>${value.name.common}</h3>
            <span>population: ${value.population}</span><br>
            <span>Region:${value.region}</span><br>
            <span>Capital:${value.capital}</span><br>
            </div>`;
            ele.innerHTML+=html;
        }
    }
    catch(error){
        console.log("error",error.message);
    }
}

