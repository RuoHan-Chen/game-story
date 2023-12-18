
async function getItems() {
    try {
        const response = await fetch('./items.json');
        const items = await response.json();
        return items;
    } catch (error) {
        console.error('Error fetching items:', error);
        return [];
    }
}

async function openModal(type) {
    if (type === 'Inventory') {
        document.getElementById('modalOverlay').style.display = 'flex';

        const modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = '';

        const items = await getItems();

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 10; j++) {
                const index = i * 10 + j;
                const component = items[index];

                const cell = document.createElement('div');
                cell.className = 'modal-cell';

                if (component) {
                    cell.innerHTML = `
                        <img src="${component.image}" alt="${component.name}" style="max-width: 100%; max-height: 100%;">
                    `;
                } else {
                    cell.innerHTML = `
                        <div class="empty-cell"></div>
                    `;
                }

                modalContent.appendChild(cell);
            }
        }
    }
}


function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}
