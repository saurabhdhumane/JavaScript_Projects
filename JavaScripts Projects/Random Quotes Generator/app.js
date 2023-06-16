const blockquote = document.querySelector("#blockquote");



const getNewQoutes = async () => {
    blockquote.innerHTML = `
    <h1>Todays Quote Loading</h1>
    `
    const quotesApi = `https://type.fit/api/quotes`;
    const apiResponse = await fetch(quotesApi)
    const data = await apiResponse.json()
    console.log(data)

    return printRandomeQuote(data);
};

const printRandomeQuote = (data) => {
    // const QoutesIndex = data.length;
    const QoutesIndex = Math.floor(Math.random() * data.length)
    const MyQuote = data[QoutesIndex]

    // console.log(MyQuote)
    // console.log(QoutesIndex)

    blockquote.innerHTML = `
    <h1 id="quotes">
    ${MyQuote.text}
   </h1>
  <h4 id="author">&mdash;<i> ${MyQuote.author}</i></h4>
  </div>
    `
    getColor();

}


const getColor = () => {

    
    //hexcode
    const randomnumber = Math.floor(Math.random() * 16777215);
    // console.log(randomnumber)
    const randomCode = "#" + randomnumber.toString(16);
    // console.log(randomCode)
    if(randomCode=='#3b805' || '#e06f1' || '#fff'){
        document.body.style.backgroundColor = 'black';
        }
    document.body.style.backgroundColor = randomCode;
}

getNewQoutes()