const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeWebsite(url){

try{

const {data} = await axios.get(url,{

headers:{

"User-Agent":
"Mozilla/5.0"

}

});

const $ = cheerio.load(data);

const title = $("title").text();

const description =
$('meta[name="description"]').attr("content") || "";

const headings = [];

$("h1,h2").each((i,el)=>{

headings.push($(el).text().trim());

});

const paragraphs = [];

$("p").each((i,el)=>{

const text=$(el).text().trim();

if(text.length>40){

paragraphs.push(text);

}

});

return{

title,

description,

headings,

paragraphs

};

}

catch(error){

console.log(error);

return null;

}

}

module.exports = scrapeWebsite;