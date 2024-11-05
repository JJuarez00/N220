let currentPage = 0;
let totalPages = 0;

async function getDigimon() {
    const digiResponse = await fetch(`https://digimon-api.vercel.app/api/digimon`);

    const digiData = await digiResponse.json();

    return digiData;
}

async function updateSection() {
    const digimonPageRef = document.getElementById("digimonPage");

    const allDigimon = await getDigimon();

    totalPages = Math.ceil(allDigimon.length / 10);

    digimonPageRef.innerHTML += `<h3>Page: ${currentPage + 1} of ${totalPages}</h3>`;

    digimonPageRef.innerHTML += `
    <table> 
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Level</th>
            </tr>
            <tbody id="digimonList"></tbody>
        </thead>
    </table>
    `;

    let pageNumbers = "";

    for (let i = 0; i < totalPages; i++) {
        pageNumbers += `<option value="${i}">${i +1}</option>`
    }

    digimonPageRef.innerHTML += `
    <div>
        <button onclick="goToPage(-1)">Previous Page</button>
        <select id="pageNum" onChange="changePage(event)">${pageNumbers}</select>
        <button onclick="goToPage(1)">Next Page</button>
    </div>
    `;
    updatePage();
}

function changePage(e) {
    currentPage = Number(e.currentTarget.value);
    updatePage();
}

function goToPage(pageDirection) {
    if (pageDirection > 0) {
        if (currentPage == totalPages-1) {
            alert("There are no additional pages!");
        } else {
            currentPage++;
        }
    } else {
        if (currentPage === 0) {
            alert("This is the first Page!")
        } else {
            currentPage--;
        }
    }

    document.getElementById("pageNum").value = currentPage;

    updatePage();
}

async function updatePage() {
    
    const h3Ref = document.querySelector("h3");
    
    const digimonListRef = document.querySelector("#digimonList");

    h3Ref.innerHTML = `Page: ${currentPage + 1} of ${totalPages}`;

    const allDigimon = await getDigimon();

    let startingIndex = currentPage * 10;
    let endingIndex = currentPage *10 + 10;

    digimonListRef.innerHTML = "";

    for (let i = startingIndex; i < endingIndex; i++) {2

        if (i >= allDigimon.length) {
            continue;
        }
        
        const digimon = allDigimon[i];

        digimonListRef.innerHTML += `
        <tr>
            <td>${i}</td>
            <td>${digimon.name}</td>
            <td>
                <img src="${digimon.img}" height="50"></img>
            </td>
            <td>${digimon.level}</td>
        </tr>
        `;
    }
}

updateSection();
