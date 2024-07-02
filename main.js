
const listBook = document.querySelector('.list');

const getDataFormJson = async () =>{
    const repone = await fetch('mockData.json');
    const data = await repone.json();
    if(data){
        listBook.innerHTML = data.map(item =>{
            return `
            <div class="item">
                <img src="./assets/icons/open-book.png" alt="open-book" class="icon-ab">
                <img src="${item.imgUrl}" alt="${item.title}">
                <div class="product-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <a href="pages/detail/index.html?id=${item.id}" class="btn">View</a>
                </div>
            </div>
            
            ` 
        })
    }
}

getDataFormJson();