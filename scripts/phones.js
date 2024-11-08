const loadData = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const phones = await response.json();
    displayPhones(phones.data);
}

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
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
                            <button class="btn bg-[#0D6EFD]">Show Details</button>
                        </div>
                    </div>
        `;
        phoneContainer.appendChild(singlePhone);
    });
}

loadData()