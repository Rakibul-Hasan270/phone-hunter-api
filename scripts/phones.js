const loadData = async (searchText) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const phones = await response.json();
    displayPhones(phones.data);
}

const displayPhones = phones => {
    console.log(phones.length)


    // showMore btn add or hidden 
    const showMore = document.getElementById('show-more');
    if (phones.length > 12) {
        showMore.classList.remove('hidden');
    } else {
        showMore.classList.add('hidden');
    }

    // display phone only 12 
    phones = phones.slice(0, 12);

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';
    phones.forEach(phone => {
        // console.log(phone.length);
        console.log(phone);

        const singlePhone = document.createElement('div');
        singlePhone.classList = `card bg-base-100 shadow-xl border m-4`;
        singlePhone.innerHTML = `
        <figure class="px-10 pt-10">
                        <img src="${phone.image}"
                            alt="Phone" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">${phone.phone_name}</h2>
                        <p>${phone.slug}</p>
                        <div class="card-actions">
                            <button onclick="phnDetails"() class="btn bg-[#0D6EFD]">Show Details</button>
                        </div>
                    </div>
        `;
        phoneContainer.appendChild(singlePhone);
    });
    spinner(false);
}


// phone details 
const phnDetails = () => {
    console.log(456)
}

// spinner or loader 
const spinner = (isLoading) => {
    const loader = document.getElementById('spinner');
    if (isLoading) {
        loader.classList.remove('hidden');
    }
    else {
        loader.classList.add('hidden');
    }
}

const searchFun = () => {
    spinner(true);

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    loadData(searchText);
}